package app.qrme.core.controller;

import app.qrme.core.data.repository.*;
import app.qrme.core.data.specification.PostSectionSpecification;
import app.qrme.core.entities.*;
import app.qrme.core.service.StorageService;
import app.qrme.core.utils.GeneralUtil;
import app.qrme.core.utils.MGLStringUtils;
import app.qrme.core.utils.constants.Constants;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

@Controller
public class HomeController {

    @Autowired
    private StorageService serv;

    @Autowired
    private SliderRepository sliderRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    private PostCategoryRepository postCategoryRepository;

    @Autowired
    private BreakingNewsRepository breakingNewsRepository;

    @Autowired
    private PostSectionRepository postSectionRepository;

    @Autowired
    private PostTagRepository postTagRepository;

    @Autowired
    private QuickLinksRepository quickLinksRepository;

    @RequestMapping(value = {
            "/news/{category}-{id}",
            "/news",
            "/news/{category}-{id}/{tag}",
            "/სიახლეები/{category}-{id}",
            "/სიახლეები",
            "/სიახლეები/{category}-{id}/{tag}"
    }, method = RequestMethod.GET)
    public String news(Model model,
                       @PathVariable(name = "category", required = false) String category,
                       @PathVariable(name = "id", required = false) Long id,
                       @PathVariable(name = "tag", required = false) String tag,
                       @PageableDefault Pageable pageable) {
        configureSharedPart(model);
        model.addAttribute("title", "შენი სანდო წყარო");
        model.addAttribute("description", "სიახლეები, ახალი ამბები, განათლება, მეცნიერება, ბლიცი, ჯანმრთელობა, გართობა, სპორტი, რეკლამა, მეგზური, ვიდეო");
        model.addAttribute("recents", recentPosts());
        model.addAttribute("quicklinks", quickLinks());
        model.addAttribute("categories", categoryList());

        Page<Post> posts;

        if (category != null && !category.equals("") && id != null && id > 0) {
            category = category.replaceAll("#", "");
            model.addAttribute("pg_title", category);
            model.addAttribute("title", category);
            if (tag == null || tag.equals("")) {
                if (id == 1) {
                    posts = postRepository.findAll(
                            PostSectionSpecification.findRelated(new Long[]{1L, 6L, 7L, 8L, 9L, 10L}),
                            PageRequest.of(
                                    pageable.getPageNumber(),
                                    pageable.getPageSize(),
                                    new Sort(Sort.Direction.DESC, "timestamp.created")
                            )
                    );
                } else {
                    posts = postRepository.findAll(
                            PostSectionSpecification.findRelated(id),
                            PageRequest.of(
                                    pageable.getPageNumber(),
                                    pageable.getPageSize(),
                                    new Sort(Sort.Direction.DESC, "timestamp.created")
                            )
                    );
                }
            } else {
                Page<PostTag> tags = postTagRepository.findAll(
                        PostSectionSpecification.findByTag(id),
                        PageRequest.of(
                                pageable.getPageNumber(),
                                pageable.getPageSize(),
                                new Sort(Sort.Direction.DESC, "timestamp.created")
                        )
                );
                List<Post> p = new ArrayList<>();
                tags.getContent().forEach(obj -> {
                    p.add(obj.getPost());
                });
                posts = new PageImpl<>(p, tags.getPageable(), tags.getTotalElements());
            }
        } else {
            model.addAttribute("pg_title", "სიახლეები");
            posts = postRepository.findAll(
                    PostSectionSpecification.enabled(),
                    PageRequest.of(
                            pageable.getPageNumber(),
                            pageable.getPageSize(),
                            new Sort(Sort.Direction.DESC, "timestamp.created")
                    )
            );
        }

        model.addAttribute("pagination", GeneralUtil.paginating(pageable.getPageNumber(), posts.getTotalPages(), category, id));
        model.addAttribute("news", posts);
        model.addAttribute("pg", "news");
        return "index";
    }

    @RequestMapping(value = {
            "/detail/{text}-{id}",
            "/დეტალურად/{text}-{id}"
    }, method = RequestMethod.GET)
    public String detail(Model model,
                         @PathVariable("text") String text,
                         @PathVariable(value = "id") Long id) {
        configureSharedPart(model);
        Optional<Post> p = postRepository.findById(id);
        if (p.isPresent() && p.get().getActive() && text != null) {
            Post post = p.get();
            String firstDelim = "-qs-";
            String lastDelim = "-qe-";
            if (post.getDescr().contains(firstDelim) && post.getDescr().contains(lastDelim)) {
                String replStr = StringUtils.substringBetween(post.getDescr(), firstDelim, lastDelim);
                String newStr = MGLStringUtils.replaceBetween(post.getDescr(),
                        firstDelim, lastDelim,
                        "<blockquote class=\"qoute\">\n" +
                                "<p>" + replStr + "</p>\n" +
                                "<div class=\"current-post-type\">\n" +
                                "<i class=\"fa fa-quote-left\"></i>\n" +
                                "</div>\n" +
                                "</blockquote>");
                post.setDescr(
                        newStr.replaceAll(firstDelim, "")
                                .replaceAll(lastDelim, "")
                );
            }
            model.addAttribute("post", post);
            model.addAttribute("related", postRepository.findAll(
                    PostSectionSpecification.findRelated(post.getCategory().getId()),
                    PageRequest.of(0, 9, new Sort(Sort.Direction.DESC, "timestamp.created"))
            ));

            model.addAttribute("title", post.getTitle());
            model.addAttribute("description", post.shortDesc(500));
            model.addAttribute("tags", postTagRepository.findAllByPostId(post.getId()));
            model.addAttribute("pg", "detail");




            p.get().setNumberOfViews(post.getNumberOfViews() + 1);
            postRepository.save(p.get());

            return "index";
        }
        model.addAttribute("pg", "404");
        return "index";
    }

    @RequestMapping(value = {"/contact"}, method = RequestMethod.GET)
    public String contact(Model model) {
        configureSharedPart(model);
        model.addAttribute("pg", "contact");
        return "index";
    }

    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String index(Model model) {
        configureSharedPart(model);

        model.addAttribute("slider", sliderRepository.findAll(PageRequest.of(0, 10, new Sort(Sort.Direction.DESC, "orderNum"))));

        model.addAttribute("topCenterHor",
                postSectionRepository.findAll(
                        PostSectionSpecification.findBySection(Constants.Sections.TOP_CENTER_HORIZONTAL_SCROLLER.name()),
                        PageRequest.of(0, 10, new Sort(Sort.Direction.DESC, "post.timestamp.created"))
                )
        );


        /***********************************
         ************ განათლება **************
         ***********************************/
        model.addAttribute("innerCentralMultiCol", getSectionData(Constants.Sections.INNER_CENTER_MULTI_COLUMN.name(), 6));


        /***********************************
         ************ წიგნები **************
         ***********************************/
        model.addAttribute("innerCenterTwoColLeft", getSectionData(Constants.Sections.INNER_CENTER_TOW_COLUMN_LEFT.name(), 3));


        /***********************************
         ************ სიტყვა-სიტყვით **************
         ***********************************/
        model.addAttribute("innerCenterTwoColRight", getSectionData(Constants.Sections.INNER_CENTER_TOW_COLUMN_RIGHT.name(), 3));


        /***********************************
         ************ გართობა & Art **************
         ***********************************/
        model.addAttribute("topCenterTwoColLeft", getSectionData(Constants.Sections.TOP_CENTER_TOW_COLUMN_LEFT.name(), 3));

        /***********************************
         ************ ჯანმრთელობა **************
         ***********************************/
        model.addAttribute("topCenterTwoColRight", getSectionData(Constants.Sections.TOP_CENTER_TOW_COLUMN_RIGHT.name(), 3));

        /***********************************
         ****** სპორტული სიახლეები *********
         ***********************************/
        model.addAttribute("topCenterVerticalThreeCol",
                postSectionRepository.findAll(
                        PostSectionSpecification.findBySection(Constants.Sections.TOP_CENTER_VERTICAL_THREE_COLUMN.name()),
                        PageRequest.of(0, 3, new Sort(Sort.Direction.DESC, "post.timestamp.created"))
                )
        );

        model.addAttribute("blic", postSectionRepository.findAll(
                PostSectionSpecification.findBySection(Constants.Sections.BLIC.name()),
                PageRequest.of(0, 6, new Sort(Sort.Direction.DESC, "post.timestamp.created"))
        ));


        model.addAttribute("megzuri", postSectionRepository.findAll(
                PostSectionSpecification.findBySection(Constants.Sections.MEGZURI.name()),
                PageRequest.of(0, 6, new Sort(Sort.Direction.DESC, "post.timestamp.created"))
        ));


        model.addAttribute("videos", postSectionRepository.findAll(
                PostSectionSpecification.findBySection(Constants.Sections.VIDEO.name()),
                PageRequest.of(0, 6, new Sort(Sort.Direction.DESC, "post.timestamp.created"))
        ));


        model.addAttribute("mostVisited",
                postRepository.findAll(
                        PageRequest.of(
                                0,
                                10,
                                new Sort(Sort.Direction.DESC, "numberOfViews"))
                )
        );

        model.addAttribute("title", "შენი სანდო წყარო");
        model.addAttribute("description", "სიახლეები, ახალი ამბები, განათლება, მეცნიერება, ბლიცი, ჯანმრთელობა, გართობა, სპორტი, რეკლამა, მეგზური, ვიდეო");

        model.addAttribute("pg", "main");
        return "index";
    }

    private void configureSharedPart(Model model) {
        model.addAttribute("breakingNews", breakingNewsRepository.findAll());
        model.addAttribute("rightTopHorizontalCol", getSectionPage(Constants.Sections.RIGHT_TOP_HORIZONTAL_COLUMN.name(), 1));
        model.addAttribute("rightWeek", getSectionPage(Constants.Sections.WEEK.name(), 3));
        model.addAttribute("rightMonth", getSectionPage(Constants.Sections.MONTH.name(), 3));
        model.addAttribute("rightAll", getSectionPage(Constants.Sections.ALL.name(), 3));
        model.addAttribute("recents", recentPosts());
        model.addAttribute("quicklinks", quickLinks());
        model.addAttribute("categories", categoryList());
        model.addAttribute("allTags", tagRepository.findAll());
    }

    private Page<PostSection> getSectionPage(String section, int size) {
        return postSectionRepository.findAll(
                PostSectionSpecification.findBySection(section),
                PageRequest.of(0, size, new Sort(Sort.Direction.DESC, "post.timestamp.created"))
        );
    }

    private Map<String, PostSection> getSectionData(String section, int size) {
        Map<String, PostSection> map = new HashMap<>();
        Page<PostSection> postSection = getSectionPage(section, size);
        if (postSection.getSize() == size) {
            for (int i = 0; i < size; i++) {
                if (postSection.getContent().size() > i) {
                    map.put("obj" + i, postSection.getContent().get(i));
                }
            }
        }
        return map;
    }

    private List<PostCategory> categoryList() {
        return postCategoryRepository.findAll();
    }

    private Page<Post> recentPosts() {
        return postRepository.findAll(
                PostSectionSpecification.enabled(),
                PageRequest.of(0, 3, new Sort(Sort.Direction.DESC, "id"))
        );
    }

    private Page<QuickLinks> quickLinks() {
        return quickLinksRepository.findAll(PageRequest.of(0, 5, new Sort(Sort.Direction.DESC, "id")));
    }

    @RequestMapping(value = "/sitemap.xml", method = RequestMethod.GET, produces = "application/xml; charset=utf-8")
    @ResponseBody
    public String main() {
        try {
            return new String(Files.readAllBytes(serv.loadAsResource("sitemap.xml").getFile().toPath()), StandardCharsets.UTF_8);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    }

}
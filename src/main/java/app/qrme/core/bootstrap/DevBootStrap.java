package app.qrme.core.bootstrap;

import app.qrme.core.data.repository.*;
import app.qrme.core.entities.*;
import app.qrme.core.utils.constants.Constants;
import app.qrme.lib.data.entity.BaseUser;
import app.qrme.lib.data.entity.Role;
import app.qrme.lib.data.repo.BaseUserRepository;
import app.qrme.lib.data.repo.RoleRepository;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class DevBootStrap implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private ServerVariableRepository serverVariableRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PostSectionRepository postSectionRepository;

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    private PostTagRepository postTagRepository;

    @Autowired
    private SliderCategoryRepository sliderCategoryRepository;

    @Autowired
    private SliderRepository sliderRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private QuickLinksRepository quickLinksRepository;

    @Autowired
    private PostCategoryRepository postCategoryRepository;

    @Autowired
    private SectionRepository sectionRepository;

    @Autowired
    private ParamsRepository paramsRepository;

    @Autowired
    private BaseUserRepository baseUserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private BreakingNewsRepository breakingNewsRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        initData();
    }

    /**
     * Initialize Spring data
     */
    private void initData() {

        ServerVariable var = serverVariableRepository.findByServerKey("INIT_DATABASE");
        if (var == null) {
            ServerVariable key = ServerVariable.builder()
                    .serverKey("INIT_DATABASE")
                    .serverVal("true")
                    .build();
            serverVariableRepository.save(key);
            this.createUserAndRoles();
            this.createSection();
        }

    }

    private void createSection() {
        List<Section> sectionList = new ArrayList<>();
        {
            sectionList.add(Section.builder().title(Constants.Sections.TOP_CENTER_TOW_COLUMN_LEFT.name()).build());
            sectionList.add(Section.builder().title(Constants.Sections.TOP_CENTER_TOW_COLUMN_RIGHT.name()).build());
            sectionList.add(Section.builder().title(Constants.Sections.INNER_CENTER_TOW_COLUMN_LEFT.name()).build());
            sectionList.add(Section.builder().title(Constants.Sections.INNER_CENTER_TOW_COLUMN_RIGHT.name()).build());
            sectionList.add(Section.builder().title(Constants.Sections.TOP_CENTER_HORIZONTAL_SCROLLER.name()).build());
            sectionList.add(Section.builder().title(Constants.Sections.TOP_CENTER_VERTICAL_THREE_COLUMN.name()).build());
            sectionList.add(Section.builder().title(Constants.Sections.INNER_CENTER_MULTI_COLUMN.name()).build());
            sectionList.add(Section.builder().title(Constants.Sections.RIGHT_TOP_HORIZONTAL_COLUMN.name()).build());
            sectionList.add(Section.builder().title(Constants.Sections.ALL.name()).build());
            sectionList.add(Section.builder().title(Constants.Sections.VIDEO.name()).build());
            sectionList.add(Section.builder().title(Constants.Sections.WEEK.name()).build());
            sectionList.add(Section.builder().title(Constants.Sections.MONTH.name()).build());
            sectionList.add(Section.builder().title(Constants.Sections.BLIC.name()).build());
            sectionList.add(Section.builder().title(Constants.Sections.MEGZURI.name()).build());

        }
        sectionRepository.saveAll(sectionList);
    }

    private void createParams() {
        paramsRepository.save(Params
                .builder()
                .gmailUrl("gmailUrlHere")
                .fbUrl("fbUrl")
                .youtubeUrl("youtubeUrl")
                .contactSkype("Skype")
                .contactPhone("Phone1")
                .contactPhone2("Phone2")
                .contactEmail("Email")
                .contactAddr("ContactAddr")
                .build()
        );
    }

    private void createBreakingNews() {
        DateTime dateTime = new DateTime(new Date());
        DateTime after = dateTime.plusDays(40);
        breakingNewsRepository.save(BreakingNews
                .builder()
                .title("This is breaking news title and it will be shown in the front page")
                .build()
        );
    }

    private void createUserAndRoles() {
        List<Role> roleList = new ArrayList<>(4);
        {
            Role role = Role.builder().name("SUPER_ADMIN").build();
            role.setId(1L);
            roleList.add(role);
        }
        roleRepository.saveAll(roleList);

        List<BaseUser> userList = new ArrayList<>(2);
        {
            Role adminRole = roleRepository.findByName("SUPER_ADMIN");
            Set<Role> userRole = new HashSet<>(1);
            {
                if (adminRole != null) {
                    userRole.add(adminRole);
                }
            }

            String hashPsw = passwordEncoder.encode("123456789");

            BaseUser baseUser = BaseUser.builder()
                    .username("mjaniko@gmail.com")
                    .firstName("Mikheil").lastName("Janiashvili")
                    .password(hashPsw)
                    .active(true)
                    .build();
            baseUser.setId(1L);
            userList.add(baseUser);
            baseUserRepository.saveAll(userList);
        }
    }

    private void createCenterHorizontal() {

    }
}

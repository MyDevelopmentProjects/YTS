package app.qrme.core.controller;

import app.qrme.core.data.repository.PostRepository;
import app.qrme.core.data.repository.TagRepository;
import app.qrme.core.data.repository.PostTagRepository;
import app.qrme.core.entities.Post;
import app.qrme.core.entities.PostSection;
import app.qrme.core.entities.PostTag;
import app.qrme.lib.controller.AbstractCRUDController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/postTag")
@PreAuthorize("hasAnyAuthority('SUPER_ADMIN')")
public class PostTagController extends AbstractCRUDController<PostTag, Long> {

    @Autowired
    PostTagRepository postTagRepository;

    @Autowired
    PostRepository postRepository;

    @Autowired
    TagRepository tagRepository;

    public PostTagController(PostTagRepository repository) {
        super(repository);
    }

    @RequestMapping(value = "/{postId}", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> findAllByPostId(@PathVariable("postId") Long postId) {
        return ResponseEntity.ok(postTagRepository.findAllByPostId(postId));
    }

    @RequestMapping(value = "/savePS", method = RequestMethod.POST)
    @ResponseBody
    public void removeAllByPostId(@RequestBody List<Long> ids, @RequestParam(name = "postId") Long postId) {
        if (ids != null && ids.size() > 0) {
            Optional<Post> post = postRepository.findById(postId);
            if (post.isPresent()) {
                postTagRepository.removeAllByPostId(postId);
                List<PostTag> postSections = new ArrayList<>();
                ids.forEach(id-> postSections.add(PostTag.builder()
                        .post(post.get())
                        .tag(tagRepository.getOne(id))
                        .build()));
                postTagRepository.saveAll(postSections);
            }

        }
    }
}

package app.qrme.core.controller;

import app.qrme.core.data.repository.PostRepository;
import app.qrme.core.data.repository.TagRepository;
import app.qrme.core.service.StorageService;
import app.qrme.core.utils.SiteMapUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sm")
public class SiteMapController {

    @Autowired
    private StorageService serv;

    @Autowired
    PostRepository postRepository;

    @Autowired
    TagRepository tagRepository;

    @GetMapping("/build")

    public void build() {
        SiteMapUtils.build(tagRepository, postRepository, serv);
    }


}

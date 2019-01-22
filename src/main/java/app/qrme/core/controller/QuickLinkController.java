package app.qrme.core.controller;

import app.qrme.core.data.repository.QuickLinksRepository;
import app.qrme.core.entities.QuickLinks;
import app.qrme.lib.controller.AbstractCRUDController;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/quickLink")
@PreAuthorize("hasAnyAuthority('SUPER_ADMIN')")
public class QuickLinkController extends AbstractCRUDController<QuickLinks, Long> {
    public QuickLinkController(QuickLinksRepository repository) {
        super(repository);
    }
}

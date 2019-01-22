package app.qrme.core.utils;

import app.qrme.core.data.repository.PostRepository;
import app.qrme.core.data.repository.TagRepository;
import app.qrme.core.service.StorageService;
import app.qrme.lib.thread.ThreadPoolManager;
import com.redfin.sitemapgenerator.ChangeFreq;
import com.redfin.sitemapgenerator.WebSitemapGenerator;
import com.redfin.sitemapgenerator.WebSitemapUrl;
import java.io.File;
import java.net.MalformedURLException;
import java.util.Date;

public class SiteMapUtils {

    private static final double HIGH = 1.0;
    private static final double MEDIUM = 0.5;

    public static void build(TagRepository tagRepository, PostRepository postRepository, StorageService serv) {
        File path = serv.getRootLocation().toAbsolutePath().toFile();
        ThreadPoolManager.execute(() -> {
            try {
                WebSitemapGenerator wsg = WebSitemapGenerator.builder("https://www.yts.ge", path)
                        .autoValidate(false).build();
                wsg.addUrl(url("", HIGH));
                wsg.addUrl(url("/news", HIGH));
                wsg.addUrl(url("/news/განათლება-1", HIGH));
                wsg.addUrl(url("/news/მასწავლებლები-6", HIGH));
                wsg.addUrl(url("/news/მოსწავლეები-7", HIGH));
                wsg.addUrl(url("/news/აბიტურიენტები-8", HIGH));
                wsg.addUrl(url("/news/სტუდენტები-9", HIGH));
                wsg.addUrl(url("/news/სკოლამდელი_განათლება-10", HIGH));
                wsg.addUrl(url("/news/ჯანმრთელობა-2", MEDIUM));
                wsg.addUrl(url("/news/გართობა-3", MEDIUM));
                wsg.addUrl(url("/news/სპორტი-4", MEDIUM));
                wsg.addUrl(url("/news/ბლიცი-5", MEDIUM));
                wsg.addUrl(url("/adv", MEDIUM));
                wsg.addUrl(url("/contact", MEDIUM));
                wsg.addUrl(url("/tests", MEDIUM));
                wsg.addUrl(url("/vacancy", MEDIUM));
                wsg.addUrl(url("/competition", MEDIUM));

                postRepository.findAll().forEach(p -> {
                    wsg.addUrl(url(p.shortHref(), MEDIUM));
                });

                tagRepository.findAll().forEach(p -> {
                    wsg.addUrl(url("/news/" + p.getTitle() + "-" + p.getId() + "/tag", MEDIUM));
                });

                wsg.write();
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        });
    }

    private static WebSitemapUrl url(String url, double priority) {
        try {
            return new WebSitemapUrl.Options("https://www.yts.ge" + url)
                    .lastMod(new Date()).priority(priority).changeFreq(ChangeFreq.DAILY).build();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        return null;
    }
}

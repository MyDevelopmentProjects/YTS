package app.qrme.core.data.specification;

import app.qrme.core.entities.Post;
import app.qrme.core.entities.PostSection;
import app.qrme.core.entities.PostTag;
import app.qrme.core.utils.GeneralUtil;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

public class PostSectionSpecification {

    public static Specification<PostSection> findBySection(String section) {
        return (root, criteriaQuery, criteriaBuilder) -> {
            if (section != null) {
                return criteriaBuilder.and(
                        criteriaBuilder.equal(root.get("section").get("title"), section),
                        criteriaBuilder.equal(root.get("post").get("active"), true)
                );
            }
            return null;
        };
    }

    public static Specification<PostTag> findByTag(Long tagId) {
        return (root, criteriaQuery, criteriaBuilder) -> {
            if (tagId != null) {
                return criteriaBuilder.and(
                        criteriaBuilder.equal(root.get("tag").get("id"), tagId),
                        criteriaBuilder.equal(root.get("post").get("active"), true)
                );
            }
            return null;
        };
    }

    public static Specification<Post> findRelated(Long[] ids) {
        return (root, criteriaQuery, criteriaBuilder) -> {
            if (ids != null && ids.length > 0) {
                return criteriaBuilder.and(
                        criteriaBuilder.equal(root.get("active"), true),
                        root.get("category").get("id").in(ids));
            }
            return null;
        };
    }

    public static Specification<Post> enabled() {
        return (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.and(
                criteriaBuilder.equal(root.get("active"), true)
        );
    }

    public static Specification<Post> findRelated(Long categoryId) {
        return (root, criteriaQuery, criteriaBuilder) -> {
            if (categoryId != null) {
                return criteriaBuilder.and(
                        criteriaBuilder.equal(root.get("category").get("id"), categoryId),
                        criteriaBuilder.equal(root.get("active"), true)
                );
            }
            return null;
        };
    }

}

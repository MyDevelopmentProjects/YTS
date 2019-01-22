package app.qrme.core.entities;

import app.qrme.lib.data.entity.AbstractEntity;
import app.qrme.lib.data.entity.BaseUser;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "yts_breaking_news")
public class BreakingNews extends AbstractEntity {

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "created_by")
    private BaseUser createdBy;

}

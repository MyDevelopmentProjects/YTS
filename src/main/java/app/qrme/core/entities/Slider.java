package app.qrme.core.entities;

import app.qrme.lib.data.entity.AbstractEntity;
import app.qrme.lib.data.entity.BaseUser;
import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "yts_slider")
public class Slider extends AbstractEntity {

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "img_url", nullable = false, length = 1000)
    private String imgUrl;

    @Column(name = "href", nullable = false, length = 1000)
    private String href;

    @Column(name = "small_desc")
    private String smallDesc;

    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", nullable = false)
    private SliderCategory category;

    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "created_by", nullable = false)
    private BaseUser createdBy;

    @Column(name = "order_num", nullable = false, columnDefinition = " INT DEFAULT 0 ")
    private Integer orderNum;

    @Column(name = "is_active", columnDefinition = " BOOLEAN DEFAULT TRUE ")
    private Boolean active;

    @Column(name = "shows_date", columnDefinition = " BOOLEAN DEFAULT TRUE ")
    private Boolean showsDate;

}

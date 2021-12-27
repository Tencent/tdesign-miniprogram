/**
 * 轮播条目组件
 */
import { SuperComponent } from '../common/src/index';
export default class SwiperItem extends SuperComponent {
    relations: {
        './swiper': {
            type: "parent";
        };
    };
    data: {
        index: number;
        classPrefix: string;
        translate: string;
    };
    setIndex(index: number, direction: string): void;
}

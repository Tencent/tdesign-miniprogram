import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import generateBase64Url from './utils/generateBase64Url';
import randomMovingStyle from './utils/randomMovingStyle';

const { prefix } = config;
const name = `${prefix}-watermark`;

@wxComponent()
export default class Watermark extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  properties = props;

  data = {
    classPrefix: name,
    watermarkStyle: {},
  };

  lifetimes = {
    attached() {
      this.renderWatermark();
    },
  };

  observers = {
    'watermarkContent, movable, rotate, x, y, width, height, alpha, lineSpace, moveInterval, zIndex, rotate, offset, removable, isRepeat'() {
      this.renderWatermark();
    },
  };

  methods = {
    renderWatermark() {
      const query = wx.createSelectorQuery().in(this);
      query
        .select('#watermarkCanvas')
        .fields({ node: true, size: true })
        .exec(async (res) => {
          if (!res[0]?.node) {
            console.error('Canvas node not found');
            return;
          }
          const canvas = res[0].node;
          const props = this.properties;
          const gapX = props.movable ? 0 : props.x;
          const gapY = props.movable ? 0 : props.y;
          const offset = props.offset || [];
          const offsetLeft = offset[0] || gapX / 2;
          const offsetTop = offset[1] || gapY / 2;

          const bgImageOptions = {
            width: props.width,
            height: props.height,
            rotate: props.movable ? 0 : props.rotate,
            lineSpace: props.lineSpace,
            alpha: props.alpha,
            gapX: gapX,
            gapY: gapX,
            watermarkContent: props.watermarkContent,
            offsetLeft: offsetLeft,
            offsetTop: offsetTop,
          };
          generateBase64Url(canvas, bgImageOptions, (base64Url) => {
            let animationVars = {};
            if (props.movable) {
              const { left0, left25, left50, left75, top0, top25, top50, top75 } = randomMovingStyle();
              animationVars = {
                '--watermark-left-0': left0,
                '--watermark-left-25': left25,
                '--watermark-left-50': left50,
                '--watermark-left-75': left75,
                '--watermark-top-0': top0,
                '--watermark-top-25': top25,
                '--watermark-top-50': top50,
                '--watermark-top-75': top75,
              };
            }

            this.setData({
              watermarkStyle: {
                zIndex: props.zIndex,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                backgroundSize: `${gapX + props.width}px`,
                pointerEvents: 'none',
                backgroundRepeat: props.movable ? 'no-repeat' : 'repeat',
                backgroundImage: `url('${base64Url}')`,
                animation: props.movable ? `watermark infinite ${(props.moveInterval * 4) / 60}s` : 'none',
                ...animationVars,
              },
            });
          });
        });
    },
  };
}

import props from './props';
import useQRCode from '../qrcode/hooks/useQRCode';
import { TdQRCodeProps } from './type';
import { SuperComponent, wxComponent } from '../common/src/index';
import { DEFAULT_MINVERSION, excavateModules } from '../qrcode/utils/utils';

@wxComponent()
export default class QRCode extends SuperComponent {
  properties = props;

  lifeTimes = {
    ready() {
      this.checkdefaultValue();
      this.initCanvas();
    },
  };

  observers = {
    '**': function () {
      this.checkdefaultValue();
      this.initCanvas();
    },
  };

  methods = {
    async initCanvas() {
      const query = wx.createSelectorQuery().in(this);
      query
        .select('#qrcodeCanvas')
        .fields({ node: true, size: true })
        .exec(async (res) => {
          if (!res[0]?.node) {
            return;
          }

          const canvas = res[0].node;
          const ctx = canvas.getContext('2d');

          await this.drawQrcode(canvas, ctx);
        });
    },

    async drawQrcode(canvas: WechatMiniprogram.Canvas, ctx: WechatMiniprogram.CanvasContext) {
      if (!ctx) return;
      const { value, icon, size, iconSize, level, bgColor, color, includeMargin, marginSize } = this
        .properties as TdQRCodeProps;

      const windowInfo = wx.getWindowInfo();

      const rpxToPx = (rpx: number) => {
        return (rpx / 750) * windowInfo.windowWidth;
      };

      const sizeProp = this.getSizeProp(iconSize);
      try {
        const qrData = useQRCode({
          value,
          level: level,
          minVersion: DEFAULT_MINVERSION,
          includeMargin: includeMargin,
          marginSize: rpxToPx(marginSize),
          size: rpxToPx(size),
          imageSettings: icon
            ? {
                src: icon,
                width: rpxToPx(sizeProp.width),
                height: rpxToPx(sizeProp.height),
                excavate: true,
              }
            : undefined,
        });

        const dpr = windowInfo.pixelRatio;
        canvas.width = rpxToPx(size) * dpr;
        canvas.height = rpxToPx(size) * dpr;
        const scale = (rpxToPx(size) / qrData.numCells) * dpr;
        ctx.scale(scale, scale);

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, qrData.numCells, qrData.numCells);

        let cellsToDraw = qrData.cells;
        if (icon && qrData.calculatedImageSettings?.excavation) {
          cellsToDraw = excavateModules(qrData.cells, qrData.calculatedImageSettings.excavation);
        }

        ctx.fillStyle = color;
        cellsToDraw.forEach((row, y) => {
          row.forEach((cell, x) => {
            if (cell) {
              ctx.fillRect(x + qrData.margin, y + qrData.margin, 1, 1);
            }
          });
        });
        if (icon) {
          await this.drawCenterIcon(
            canvas,
            ctx,
            qrData.calculatedImageSettings?.w || 0,
            qrData.calculatedImageSettings?.h || 0,
            qrData.numCells,
          );
        }
        this.triggerEvent('drawCompleted');
      } catch (err) {
        this.triggerEvent('drawError', { error: err });
      }
    },

    async drawCenterIcon(
      canvas: WechatMiniprogram.Canvas,
      ctx: WechatMiniprogram.CanvasContext,
      width: number,
      height: number,
      numCells: number,
    ) {
      const img = canvas.createImage();
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = this.properties.icon;
      });

      const x = Math.floor((numCells - width) / 2);
      const y = Math.floor((numCells - height) / 2);
      ctx.globalAlpha = 1;
      ctx.drawImage(img as any, x, y, width, height);
    },

    getSizeProp(iconSize: number | { width: number; height: number } | null | undefined) {
      if (!iconSize) return { width: 0, height: 0 };
      if (typeof iconSize === 'number') {
        return {
          width: iconSize,
          height: iconSize,
        };
      }
      return {
        width: iconSize.width,
        height: iconSize.height,
      };
    },

    checkdefaultValue() {
      const updates = { bgColor: '', color: '' };
      let changeFlag = false;
      const { bgColor, color } = this.properties;
      const { bgColor: defBg, color: defCol } = props;
      if (bgColor === '' && defBg.value) {
        updates.bgColor = defBg.value;
        changeFlag = true;
      }
      if (color === '' && defCol.value) {
        updates.color = defCol.value;
        changeFlag = true;
      }
      changeFlag && this.setData(updates);
    },
  };
}

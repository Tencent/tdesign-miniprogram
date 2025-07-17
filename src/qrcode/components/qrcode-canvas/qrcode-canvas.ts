import props from './props';
import { useQRCode } from '../../utils/useQRCode';
import { TdQRCodeProps } from './type'
import { SuperComponent, wxComponent } from '../../../common/src/index';
import { DEFAULT_MINVERSION, excavateModules } from '../../utils/utils';

@wxComponent()
export default class QRCode extends SuperComponent {
  properties = props;

  data = {
    canvasReady: false,
  };
  
  lifeTimes = {
    ready() {
      this.initCanvas();
    }
  }

  methods = {
    async initCanvas() {
      const query = wx.createSelectorQuery().in(this);
      query.select('#qrcodeCanvas')
        .fields({ node: true, size: true })
        .exec(async (res) => {
          if (!res[0]?.node) {
            console.error('Canvas node not found');
            return;
          }
          
          const canvas = res[0].node;
          const ctx = canvas.getContext('2d');
          
          this.setData({ 
            canvasReady: true 
          });
          await this.drawQrcode(canvas, ctx);
        });
    },

    async drawQrcode(canvas: WechatMiniprogram.Canvas, 
      ctx: WechatMiniprogram.CanvasContext) {
      if (!ctx) return;
      const {
        value,
        icon,
        size,
        iconSize,
        level,
        bgColor,
        color,
        includeMargin,
        marginSize
      } = this.properties as TdQRCodeProps;

      const rpxToPx = (rpx: number) => {
        const systemInfo = wx.getSystemInfoSync();
        return (rpx / 750) * systemInfo.windowWidth;
      };
      const sizeProp = this.getSizeProp(iconSize);
      console.log('1001 canvas iconSize is', iconSize);
      try {
        const qrData = useQRCode({
          value,
          level: level,
          minVersion: DEFAULT_MINVERSION,
          includeMargin: includeMargin,
          marginSize: rpxToPx(marginSize),
          size: rpxToPx(size),
          imageSettings: icon ? {
            src: icon,
            width: rpxToPx(sizeProp.width),
            height: rpxToPx(sizeProp.height),
            excavate: true
          } : undefined
        });

        const dpr = wx.getSystemInfoSync().pixelRatio;
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
              ctx.fillRect(
                x + qrData.margin,
                y + qrData.margin,
                1, 1
              );
            }
          });
        });
        if (icon) {
          await this.drawCenterIcon(
            canvas,
            ctx,
            qrData.calculatedImageSettings?.w || 0,
            qrData.calculatedImageSettings?.h || 0,
            qrData.numCells
          );
        }
        this.triggerEvent('drawCompleted');
      } catch(err) {
        this.triggerEvent('drawError', { error: err });
      }
    },

    async drawCenterIcon(
      canvas: WechatMiniprogram.Canvas,
      ctx: WechatMiniprogram.CanvasContext,
      width: number,
      height: number,
      numCells: number
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
      ctx.drawImage(
        img as any,
        x,
        y,
        width,
        height
      );
    },
    getSizeProp(iconSize: null){
      if(typeof iconSize === 'number') {
        return {
          width: iconSize,
          height: iconSize
        }
      } else {
        return {
          width: iconSize?.width,
          height: iconSize?.height
        }
      }
    }   
  }
}
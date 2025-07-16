import { SuperComponent, wxComponent } from '../../../common/src/index';
import props from './props';
import { TdQRCodeProps, QRCodeEvents, QRCodeMethods } from './type';
import { DEFAULT_MINVERSION, excavateModules } from '../../utils/utils';
import { useQRCode } from '../../utils/useQRCode';

@wxComponent()
export default class QRCode extends SuperComponent implements QRCodeMethods {
  properties = props;
  events: QRCodeEvents = {
    drawCompleted: true,
    drawError: {error: null},
    qrcodeTouch: true,
  };

  data = {
    canvasReady: false,
  };

  ready() {
    this.initCanvas();
  }

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
        
        this.setData({ canvasReady: true });
        await this.drawQrcode(canvas, ctx);
      });
  }

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

    try {
      const qrData = useQRCode({
        value,
        level: level!,
        minVersion: DEFAULT_MINVERSION,
        includeMargin: includeMargin!,
        marginSize: rpxToPx(marginSize!),
        size: rpxToPx(size!),
        imageSettings: icon ? {
          src: icon,
          width: iconSize,
          height: iconSize,
          excavate: true
        } : undefined
      });

      const dpr = wx.getSystemInfoSync().pixelRatio;
      canvas.width = rpxToPx(size!) * dpr;
      canvas.height = rpxToPx(size!) * dpr;
      const scale = (rpxToPx(size!) / qrData.numCells) * dpr;
      ctx.scale(scale, scale);

      ctx.fillStyle = bgColor!;
      ctx.fillRect(0, 0, qrData.numCells, qrData.numCells);

      let cellsToDraw = qrData.cells;
      if (icon && qrData.calculatedImageSettings?.excavation) {
        cellsToDraw = excavateModules(qrData.cells, qrData.calculatedImageSettings.excavation);
      }

      ctx.fillStyle = color!;
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
          qrData.calculatedImageSettings?.w || iconSize!,
          qrData.numCells
        );
      }
      this.triggerEvent('drawCompleted');
    } catch(err) {
      this.triggerEvent('drawError', { error: err });
    }
  }

  async drawCenterIcon(
    canvas: WechatMiniprogram.Canvas,
    ctx: WechatMiniprogram.CanvasContext,
    size: number,
    numCells: number
  ) {
    const img = canvas.createImage();
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = this.properties.icon!;
    });

    const x = Math.floor((numCells - size) / 2);
    const y = Math.floor((numCells - size) / 2);
    ctx.globalAlpha = 1;
    ctx.drawImage(
      img as any,
      x,
      y,
      size,
      size
    );
  }

  handleTouch(e: WechatMiniprogram.TouchEvent) {
    this.triggerEvent('qrcodeTouch', e);
  }
}
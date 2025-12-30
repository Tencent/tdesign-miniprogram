import { loadImage } from '../../common/canvas/index';
import { getWindowInfo } from '../../common/utils';

const ratio = getWindowInfo().pixelRatio || 1;

// 元素中心为旋转点执行旋转
const drawRotate = (
  ctx,
  x,
  y,
  rotate,
) => {
  ctx.translate(x, y);
  ctx.rotate((Math.PI / 180) * Number(rotate));
  ctx.translate(-x, -y);
};

// 绘制文字
const drawText = (
  ctx,
  x,
  y,
  markHeight,
  text,
  fontWeight,
  fontSize,
  fontFamily,
  fillStyle,
) => {
  ctx.font = `normal normal ${fontWeight} ${
    fontSize * ratio
  }px/${markHeight}px ${fontFamily}`;

  ctx.fillStyle = fillStyle;
  ctx.textAlign = 'start';
  ctx.textBaseline = 'top';

  ctx.fillText(text, x, y);
};

export default async function generateBase64Url(
  canvas,
  canvasId,
  {
    width,
    height,
    gapX,
    gapY,
    offsetLeft,
    offsetTop,
    rotate,
    alpha,
    watermarkContent,
    lineSpace,
    watermarkColor,
    layout,
  },
  onFinish,
  onFinally,
) {
  const isHexagonal = layout === 'hexagonal';

  let ctx;

  // #ifdef MP || H5
  ctx = canvas.getContext('2d', { willReadFrequently: true });
  // #endif

  if (!ctx) {
    ctx = uni.createCanvasContext(canvasId, this);
  }
  if (!ctx) {
    console.warn('当前环境不支持Canvas, 无法绘制水印');
    onFinish('');
    return;
  }

  let actualBackgroundSize = {
    width: gapX + width,
  };

  const canvasWidth = (gapX + width) * ratio;
  const canvasHeight = (gapY + height) * ratio;

  const markWidth = width * ratio;
  const markHeight = height * ratio;

  const dislocationRotateX = canvasWidth;
  const dislocationRotateY = canvasHeight;
  const dislocationDrawX = (gapX + width) * ratio;
  const dislocationDrawY = (gapY + height) * ratio;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  if (isHexagonal) {
    canvas.width = canvasWidth * 2;
    canvas.height = canvasHeight * 2;

    // 两倍宽度+间距
    actualBackgroundSize = {
      width: gapX + width * 2 + width / 2,
    };
  }

  ctx.globalAlpha = alpha;

  // h5需要全局缩放
  // #ifdef H5 || APP-PLUS
  ctx.scale(1 / ratio, 1 / ratio);
  // #endif

  ctx.fillStyle = 'transparent';
  ctx.fillRect(0, 0, markWidth, markHeight);

  ctx.translate(offsetLeft * ratio, offsetTop * ratio);

  const contents = Array.isArray(watermarkContent)
    ? watermarkContent
    : [{ ...watermarkContent }];

  let top = 0;

  // 预处理
  contents.forEach((item) => {
    item.top = top;
    if (item.url) {
      top += height;
    } else if (item.text) {
      top += lineSpace;
    }
  });


  // 绘制水印内容
  const renderWatermarkItem = async (
    item,
    offsetX = 0,
    offsetY = 0,
    rotateX = 0,
    rotateY = 0,
  ) => {
    if (item.url) {
      const { url, isGrayscale = false } = item;
      const img = await loadImage({
        canvas,
        src: url,
      });

      ctx.save?.();
      drawRotate(ctx, rotateX, rotateY, rotate);

      // TODO：其他技术栈修复了「灰度效果只影响图片，不影响文字」的bug，因为小程序不能创建临时canvas，暂时没有想到比较优雅的解决方案
      if (isGrayscale) {
        // #ifdef APP-PLUS
        ctx.drawImage(
          img,
          offsetX,
          offsetY + item.top * ratio,
          width * ratio / 2,
          height * ratio / 2,
        );
        // #endif

        // #ifndef APP-PLUS
        ctx.drawImage(
          img,
          offsetX,
          offsetY + item.top * ratio,
          width * ratio,
          height * ratio,
        );
        // #endif
        const imgData = await getImageData(ctx, {
          x: 0,
          y: 0,
          width,
          height,
        });
        const pixels = imgData.data;
        for (let i = 0; i < pixels.length; i += 4) {
          const lightness = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
          pixels[i] = lightness;
          pixels[i + 1] = lightness;
          pixels[i + 2] = lightness;
        }
        await putImageData(ctx, imgData, {
          x: 0,
          y: 0,
        });
      } else {
        // #ifdef APP-PLUS
        ctx.drawImage(
          img,
          offsetX,
          (offsetY + item.top * ratio),
          width * ratio / 2,
          height * ratio / 2,
        );
        // #endif

        // #ifndef APP-PLUS
        ctx.drawImage(
          img,
          offsetX,
          offsetY + item.top * ratio,
          width * ratio,
          height * ratio,
        );
        // #endif
      }

      ctx.restore?.();
      return;
    }

    if (item.text) {
      const {
        text,
        fontSize = 16,
        fontFamily = 'normal',
        fontWeight = 'normal',
      } = item;
      const fillStyle = item?.fontColor || watermarkColor;

      ctx.save?.();
      drawRotate(ctx, rotateX, rotateY, rotate);
      drawText(
        ctx,
        offsetX,
        offsetY + item.top * ratio,
        markHeight,
        text,
        fontWeight,
        fontSize,
        fontFamily,
        fillStyle,
      );
      ctx.restore?.();
    }
  };

  // 矩形水印
  for (const item of contents) {
    await renderWatermarkItem(item, 0, 0, 0, 0);
  }

  // 六边形水印
  if (isHexagonal) {
    for (const item of contents) {
      await renderWatermarkItem(
        item,
        dislocationDrawX,
        dislocationDrawY,
        dislocationRotateX,
        dislocationRotateY,
      );
    }
  }
  // #ifdef APP-PLUS
  ctx.draw();
  // #endif


  // 没有图片
  const canvasUrl = await exportCanvasImage.call(this, canvas, canvasId);
  onFinish(canvasUrl, actualBackgroundSize, ratio);

  onFinally?.();
}
// 跨平台 Canvas 导出方法
export function exportCanvasImage(canvas, canvasId) {
  return new Promise((resolve, reject) => {
    let parsed = false;
    // #ifdef H5 || MP
    resolve(canvas.toDataURL('image/png'));
    parsed = true;
    // #endif

    if (parsed) return;
    const query = uni.createSelectorQuery().in(this);

    query
      .select(`#${canvasId}`)
      .fields({ node: true, size: true })
      .exec(async (res) => {
        if (!res[0]?.node) {
          console.error('Canvas node not found');
          return;
        }

        uni.canvasToTempFilePath({
          // #ifdef MP
          canvas: res[0].node,
          // #endif
          // #ifndef MP
          canvasId,
          // #endif
          success: res => resolve(res.tempFilePath),
          fail: reject,
        });
      });
  });
}


async function getImageData(ctx, options) {
  let result;
  // #ifdef H5 || MP
  result = ctx.getImageData(options.x, options.y, options.width, options.height);
  // #endif

  if (!result) {
    result = new Promise((resolve) => {
      uni.canvasGetImageData({
        canvasId: options.canvasId,
        x: options.x,
        y: options.y,
        width: options.width,
        height: options.height,
        success: (res) => {
        // 小程序/App 返回的数据结构需要转换
          resolve({
            data: new Uint8ClampedArray(res.data),
            width: res.width,
            height: res.height,
          });
        },
      }, this);
    });
  }

  return result;
}


async function putImageData(ctx, imageData, options) {
  let result;
  // #ifdef H5 || MP
  ctx.putImageData(imageData, options.x, options.y);
  result = Promise.resolve();
  // #endif

  if (!result) {
    result = new Promise((resolve, reject) => {
      uni.canvasPutImageData({
        canvasId: options.canvasId,
        x: options.x,
        y: options.y,
        width: imageData.width,
        height: imageData.height,
        data: imageData.data,
        success: resolve,
        fail: reject,
      }, this);
    });
  }

  return result;
}

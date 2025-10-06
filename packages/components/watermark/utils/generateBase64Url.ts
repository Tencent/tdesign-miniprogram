import { systemInfo } from '../../common/utils';

export default function generateBase64Url(
  canvas,
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
) {
  const isHexagonal = layout === 'hexagonal';

  const ctx = canvas.getContext('2d');

  if (!ctx) {
    console.warn('当前环境不支持Canvas, 无法绘制水印');
    onFinish('');
    return;
  }

  const ratio = systemInfo.pixelRatio || 1;

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

  ctx.translate(offsetLeft * ratio, offsetTop * ratio);
  ctx.globalAlpha = alpha;

  ctx.fillStyle = 'transparent';
  ctx.fillRect(0, 0, markWidth, markHeight);

  // 元素中心为旋转点执行旋转
  const drawRotate = (ctx: CanvasRenderingContext2D, x: number, y: number, rotate: number) => {
    ctx.translate(x, y);
    ctx.rotate((Math.PI / 180) * Number(rotate));
    ctx.translate(-x, -y);
  };

  // 绘制文字
  const drawText = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    markHeight: number,
    text: string,
    fontWeight: string,
    fontSize: number,
    fontFamily: string,
    fillStyle: string,
  ) => {
    ctx.font = `normal normal ${fontWeight} ${fontSize * ratio}px/${markHeight}px ${fontFamily}`;
    ctx.fillStyle = fillStyle;
    ctx.textAlign = 'start';
    ctx.textBaseline = 'top';

    ctx.fillText(text, x, y);
  };

  const contents = Array.isArray(watermarkContent) ? watermarkContent : [{ ...watermarkContent }];

  let top = 0;
  let imageLoadCount = 0;
  let totalImages = 0;

  // 预处理
  contents.forEach((item) => {
    item.top = top;
    if (item.url) {
      top += height;
      totalImages += isHexagonal ? 2 : 1; // hexagonal布局需要绘制两次
    } else if (item.text) {
      top += lineSpace;
    }
  });

  // 绘制水印内容
  const renderWatermarkItem = (
    item,
    offsetX: number = 0,
    offsetY: number = 0,
    rotateX: number = 0,
    rotateY: number = 0,
  ) => {
    if (item.url) {
      const { url, isGrayscale = false } = item;
      const img = canvas.createImage();
      img.crossOrigin = 'anonymous';
      img.referrerPolicy = 'no-referrer';
      img.src = url;
      img.onload = () => {
        ctx.save?.();
        drawRotate(ctx, rotateX, rotateY, rotate);

        // TODO：其他技术栈修复了「灰度效果只影响图片，不影响文字」的bug，因为小程序不能新建元素，暂时没有好的解决方案
        if (isGrayscale) {
          ctx.drawImage(img, offsetX, offsetY + item.top * ratio, width * ratio, height * ratio);
          const imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
          const pixels = imgData.data;
          for (let i = 0; i < pixels.length; i += 4) {
            const lightness = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
            pixels[i] = lightness;
            pixels[i + 1] = lightness;
            pixels[i + 2] = lightness;
          }
          ctx.putImageData(imgData, 0, 0);
        } else {
          ctx.drawImage(img, offsetX, offsetY + item.top * ratio, width * ratio, height * ratio);
        }

        ctx.restore?.();

        // 图片加载完成再返回
        imageLoadCount += 1;
        if (imageLoadCount === totalImages) {
          onFinish(canvas.toDataURL(), actualBackgroundSize);
        }
      };
    } else if (item.text) {
      const { text, fontSize = 16, fontFamily = 'normal', fontWeight = 'normal' } = item;
      const fillStyle = item?.fontColor || watermarkColor;

      ctx.save?.();
      drawRotate(ctx, rotateX, rotateY, rotate);
      drawText(ctx, offsetX, offsetY + item.top * ratio, markHeight, text, fontWeight, fontSize, fontFamily, fillStyle);
      ctx.restore?.();
    }
  };

  // 矩形水印
  contents.forEach((item) => {
    renderWatermarkItem(item, 0, 0, 0, 0);
  });

  // 六边形水印
  if (isHexagonal) {
    contents.forEach((item) => {
      renderWatermarkItem(item, dislocationDrawX, dislocationDrawY, dislocationRotateX, dislocationRotateY);
    });
  }

  // 没有图片
  if (totalImages === 0) {
    onFinish(canvas.toDataURL(), actualBackgroundSize);
  }
}

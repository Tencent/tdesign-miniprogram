import { systemInfo } from '../../common/utils';

export default function generateBase64Url(
  canvas,
  { width, height, gapX, gapY, offsetLeft, offsetTop, rotate, alpha, watermarkContent, lineSpace },
  onFinish,
) {
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.warn('当前环境不支持Canvas, 无法绘制水印');
    onFinish('');
    return;
  }
  const ratio = systemInfo.pixelRatio || 1;
  const canvasWidth = (gapX + width) * ratio;
  const canvasHeight = (gapY + height) * ratio;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  ctx.translate(offsetLeft * ratio, offsetTop * ratio);
  ctx.rotate((Math.PI / 180) * Number(rotate));
  ctx.globalAlpha = alpha;

  const markWidth = width * ratio;
  const markHeight = height * ratio;

  ctx.fillStyle = 'transparent';
  ctx.fillRect(0, 0, markWidth, markHeight);

  const contents = Array.isArray(watermarkContent) ? watermarkContent : [{ ...watermarkContent }];

  let top = 0;
  contents.forEach((item) => {
    if (item.url) {
      const { url, isGrayscale = false } = item;
      item.top = top;
      top += height;
      const image = canvas.createImage();
      image.src = url;
      image.onload = () => {
        ctx.drawImage(image, 0, item.top * ratio, width * ratio, height * ratio);
        if (isGrayscale) {
          const imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
          const pixels = imgData.data;
          for (let i = 0; i < pixels.length; i += 4) {
            const lightness = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
            pixels[i] = lightness;
            pixels[i + 1] = lightness;
            pixels[i + 2] = lightness;
          }
          ctx.putImageData(imgData, 0, 0);
        }
        onFinish(canvas.toDataURL());
      };
    } else if (item.text) {
      const {
        text,
        fontColor = 'rgba(0, 0, 0, 0.1)',
        fontSize = 16,
        fontFamily = undefined,
        fontWeight = 'normal',
      } = item;
      item.top = top;
      top += lineSpace;
      const markSize = Number(fontSize) * ratio;
      ctx.font = `normal normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
      ctx.textAlign = 'start';
      ctx.textBaseline = 'top';
      ctx.fillStyle = fontColor;
      ctx.fillText(text, 0, item.top * ratio);
    }
  });
  onFinish(canvas.toDataURL());
}

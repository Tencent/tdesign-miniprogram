export async function loadImage({
  canvas,
  src,
}) {
  let result = null;
  if (!src || !canvas) {
    return result;
  }

  // #ifdef MP
  // 小程序环境：使用 canvas.createImage
  if (canvas.createImage) {
    result = new Promise((resolve, reject) => {
      const img = canvas.createImage();
      // 必须先设置 onload 和 onerror，再设置 src
      img.onload = () => resolve(img);
      img.onerror = (err) => {
        console.error('创建图片对象失败:', err);
        reject(err);
      };
      img.src = src;
    });
  }
  // #endif

  // #ifdef APP-PLUS
  result = new Promise((resolve) => {
    uni.getImageInfo({
      src,
      success: (res) => {
        const imgPath = res.path; // 本地临时路径
        resolve(imgPath);
      },
    });
  });
  // #endif

  // #ifdef H5
  // H5 环境：创建 Image 对象（参考 TSX 实现）
  result = new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (err) => {
      console.error('图标加载失败:', err);
      reject(err);
    };
    img.src = src;
  });
  // #endif

  return result;
}

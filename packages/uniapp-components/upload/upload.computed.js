export function getWrapperAriaRole(file) {
  return file.status && file.status != 'done' ? 'text' : 'button';
}

export function getWrapperAriaLabel(file) {
  if (file.status && file.status != 'done') {
    if (file.status == 'loading') {
      return file.percent ? `上传中:${file.percent}%` : '上传中';
    }
    return file.status == 'reload' ? '重新上传' : '上传失败';
  }
  return file.type === 'video' ? '视频' : '图像';
}

export function isImageType(file) {
  if (file.type === 'image') return true;
  if (file.url) {
    const imageExts = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg', 'tiff'];
    const url = String(file.url).toLowerCase();
    for (let i = 0; i < imageExts.length; i++) {
      if (url.indexOf(`.${imageExts[i]}`) !== -1) return true;
    }
  }
  return false;
}

function getFileExt(file) {
  const name = file.name || '';
  const url = file.url || '';
  let ext = '';
  const dotIndex = name.lastIndexOf('.');
  if (dotIndex !== -1) {
    ext = name.substring(dotIndex).toLowerCase();
  }
  if (ext === '' && url) {
    const urlDotIndex = url.lastIndexOf('.');
    if (urlDotIndex !== -1) {
      const qIndex = url.indexOf('?', urlDotIndex);
      if (qIndex !== -1) {
        ext = url.substring(urlDotIndex, qIndex).toLowerCase();
      } else {
        ext = url.substring(urlDotIndex).toLowerCase();
      }
    }
  }
  return ext;
}

function getFileCategory(ext) {
  if (ext === '.pdf') return 'pdf';
  if (['.xlsx', '.xls', '.csv', '.xlc', '.xlm', '.xlt', '.xlw'].includes(ext)) return 'excel';
  if (['.pptx', '.ppt', '.key'].includes(ext)) return 'ppt';
  if (['.docx', '.doc', '.document', '.wps', '.wdb', '.msword'].includes(ext)) return 'word';
  if (
    [
      '.avi',
      '.mp4',
      '.wmv',
      '.mpg',
      '.mpeg',
      '.mov',
      '.rm',
      '.ram',
      '.swf',
      '.flv',
      '.rmvb',
      '.3gp',
      '.mp2',
      '.mp3',
      '.ogg',
      '.3gpp',
      '.ac3',
      '.au',
    ].includes(ext)
  )
    return 'media';
  if (['.zip', '.rar', '.7z', '.tar', '.gz', '.bz2', '.xz'].includes(ext)) return 'zip';
  return 'other';
}

const FILE_CATEGORY_ICON_MAP = {
  pdf: 'file-pdf-filled',
  excel: 'file-excel-filled',
  ppt: 'file-powerpoint-filled',
  word: 'file-word-filled',
  media: 'video-filled',
  zip: 'file-zip-filled',
  other: 'file-1',
};

export function getFileTypeIcon(file) {
  const ext = getFileExt(file);
  const category = getFileCategory(ext);
  return FILE_CATEGORY_ICON_MAP[category];
}

export function getFileTypeIconColorClass(file, classPrefix) {
  const ext = getFileExt(file);
  const category = getFileCategory(ext);
  return `${classPrefix}__file-type--${category}`;
}

export function formatSize(size) {
  if (size == null || size === undefined) return '';
  const num = +size;
  if (num < 1024) return `${num}B`;
  if (num < 1024 * 1024) return `${(num / 1024).toFixed(1)}KB`;
  if (num < 1024 * 1024 * 1024) return `${(num / (1024 * 1024)).toFixed(1)}MB`;
  return `${(num / (1024 * 1024 * 1024)).toFixed(1)}GB`;
}

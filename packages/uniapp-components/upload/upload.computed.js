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

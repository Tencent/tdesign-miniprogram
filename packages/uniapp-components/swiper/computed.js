export function isPrev(current, index, list) {
  return (current - 1 + list.length) % list.length === index;
}

export function isNext(current, index, list) {
  return (current + 1 + list.length) % list.length === index;
}

export function getImageClass(
  prefix,
  current,
  index,
  list,
  tClassImage,
  tClassPrevImage,
  tClassNextImage,
) {
  const arr = [`${prefix}-swiper__image-host`, `${prefix}-swiper__image`, tClassImage];

  if (isPrev(current, index, list)) {
    arr.push(tClassPrevImage);
  }

  if (isNext(current, index, list)) {
    arr.push(tClassNextImage);
  }

  return arr.join(' ');
}

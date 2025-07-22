/* eslint-disable no-nested-ternary */
export default function randomMovingStyle() {
  const align = Math.floor(Math.random() * 4);
  const p1 = Math.floor(Math.random() * 70) + 30;
  const leftTopLimit = 0;
  const bottomLimit = 95;
  const rightLimit = 90;
  const left0 = align === 1 ? rightLimit : align === 3 ? leftTopLimit : p1;
  const left1 = align === 0 ? rightLimit : align === 2 ? leftTopLimit : 100 - p1;
  const left2 = align === 1 ? leftTopLimit : align === 3 ? rightLimit : 100 - p1;
  const left3 = align === 0 ? leftTopLimit : align === 2 ? rightLimit : p1;
  const top0 = align === 0 ? leftTopLimit : align === 2 ? bottomLimit : p1;
  const top1 = align === 1 ? bottomLimit : align === 3 ? leftTopLimit : p1;
  const top2 = align === 0 ? bottomLimit : align === 2 ? leftTopLimit : 100 - p1;
  const top3 = align === 1 ? leftTopLimit : align === 3 ? bottomLimit : 100 - p1;

  return {
    left0: `${left0}%`,
    left2: `${left2}%`,
    left1: `${left1}%`,
    left3: `${left3}%`,
    top0: `${top0}%`,
    top1: `${top1}%`,
    top2: `${top2}%`,
    top3: `${top3}%`,
  };
}

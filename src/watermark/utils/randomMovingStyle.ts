/* eslint-disable no-nested-ternary */
export default function randomMovingStyle() {
  const align = Math.floor(Math.random() * 4);
  const p1 = Math.floor(Math.random() * 70) + 30;
  const leftTopLimit = 0;
  const bottomLimit = 95;
  const rightLimit = 90;
  const left0 = align === 1 ? rightLimit : align === 3 ? leftTopLimit : p1;
  const left25 = align === 0 ? rightLimit : align === 2 ? leftTopLimit : 100 - p1;
  const left50 = align === 1 ? leftTopLimit : align === 3 ? rightLimit : 100 - p1;
  const left75 = align === 0 ? leftTopLimit : align === 2 ? rightLimit : p1;
  const top0 = align === 0 ? leftTopLimit : align === 2 ? bottomLimit : p1;
  const top25 = align === 1 ? bottomLimit : align === 3 ? leftTopLimit : p1;
  const top50 = align === 0 ? bottomLimit : align === 2 ? leftTopLimit : 100 - p1;
  const top75 = align === 1 ? leftTopLimit : align === 3 ? bottomLimit : 100 - p1;

  return {
    left0: `${left0}%`,
    left25: `${left25}%`,
    left50: `${left50}%`,
    left75: `${left75}%`,
    top0: `${top0}%`,
    top25: `${top25}%`,
    top50: `${top50}%`,
    top75: `${top75}%`,
  };
}

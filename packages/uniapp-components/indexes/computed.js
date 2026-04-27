export function getFirstCharacter(str, showFullIndex) {
  const res = str.toString();
  if (showFullIndex) {
    return res;
  }
  return res.substring(0, 1);
}


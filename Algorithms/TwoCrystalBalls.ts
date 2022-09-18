const twoCrystalBalls = (breaks: boolean[]) => {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmount;
  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }
  i -= jmpAmount;
  for (let j = 0; j < breaks.length && jmpAmount; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
};

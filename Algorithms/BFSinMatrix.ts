const breathForSearch = (
  matrix: number[][],
  source: number,
  needle: number
) => {
  const seen = new Array(matrix.length).fill(false);
  const previuosArray = new Array(matrix.length).fill(-1);
  seen[source] = true;
  const queue: number[] = [source];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (current === needle) {
      break;
    }

    const neighbours = matrix[current];

    for (let i = 0; i < neighbours.length; i++) {
      if (neighbours[i] === 0) {
        continue;
      }
      if (seen[i]) {
        continue;
      }

      seen[i] = true;
      previuosArray[i] = current;
      queue.push(i);
    }
  }

  //build it back
  let curr = needle;
  const path: number[] = [];
  while (previuosArray[curr] !== -1) {
    path.push(curr);
    curr = previuosArray[curr];
  }

  if (path.length === 0) {
    return null;
  }
  return [source, ...path.reverse()];
};

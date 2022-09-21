const hasUnvisited = (seen: boolean[], distance: number[]): boolean => {
  let has = false;
  for (let i = 0; i < seen.length; i++) {
    if (!seen[i] && distance[i] !== Infinity) {
      has = true;
      break;
    }
  }
  return has;
};

const getLowestDistanceNode = (seen: boolean[], distance: number[]): number => {
  let index = -1;
  let min = Infinity;
  for (let i = 0; i < distance.length; i++) {
    if (!seen[i] && distance[i] < min) {
      min = distance[i];
      index = i;
    }
  }
  return index;
};

const dijkstraList = (
  source: number,
  needle: number,
  graph: WeightedAdjacencyList
): number[] => {
  const path: number[] = new Array(graph.length).fill(-1);

  const seen: boolean[] = new Array(graph.length).fill(false);

  const distance: number[] = new Array(graph.length).fill(Infinity);

  distance[source] = 0;

  while (hasUnvisited(seen, distance)) {
    const current = getLowestDistanceNode(seen, distance);
    seen[current] = true;

    const neighbours = graph[current];
    for (let i = 0; i < neighbours.length; i++) {
      const edge = neighbours[i];
      if (seen[edge.to]) continue;
      const newDistance = distance[current] + edge.weight;
      if (newDistance < distance[edge.to]) {
        distance[edge.to] = newDistance;
        path[edge.to] = current;
      }
    }
  }

  const out: number[] = [];
  let curr = needle;
  while (path[curr] !== -1) {
    out.push(curr);
    curr = path[curr];
  }
  return [source, ...out.reverse()];
};

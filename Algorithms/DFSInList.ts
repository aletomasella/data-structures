type CompleteGraphEdge = {
  from: number;
  to: number;
  weight: number;
};

type GraphEdge = {
  from: number;
  to: number;
};

type WeightedAdjacencyList = GraphEdge[][];

const walk = (
  graph: WeightedAdjacencyList,
  current: number,
  needle: number,
  visited: boolean[],
  path: number[]
): boolean => {
  if (visited[current]) return false;

  path.push(current);

  if (current === needle) return true;

  visited[current] = true;

  const list = graph[current];
  for (let i = 0; i < list.length; i++) {
    const edge = list[i];
    if (walk(graph, edge.to, needle, visited, path)) {
      return true;
    }
  }

  path.pop();
  return false;
};

const dfsInList = (
  graph: WeightedAdjacencyList,
  source: number,
  needle: number
): number[] | null => {
  const visited = new Array(graph.length).fill(false);
  const path: number[] = [];
  if (walk(graph, source, needle, visited, path)) {
    return path;
  }
  return null;
};

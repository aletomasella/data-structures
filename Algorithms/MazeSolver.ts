type Point = {
  x: number;
  y: number;
};

const maze = [
  "###E#####",
  "#...#...#",
  "#.###.#.#",
  "#.#...#.#",
  "#.#.###.#",
  "#.#.....#",
  "#.#######",
  "#.......#",
  "#######S#",
];

const dir = [
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
  [-1, 0], // up
];

const walk = (
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean => {
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  )
    return false;

  if (maze[curr.y][curr.x] === wall) return false;

  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr);
    return true;
  }

  if (seen[curr.y][curr.x]) return false;

  seen[curr.y][curr.x] = true;

  path.push(curr);

  for (let i = 0; i < dir.length; i++) {
    const next = { x: curr.x + dir[i][0], y: curr.y + dir[i][1] };
    if (walk(maze, wall, next, end, seen, path)) return true;
  }

  path.pop();
  return false;
};

const mazeSolver = (
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] => {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  walk(maze, wall, start, end, seen, path);

  return path;
};

export default mazeSolver;

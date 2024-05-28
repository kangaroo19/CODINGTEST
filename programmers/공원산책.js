const park = ["OSO", "OOO", "OXO", "OOO"];
const routes = ["E 2", "S 3"];

let [x, y] = [0, 0];
const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
// 시작지점(S) 찾기 위함
for (let i = 0; i < park.length; i++) {
  if (park[i].includes("S")) {
    [x, y] = [i, park[i].indexOf("S")];
    break;
  }
}
routes.forEach((route) => {
  const [op, n] = route.split(" ");
  // nx,ny => 다음 위치
  // x,y => 현재 위치
  let [nx, ny] = [x, y];
  let cnt = 0;
  while (cnt < n) {
    [nx, ny] = [nx + dirs[op][0], ny + dirs[op][1]];
    if (!park[nx] || !park[nx][ny] || park[nx][ny] === "X") break;
    cnt++;
  }
  if (cnt == n) [x, y] = [nx, ny];
});

function solution(park, routes) {
  let start = null;

  // park배열 => 2차원 배열 및 시작지점 초기화
  const newPark = park.map((item, idx) => {
    if (item.indexOf("S") !== -1) {
      start = [idx, item.indexOf("S")];
    }
    return item.split("");
  });

  const index = [];
  for (let i = 0; i < park.length; i++) {
    index.push([]);
    for (let j = 0; j < park[i].length; j++) {
      if (i === start[0] && j === start[1]) {
        index[i].push(1);
      } else {
        index[i].push(0);
      }
    }
  }

  let nxtP = [start[0], start[1]];
  let curP = [start[0], start[1]];

  routes.map((item) => {
    const [op, n] = item.split(" ");
    const steps = Number(n);

    if (op === "E") {
      if (nxtP[1] + steps >= index[0].length) return;
      for (let i = 1; i <= steps; i++) {
        if (newPark[curP[0]][curP[1] + i] === "X") {
          return;
        }
      }
      curP[1] += steps;
      nxtP = curP;
      console.log(curP);
    }

    if (op === "W") {
      if (nxtP[1] - steps < 0) return;
      for (let i = 1; i <= steps; i++) {
        if (newPark[curP[0]][curP[1] - i] === "X") {
          return;
        }
      }
      curP[1] -= steps;
      nxtP = curP;
    }

    if (op === "S") {
      if (nxtP[0] + steps >= index.length) return;
      for (let i = 1; i <= steps; i++) {
        if (newPark[curP[0] + i][curP[1]] === "X") {
          return;
        }
      }
      curP[0] += steps;
      nxtP = curP;
      console.log(curP);
    }

    if (op === "N") {
      if (nxtP[0] - steps < 0) return;
      for (let i = 1; i <= steps; i++) {
        if (newPark[curP[0] - i][curP[1]] === "X") {
          return;
        }
      }
      curP[0] -= steps;
      nxtP = curP;
    }
    // console.log(curP);
  });
  return curP;
}

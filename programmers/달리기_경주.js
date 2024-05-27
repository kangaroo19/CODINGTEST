function solution(players, callings) {
  const map1 = new Map();
  const map2 = new Map();

  // 처음엔 키: 선수명 , 값 : 등수 (1~players.length) 초기화
  for (let i = 0; i < players.length; i++) {
    map1.set(players[i], i + 1);
    map2.set(i + 1, players[i]);
  }
  for (let i = 0; i < callings.length; i++) {
    let rank = map1.get(callings[i]); // 4
    map1.set(callings[i], rank - 1); // 추월한 새끼 업뎃
    map1.set(map2.get(rank - 1), rank); // 추월당한 새끼 업뎃
    map2.set(rank, map2.get(rank - 1));
    map2.set(rank - 1, callings[i]);
  }

  const sortedKeys = [...map1.entries()]
    .sort((a, b) => a[1] - b[1]) // 값 기준 오름차순 정렬
    .map((entry) => entry[0]); // 키값만 추출

  return sortedKeys;
}

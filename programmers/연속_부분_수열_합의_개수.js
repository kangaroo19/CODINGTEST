function solution(element) {
  const map = new Set(element);
  for (let i = 0; i < element.length; i++) {
    let cnt = 0;
    let start = i;
    let sum = 0;
    while (cnt < element.length) {
      let end = (start + cnt) % element.length;
      sum += element[end];
      map.add(sum);
      cnt++;
    }
  }
  return map.size;
}

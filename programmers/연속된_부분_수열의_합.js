const sequence = [1, 2, 3, 4, 5];
const k = 7;

function solution(sequence, k) {
  let start = 0;
  let end = 0;
  let sum = sequence[0];
  const answer = [0, 999999];
  const arr = [];
  while (start !== sequence.length - 1 && end !== sequence.length - 1) {
    if (sum < k) {
      ++end;
      sum += sequence[end];
    } else if (sum > k) {
      sum -= sequence[start];
      ++start;
    } else {
      if (answer[1] - answer[0] > end - start) {
        answer[0] = start;
        answer[1] = end;
      }
      sum -= sequence[start];
      ++start;
    }
  }
  return answer;
}

solution(sequence, k);

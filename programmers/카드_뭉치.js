function solution(cards1, cards2, goal) {
    for (let i = 0; i < goal.length; i++) {
      console.log(i);
      if (goal[i] === cards1[0]) {
        console.log(cards1.shift());
      } else if (goal[i] === cards2[0]) {
        console.log(cards2.shift());
      } else {
        return "No";
      }
    }
    return "Yes";
  }
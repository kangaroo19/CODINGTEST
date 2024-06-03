const cards1 = ["i", "drink", "water"];
const cards2 = ["want", "to"];

const goal = ["i", "want", "to", "drink", "water"];

// function solution(cards1, cards2, goal) {
//   for (let i = goal.length - 1; i >= 0; i--) {
//     if (goal[i] === cards1[cards1.length - 1]) {
//       console.log(cards1.pop());
//     } else if (goal[i] === cards2[cards2.length - 1]) {
//       console.log(cards2.pop());
//     } else {
//       return "No";
//     }
//   }
//   return "Yes";
// }
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
console.log(solution(cards1, cards2, goal));

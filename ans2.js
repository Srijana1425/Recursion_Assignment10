// example 1
let n = 9
var lastRemaining = function (n) {
    if (n === 1) return 1;
    let len = n;
    let start = 1;
    let dir = 1;
    let step = 0;
    while (len > 1) {
      if (dir === 1 || (dir === -1 && len % 2 === 1)) {
        start = start + Math.pow(2, step);
      }
      step++;
      dir = dir * -1;
      len = Math.floor(len / 2);
    }
    return start;
  }
  console.log(lastRemaining(n))

// ****************************************************************************************
// example 2
// let n = 1
// var lastRemaining = function (n) {
//     if (n === 1) return 1;
//     let len = n;
//     let start = 1;
//     let dir = 1;
//     let step = 0;
//     while (len > 1) {
//       if (dir === 1 || (dir === -1 && len % 2 === 1)) {
//         start = start + Math.pow(2, step);
//       }
//       step++;
//       dir = dir * -1;
//       len = Math.floor(len / 2);
//     }
//     return start;
//   }
//   console.log(lastRemaining(n))
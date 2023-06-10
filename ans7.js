// example1
let str="cd"
var findPermutations = (str) => {
    if (!str || typeof str !== "string"){
      return "Please enter a string"
    } else if (str.length < 2 ){
      return str
    }
    let permutationsArray = [] 
     
    for (let i = 0; i < str.length; i++){
      let char = str[i]
      if (str.indexOf(char) != i)
      continue
      let remainingChars = str.slice(0, i) + str.slice(i + 1, str.length)
      for (let permutation of findPermutations(remainingChars)){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
  }
  console.log(findPermutations(str))

// *****************************************************************************************
// example2
// let str = “abb”
// var findPermutations = (str) => {
//     if (!str || typeof str !== "string"){
//       return "Please enter a string"
//     } else if (str.length < 2 ){
//       return str
//     }
//     let permutationsArray = [] 
     
//     for (let i = 0; i < str.length; i++){
//       let char = str[i]
//       if (str.indexOf(char) != i)
//       continue
//       let remainingChars = str.slice(0, i) + str.slice(i + 1, str.length)
//       for (let permutation of findPermutations(remainingChars)){
//         permutationsArray.push(char + permutation) }
//     }
//     return permutationsArray
//   }
//   console.log(findPermutations(str))
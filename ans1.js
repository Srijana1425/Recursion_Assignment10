// Example1
let n=27
const isPowerOfThree = n => {
    while(n > 1){
        n /= 3
    }
    
    return n === 1
};
console.log(isPowerOfThree(n))

// Example2
// let n=0
// const isPowerOfThree = n => {
//     while(n > 1){
//         n /= 3
//     }
    
//     return n === 1
// };
// console.log(isPowerOfThree(n))

// Example3
// let n=-1
// const isPowerOfThree = n => {
//     while(n > 1){
//         n /= 3
//     }
    
//     return n === 1
// };
// console.log(isPowerOfThree(n))

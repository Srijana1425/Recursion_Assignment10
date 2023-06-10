// example1
let str = "abcd"
var calculatelength =function(str)
{

    if (str == "")
        return 0;
    else
        return calculatelength(str.substring(1)) + 1;
}
console.log(calculatelength(str))

// ******************************************************************************8
// example2
// let str = "GEEKSFORGEEKS"
// var calculatelength =function(str)
// {

//     if (str == "")
//         return 0;
//     else
//         return calculatelength(str.substring(1)) + 1;
// }
// console.log(calculatelength(str))
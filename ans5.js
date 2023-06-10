// example1
let s = "abcab";
var allcontiguoussubstrings = function(s)
{
    var result = 0;
    var n = s.length;
    for(i = 0; i < n; i++)
        for(j = i; j < n; j++)
            if (s.charAt(i) == s.charAt(j))
                result++;
    return result;
}
console.log(allcontiguoussubstrings(s));

// ***********************************************************
// example1
// let S = "aba"
// var allcontiguoussubstrings = function(s)
// {
//     var result = 0;
//     var n = s.length;
//     for(i = 0; i < n; i++)
//         for(j = i; j < n; j++)
//             if (s.charAt(i) == s.charAt(j))
//                 result++;
//     return result;
// }
// console.log(allcontiguoussubstrings(s));
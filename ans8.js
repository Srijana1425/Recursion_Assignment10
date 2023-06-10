// Example1
let str = "abc de";
function isConsonant(x)
      {
        x = x.toUpperCase();
        return (
          !(x == "A" || x == "E" || x == "I" || x == "O" || x == "U") &&
          x.match(/[A-Z]/i)
        );
      }
      function totalConsonants(str) {
        var count = 0;
        for (var i = 0; i < str.length; i++)
          if (isConsonant(str[i])) ++count;
        return count;
      }
    console.log(totalConsonants(str));


// **************************************************************
// Example2
// let str ="geeksforgeeks portal";
// function isConsonant(x)
//       {
//         x = x.toUpperCase();
//         return (
//           !(x == "A" || x == "E" || x == "I" || x == "O" || x == "U") &&
//           x.match(/[A-Z]/i)
//         );
//       }
//       function totalConsonants(str) {
//         var count = 0;
//         for (var i = 0; i < str.length; i++)
//           if (isConsonant(str[i])) ++count;
//         return count;
//       }
//     console.log(totalConsonants(str));
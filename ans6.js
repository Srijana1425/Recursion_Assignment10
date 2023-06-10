// example1
var N = 2;
towerOfHanoi(N, 'A', 'C', 'B');
function towerOfHanoi(N, from_rod,  to_rod,  aux_rod)
{
        if (N == 0)
        {
            return;
        }
        towerOfHanoi(N - 1, from_rod, aux_rod, to_rod);
        console.log("Move disk " + N + " from rod " + from_rod +
        " to rod " + to_rod);
        towerOfHanoi(N - 1, aux_rod, to_rod, from_rod);
    }

    
// ****************************************************************
// example2
// var N = 3;
// towerOfHanoi(N, 'A', 'C', 'B');
// function towerOfHanoi(N, from_rod,  to_rod,  aux_rod)
// {
//         if (N == 0)
//         {
//             return;
//         }
//         towerOfHanoi(N - 1, from_rod, aux_rod, to_rod);
//         console.log("Move disk " + N + " from rod " + from_rod +
//         " to rod " + to_rod);
//         towerOfHanoi(N - 1, aux_rod, to_rod, from_rod);
//     }

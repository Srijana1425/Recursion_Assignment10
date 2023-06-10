# Recursion_Assignment10
**Question 1**<br>
Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.
An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.<br>
**Example 1:**<br>
Input: n = 27<br>
Output: true<br>
Explanation: 27 = 33<br>

**Example 2:**<br>
Input: n = 0<br>
Output: false<br>
Explanation: There is no x where 3x = 0.<br>

**Example 3:**<br>
Input: n = -1<br>
Output: false<br>
Explanation: There is no x where 3x = (-1).<br>

*Answer*<br>
**Code** [Link]()<br>
************************************************************************************************
**Question 2**<br>
You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:<br>
- Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.<br>
- Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.<br>
- Keep repeating the steps again, alternating left to right and right to left, until a single number remains.<br>

Given the integer `n`, return *the last number that remains in* `arr`..<br>
**Example 1:**<br>
Input: n = 9<br>
Output: 6<br>
Explanation:<br>
arr = [1, 2,3, 4,5, 6,7, 8,9]<br>
arr = [2,4, 6,8]<br>
arr = [2, 6]<br>
arr = [6]<br>

**Example 2:**<br>
Input: n = 1<br>
Output: 1<br><br>

*Answer*<br>
**Code** [Link]()<br>
************************************************************************************************
**Question 3**<br>
Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.<br><br><br>

**Example 1:**<br>
Input :  set = “abc”<br>
Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}<br>

**Example 2:**<br>
Input : set = “abcd”<br>
Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }<br><br>

*Answer*<br>
**Code** [Link]()<br>
************************************************************************************************
**Question 4**<br>
Given a string calculate length of the string using recursion.<br>
**Example 1:**<br>
Input : str = "abcd"<br>
Output :4<br>
**Example 2:**<br>
Input : str = "GEEKSFORGEEKS"<br>
Output :13<br>

*Answer*<br>
**Code** [Link]()<br>
************************************************************************************************
**Question 5**<br>
We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.<br>
**Example 1:**<br>
Input  : S = "abcab"<br>
Output : 7<br>
There are 15 substrings of "abcab"
a, ab, abc, abca, abcab, b, bc, bca
bcab, c, ca, cab, a, ab, b
Out of the above substrings, there
are 7 substrings : a, abca, b, bcab,
c, a and b.<br>
**Example 2:**<br>
Input  : S = "aba"<br>
Output : 4<br>
The substrings are a, b, a and aba<br><br>

*Answer*<br>
**Code** [Link]()<br>
************************************************************************************************
**Question 6**<br>
The tower of Hanoi is a famous puzzle where we have three rods and N disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs N. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.Note: The discs are arranged such that the top disc is numbered 1 and the bottom-most disc is numbered N. Also, all the discs have different sizes and a bigger disc cannot be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.<br>
**Example 1:**<br>
Input:N = 2<br>
Output:<br>
move disk 1 from rod 1 to rod 2<br>
move disk 2 from rod 1 to rod 3<br>
move disk 1 from rod 2 to rod 3<br>
3<br>
Explanation:For N=2 , steps will be
as follows in the example and total
3 steps will be taken.<br>

**Example 2:**<br>
Input:N = 3<br>
Output:<br>
move disk 1 from rod 1 to rod 3<br>
move disk 2 from rod 1 to rod 2<br>
move disk 1 from rod 3 to rod 2<br>
move disk 3 from rod 1 to rod 3<br>
move disk 1 from rod 2 to rod 1<br>
move disk 2 from rod 2 to rod 3<br>
move disk 1 from rod 1 to rod 3<br>
7<br>
Explanation:For N=3 , steps will be
as follows in the example and total
7 steps will be taken.<br><br>

*Answer*<br>
**Code** [Link]()<br>
************************************************************************************************
**Question 7**<br>
Given a string str, the task is to print all the permutations of str. A permutation is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.<br>
**Example 1:**<br>
Input: str = “cd”<br>
Output: cd dc<br>
**Example 2:**<br>
Input: str = “abb”<br>
Output: abb abb bab bba bab bba<br><br>

*Answer*<br>
**Code** [Link]()<br>
************************************************************************************************
**Question 8**<br>
Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.<br>
**Example 1:**<br>
Input : abc de<br>
Output : 3<br>
There are three consonants b, c and d.<br>

**Example 2:**<br>
Input : geeksforgeeks portal<br>
Output : 12<br><br>

*Answer*<br>
**Code** [Link]()<br>
************************************************************************************************

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
Given an array of integers **arr**, the task is to find maximum element of that array using recursion.<br>
**Example 1:**<br>
Input : str = "abcd"<br>
Output :4<br>
**Example 2:**<br>
Input : str = "GEEKSFORGEEKS"<br>
Output :13<br>

*Answer*<br>
**Code** [Link]()<br>
************************************************************************************************
**Question 6**<br>
Given first term (a), common difference (d) and a integer N of the Arithmetic Progression series, the task is to find Nth term of the series.<br>
**Example 1:**<br>
Input : a = 2 d = 1 N = 5<br>
Output : 6<br>
The 5th term of the series is : 6<br>
**Example 2:**<br>
Input : a = 5 d = 2 N = 10<br>
Output : 23<br>
The 10th term of the series is : 23<br>

*Answer*<br>
**Code** [Link]()<br>
************************************************************************************************
**Question 7**<br>
Given a string S, the task is to write a program to print all permutations of a given string.<br>
**Example 1:**<br>
***Input:***<br>
*S = “ABC”*<br>
***Output:***<br>
*“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*<br>
**Example 2:**<br>
***Input:***<br>
*S = “XY”*<br>
***Output:***<br>
*“XY”, “YX”*<br><br>

*Answer*<br>
**Code** [Link]()<br>
************************************************************************************************
**Question 8**<br>
Given an array, find a product of all array elements.<br>
**Example 1:**<br>
Input  : arr[] = {1, 2, 3, 4, 5}<br>
Output : 120<br>
**Example 2:**<br>
Input  : arr[] = {1, 6, 3}<br>
Output : 18<br><br>

*Answer*<br>
**Code** [Link]()<br>
************************************************************************************************

my approach -
create a decision tree
'2+3-1'
/           \
'5-1'      '2+2'
/                 \
4                4
problem with my approach-
Input: expression = "2*3-4*5"
Output: [-34,-14,-10,-10,10]
Explanation:
(2*(3-(4*5))) = -34
((2*3)-(4*5)) = -14  // my approach count this twice
((2*(3-4))*5) = -10
(2*((3-4)*5)) = -10
(((2*3)-4)*5) = 10
​
​
https://leetcode.com/problems/different-ways-to-add-parentheses/discuss/677792/JavaScript-Solution
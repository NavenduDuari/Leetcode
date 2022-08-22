[1]
1
[4,5,6,7,0,1,2]
0
[4,5,6,7,0,1,2]
3
[1]
0
[1,3]
3
[4,5,6,7,8,1,2,3]
8
​
[]
​
https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/14436/Revised-Binary-Search
​
​
### intuitive solution
​
```
public int search(int[] nums, int target) {
if (nums == null || nums.length == 0) {
return -1;
}
/*.*/
int left = 0, right = nums.length - 1;
//when we use the condition "left <= right", we do not need to determine if nums[left] == target
//in outside of loop, because the jumping condition is left > right, we will have the determination
//condition if(target == nums[mid]) inside of loop
while (left <= right) {
//left bias
int mid = left + (right - left) / 2;
if (target == nums[mid]) {
return mid;
}
//if left part is monotonically increasing, or the pivot point is on the right part
if (nums[left] <= nums[mid]) {
//must use "<=" at here since we need to make sure target is in the left part,
//then safely drop the right part
if (nums[left] <= target && target < nums[mid]) {
right = mid - 1;
}
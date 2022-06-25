if (nums[left] <= nums[mid]) {
//must use "<=" at here since we need to make sure target is in the left part,
//then safely drop the right part
if (nums[left] <= target && target < nums[mid]) {
right = mid - 1;
}
else {
//right bias
left = mid + 1;
}
}
​
//if right part is monotonically increasing, or the pivot point is on the left part
else {
//must use "<=" at here since we need to make sure target is in the right part,
//then safely drop the left part
if (nums[mid] < target && target <= nums[right]) {
left = mid + 1;
}
else {
right = mid - 1;
}
}
}
return -1;
}
```
8
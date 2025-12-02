// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


function moveZeroes(nums) {
    let i = 0
    for(let j = 0; j < nums.length; j++) {
        
        if(nums[j] !== 0) {
            if(nums[i] !== nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                i++

            }
        }
    }
    return nums
}

console.log(moveZeroes([0,1,0,3,12]));

//dry run 
//1st iteration [1,0,0,3,12] i++ so now i = 1; j = 1
//2nd iteration [same because nums[j] = 0]
//3rd iteration j = 2 i = 1 [same because[j] = 0]
//4rth iteration j = 3 i = 1 [1,3,0,0,12] i++
//last iteration j = 4 i = 2 [1,3,12,0,0] done moved zeroes to last

// My brute force solution.
/*
const twoSum = (nums, target) => {
    let firstIndex = 0;
    let secondIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                firstIndex = i;
                secondIndex = j;
                break;
            }
        }
    }

    return [firstIndex, secondIndex];
};
*/

// HuXn's brute force solution.

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    
};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 3, 7, 9, 2], 11));
var twoSum = function(nums, target) {
  let ansArr = [];
  let hash = new Map();
  for (let i = 0; i< nums.length; i++) {
      let remainder = target - nums[i];   //So we got this here cause we are gonna check is the remainder needed is already in the Map. If it is we return the indx we in now and the value of the remainder
      if(hash.has(remainder)) {
          ansArr.push(hash.get(remainder));
          ansArr.push(i);
          return ansArr;k
      } else {
          hash.set(nums[i], i);
      }
  }
};

twoSum([])













































































let ansArr = [];
let hash = new Map();

for(let i = 0; i<nums.length; i++ ) {
    let remainder = target - nums[i];
    if(hash.has(remainder)) {
        ansArr.push(hash.get(remainder));
        ansArr.push(i);
        return ansArr

    } else {
        hash.set(nums[i], i);
    }
}

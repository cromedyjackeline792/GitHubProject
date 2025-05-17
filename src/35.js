function sum(nums) {
  if (!nums || nums.length === 0) {
    throw new Error('Array should not be empty');
  }

  let result = 0;
  for (let num of nums) {
    result += num;
  }
  
  return result;
}

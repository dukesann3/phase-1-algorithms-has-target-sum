function hasTargetSum(array, target) {

  const seenNumbers = new Set();

  for(let item of array){
    const complimentary = target - item;
    if(seenNumbers.has(complimentary)){
      return true;
    }
    seenNumbers.add(item);
  }

  return false;

}


hasTargetSum([2,2,3,3],4);

/* 
  Write the Big O time complexity of your function here
  O(2n) => O(n)
*/

/* 
  Add your pseudocode here
  
  newArray = array.forEach( subtract individual array element from target )
  for(the length of new array)
    if new array's individual element is inside of the target array, then return true.
    If not false outside of the for loop
*/

/*
  Add written explanation of your solution here
  
  create array with individual items that are target-arr[i].
  And see if any of those new array elements are inside of the input array.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [];  // This will hold the final subarrays.
  let currentSubarray = [];  // This holds the elements of the current subarray.

  for (let i = 0; i < arr.length; i++) {
    // If adding the current element to the sum doesn't exceed 'n'
    const currentSum = currentSubarray.reduce((sum, num) => sum + num, 0);
    
    if (currentSum + arr[i] <= n) {
      currentSubarray.push(arr[i]);
    } else {
      // Push the current subarray into the result and start a new subarray
      result.push(currentSubarray);
      currentSubarray = [arr[i]];  // Start a new subarray with the current element.
    }
  }

  // Push the last subarray into the result
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));

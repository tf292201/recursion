/** product: calculate the product of an array of numbers. */

function product(nums) {
// Base case
if (nums.length === 0) {
  return 1; 
}
//recursive case
return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  //Base case
  if (words.length === 1) {
    return words[0].length;
  }
// Recursive case
if (words[0].length >= words[1].length) {
  words.splice(1, 1);
} else {
  words.splice(0, 1);
}
return longest(words);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  //base case
  if (str.length=== 0) {
    return '';
  }
  //recrusive case
  return str[0] + everyOther(str.slice(2));

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //base case
  if (str.length === 1 || str.length === 0) {
    return true;
  }
  
  //recursive case
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.lenght - 1));
  } else {
    return false;
  }

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // Base case
  if (arr.length === 0) {
    return -1;
  }

  // Recursive case
  if (arr[0] === val) {
    return 0;
  }
  let index = findIndex(arr.slice(1), val);
  if (index === -1) {
    return -1;
  } else {
    return index + 1;
  }

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  //base case
  if (str.length === 0) {
    return '';
  }

  //recursive case
  return revString(str.slice(1)) + str[0];

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  
  function gather(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        arr.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
        gather(obj[key]);
      }
    }
  }
  gather(obj);
  return arr;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

  //base case
  if (arr.length === 0) {
    return -1;
  }
  let midIndex = Math.floor(arr.length / 2);
  let midVal = arr[midIndex];

  if (midVal === val) {
    return midIndex;
  } else if (midVal < val) {
    let subIndex = binarySearch(arr.slice(midIndex + 1), val);
    return subIndex === -1 ? -1 : midIndex + 1 + subIndex;
  } else {
    return binarySearch(arr.slice(0, midIndex), val);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

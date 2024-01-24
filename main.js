// JS script

// linkedList
class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(elem) {
    let newNode = new node(elem);

    if (!this.head) {
      this.head = newNode;
      this.size++;
      console.log("After adding", newNode, ", size of linked list", this.size);
      return;
    }

    let curr = this.head;
    let prev = null;

    while (curr) {
      prev = curr;
      curr = curr.next;
    }

    this.size++;
    prev.next = newNode;

    console.log("After adding", newNode, ", size of linked list", this.size);
  }

  printList() {
    let display = "";
    let curr = null;

    if (!this.head) {
      console.log("List is empty!");
      return;
    }

    curr = this.head;

    while (curr) {
      display += curr.data + " ";
      curr = curr.next;
    }

    console.log(display);
  }

  firstOccur(elem) {
    let count = 0;
    let curr = null;

    if (!this.head) {
      console.log("Not present in the list");
      return;
    }

    curr = this.head;

    while (curr) {
      if (curr.data == elem) {
        console.log(elem, "occurs for the first time at", count);
        break;
      }
      count++;
      curr = curr.next;
    }
  }

  insertAt(elem, index) {
    let prev = null;
    let curr = null;
    let count = 0;
    let newNode = new node(elem);

    if (index < 0 || index >= this.size) {
      console.log("Enter a valid index");
      return;
    }

    curr = this.head;

    while (curr) {
      if (count == index) {
        if (index == 0) {
          newNode.next = this.head;
          this.head = newNode;
          break;
        }
        prev.next = newNode;
        newNode.next = curr;
        break;
      }

      prev = curr;
      curr = curr.next;
      count++;
    }

    this.size++;
    console.log("After inserting, length", this.size);
  }

  length() {
    console.log(this.size);
  }

  isEmpty() {
    console.log(this.size == 0);
  }
}

let ll = new linkedList();

ll.printList();
ll.length();
ll.isEmpty();
ll.add(10);
ll.insertAt(101, 0);
ll.printList();
ll.add(20);
ll.isEmpty();
ll.add(50);
ll.add(20);
ll.length();
ll.printList();
ll.firstOccur(10);
ll.firstOccur(50);
ll.insertAt(55, 3);
ll.printList();

// Queue
class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  enqueue(elem) {
    this.items[this.backIndex] = elem;
    this.backIndex++;
  }
  dequeue() {
    // if (this.frontIndex == this.backIndex) {
    //   return -1;
    // }
    if (Object.keys(this.items).length == 0) {
      console.log("Queue is empty");
      return;
    }
    let remove = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return remove;
  }
  printQueue() {
    console.log("Queue", this.items);
  }
}

let que = new Queue();
console.log("1-frontIndex", que.frontIndex);
console.log("1-backIndex", que.backIndex);
que.dequeue();
que.printQueue();
console.log("2-frontIndex", que.frontIndex);
console.log("2-backIndex", que.backIndex);
que.enqueue("car");
que.printQueue();
console.log("3-frontIndex", que.frontIndex);
console.log("3-backIndex", que.backIndex);
que.dequeue();
que.printQueue();
que.dequeue();
console.log("4-frontIndex", que.frontIndex);
console.log("4-backIndex", que.backIndex);

// Value equal to index value
class Solution {
  valueEqualToIndex(arr, n) {
    let resultArr = [];
    for (let i = 0; i < n; i++) {
      if (arr[i] == i + 1) {
        resultArr.push(i + 1);
      }
    }
    return resultArr;
  }
}

// Palindrome checker
class Solution {
  PalinArray(arr, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      let toCheck = arr[i].toString();
      let afterReverse = arr[i].toString().split("").reverse().join("");
      if (toCheck != afterReverse) {
        result = 0;
        break;
      }
    }
    return result;
  }
}

class Solution {
  PalinArray(arr, n) {
    let palin = 1;
    for (let i = 0; i < n; i++) {
      let toCheck = arr[i].toString().split("");
      if (toCheck.length % 2 == 0) {
        let j = 0;
        do {
          if (!(toCheck[j] == toCheck[toCheck.length - j - 1])) {
            palin = 0;
            break;
          }
          j++;
        } while (j < toCheck.length / 2);
      } else {
        for (let j = 0; j < (toCheck.length - 1) / 2; j++) {
          if (!(toCheck[j] == toCheck[toCheck.length - j - 1])) {
            palin = 0;
            break;
          }
        }
      }

      if (palin == 0) {
        break;
      }
    }
    return palin;
  }
}

// Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m. Task is to check whether a2[] is a subset of a1[] or not. Both the arrays can be sorted or unsorted. There can be duplicate elements.
class Solution {
  isSubset(a1, a2, n, m) {
    let result = "Yes";
    for (let i = 0; i < m; i++) {
      let elem = a2[i];
      let isIndex = a1.indexOf(elem);
      if (isIndex == -1) {
        result = "No";
        break;
      } else {
        a1.splice(isIndex, 1);
      }
    }
    return result;
  }
}

// Given an array, rotate the array by one position in clock-wise direction
class Solution {
  rotate(arr, n) {
    let lastItem = arr.pop();
    arr.unshift(lastItem);
    return arr;
  }
}

// Write a program to implement a Stack using Array. Your task is to use the class as shown in the comments in the code editor and complete the functions push() and pop() to implement a stack.
//Function to push an integer into the stack.
MyStack.prototype.push = function (x) {
  if (!this.arr || this.arr.length == 0) {
    this.arr = [];
  }
  this.arr.push(x);
};

//Function to remove an item from top of the stack.
MyStack.prototype.pop = function () {
  if (!this.arr || this.arr.length == 0) {
    return -1;
  }
  let popElem = this.arr.pop();
  if (!popElem) {
    return -1;
  }
  return popElem;
};

// You are required to complete the two methods push() which take one argument an integer 'x' to be pushed into the queue and pop() which returns a integer poped out from othe queue. If the queue is empty, it should return -1 on a pop operation.
class MyQueue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.arr = new Array(100005);
  }

  //Function to push an element x in a queue.
  push(x) {
    this.arr[this.rear] = x;
    this.rear++;
  }

  //Function to pop an element from queue and return that element.
  pop() {
    if (this.front == this.rear) {
      return -1;
    }
    let removed = this.arr[this.front];
    delete this.arr[this.front];
    this.front++;
    return removed;
  }
}

// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.
class Solution {
  getPairsCount(arr, n, k) {
    let result = 0;
    arr.sort(function (a, b) {
      return a - b;
    });
    for (let i = 0; i < n; i++) {
      let findElem = k - arr[i];
      if (findElem < 0) {
        break;
      }
      for (let j = i + 1; j < n; j++) {
        if (arr[j] == findElem) {
          result++;
        } else if (arr[j] > findElem) {
          break;
        }
      }
    }
    return result;
  }
}

class Solution {
  getPairsCount(arr, n, k) {
    let result = 0;
    let tally = {};
    for (let i = 0; i < n; i++) {
      if (tally[arr[i].toString()]) {
        tally[arr[i].toString()] += 1;
      } else {
        tally[arr[i].toString()] = 1;
      }
    }
    for (let i = 0; i < n; i++) {
      let elemNeeded = k - arr[i];
      if (arr[i] == elemNeeded) {
        result += tally[elemNeeded.toString()] - 1;
      } else if (tally[elemNeeded.toString()]) {
        result += tally[elemNeeded.toString()];
      }
    }
    return result / 2;
  }
}

// Given an array of N strings, find the longest common prefix among all strings present in the array
class Solution {
  longestCommonPrefix(arr, n) {
    //code
    let smallestString = "";
    let commonString = "";
    for (let i = 0; i < n; i++) {
      let elemLength = arr[i].length;
      if (smallestString == "" || smallestString.length > elemLength) {
        smallestString = arr[i];
      }
    }
    for (let i = 0; i < smallestString.length; i++) {
      if (commonString.length == i) {
        commonString += smallestString[i];
        for (let j = 0; j < n; j++) {
          if (arr[j][i] != smallestString[i]) {
            commonString = commonString.slice(0, i);
            break;
          }
        }
      } else {
        break;
      }
    }

    return commonString ? commonString : -1;
  }
}

// Given an array A of N integers. Your task is to write a program to find the maximum value of ∑arr[i]*i, where i = 0, 1, 2,., n 1. You are allowed to rearrange the elements of the array. Note: Since output could be large, hence module 109+7 and then print answer.
class Solution {
  Maximize(arr, n) {
    //code here
    let result = 0;
    arr.sort(function (a, b) {
      return a - b;
    });
    for (let i = 0; i < n; i++) {
      result += arr[i] * i;
    }

    return result % (10 ** 9 + 7);
  }
}

// Given an array nums[] of size n, construct a Product Array P (of same size n) such that P[i] is equal to the product of all the elements of nums except nums[i]. Note: Try to solve this problem without using the division operation.
class Solution {
  productExceptSelf(nums, n) {
    //code here
    let resultArr = [];
    let productAll = 1;
    let countZero = 0;
    for (let i = 0; i < n; i++) {
      if (nums[i] == 0) {
        countZero++;
        continue;
      }
      productAll = productAll * nums[i];
    }
    for (let i = 0; i < n; i++) {
      if (nums[i] == 0 && countZero == 1) {
        resultArr[i] = productAll;
      } else if (countZero > 1 || (nums[i] != 0 && countZero == 1)) {
        resultArr[i] = 0;
      } else {
        resultArr[i] = productAll / nums[i];
      }
    }

    return resultArr;
  }
}

// Alternate positive and negative numbers
// Given an unsorted array Arr of N positive and negative numbers. Your task is to create an array of alternate positive and negative numbers without changing the relative order of positive and negative numbers. Note: Array should start with a positive number and 0 (zero) should be considered a positive element.
class Solution {
  rearrange(arr, n) {
    //code here
    let resultArr = [];
    let posArr = [];
    let negArr = [];
    for (let i = 0; i < n; i++) {
      if (arr[i] < 0) {
        negArr.push(arr[i]);
      } else {
        posArr.push(arr[i]);
      }
    }

    if (posArr.length >= negArr.length) {
      let j = 1;
      for (let i = 0; i < negArr.length; i++) {
        posArr.splice(j, 0, negArr[i]);
        j += 2;
      }
      resultArr = posArr;
    } else {
      let j = 0;
      for (let i = 0; i < posArr.length; i++) {
        negArr.splice(j, 0, posArr[i]);
        j += 2;
      }
      resultArr = negArr;
    }

    return resultArr;
  }
}

// Three way partitioning
// Given an array of size n and a range [a, b]. The task is to partition the array around the range such that array is divided into three parts. 1) All elements smaller than a come first. 2) All elements in range a to b come next. 3) All elements greater than b appear in the end. The individual elements of three sets can appear in any order. You are required to return the modified array. Note: The generated output is 1 if you modify the given array successfully.
class Solution {
  threeWayPartition(array, a, b) {
    //your code here
    let front = [];
    let mid = [];
    let last = [];

    for (let elem of array) {
      if (elem < a) {
        front.push(elem);
      } else if (a <= elem && elem <= b) {
        mid.push(elem);
      } else if (elem > b) {
        last.push(elem);
      }
    }

    const resultArray = [...front, ...mid, ...last];
    for (let i = 0; i < array.length; i++) {
      array[i] = resultArray[i];
    }

    return array;
  }
}

// slower solution
class Solution {
  //Function to partition the array around the range such
  //that array is divided into three parts.
  threeWayPartition(array, a, b) {
    //your code here
    let resultArr = [];
    let smallerIndex = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < a) {
        resultArr.splice(smallerIndex, 0, array[i]);
        smallerIndex++;
      } else if (array[i] >= a && array[i] <= b) {
        resultArr.splice(smallerIndex, 0, array[i]);
      } else {
        resultArr.splice(resultArr.length, 0, array[i]);
      }
    }

    for (let i = 0; i < array.length; i++) {
      array[i] = resultArr[i];
    }

    return array;
  }
}

//Smallest subarray with sum greater than x
//Given an array of integers (A[])  and a number x, find the smallest subarray with sum greater than the given value. If such a subarray do not exist return 0 in that case.
class Solution {
  smallestSubWithSum(a, n, x) {
    // Initialize current sum and minimum length
    let curr_sum = 0,
      min_len = n + 1;

    // Initialize starting and ending indexes
    let start = 0,
      end = 0;
    while (end < n) {
      // Keep adding array elements while current sum
      // is smaller than x
      while (curr_sum <= x && end < n) curr_sum += a[end++];

      // If current sum becomes greater than x.
      while (curr_sum > x && start < n) {
        // Update minimum length if needed
        if (end - start < min_len) min_len = end - start;

        curr_sum -= a[start++];
      }
    }

    if (min_len > n) return 0;
    return min_len;
  }
}

//Count More than n/k Occurences
//Given an array arr of size N and an element k. The task is to find the count of elements in the array that appear more than n/k times.
class Solution {
  //Function to find all elements in array that appear more than n/k times.
  countOccurence(arr, n, k) {
    //your code here
    let greaterThan = n / k;
    let resultArr = [];
    let tally = {};

    for (let i = 0; i < n; i++) {
      if (tally[arr[i]]) {
        tally[arr[i]] += 1;
      } else {
        tally[arr[i]] = 1;
      }
      // if(tally[arr[i]] > greaterThan && resultArr.indexOf(arr[i])<0){
      //         resultArr.push(arr[i]);
      // }
    }
    Object.keys(tally).forEach((value) => {
      if (tally[value] > greaterThan) {
        resultArr.push(value);
      }
    });
    return resultArr.length;
  }
}

//Maximize sum after K negations
//Given an array of integers of size N and a number K., You must modify array arr[] exactly K number of times. Here modify array means in each operation you can replace any array element either arr[i] by -arr[i] or -arr[i] by arr[i]. You need to perform this operation in such a way that after K operations, the sum of the array must be maximum.
class Solution {
  maximizeSum(arr, n, k) {
    //code here
    arr.sort(function (a, b) {
      return a - b;
    });
    for (let i = 0; i < n; i++) {
      if (k == 0) {
        break;
      }
      if (arr[i] < 0) {
        arr[i] = -arr[i];
        k--;
      } else {
        break;
      }
    }

    arr.sort(function (a, b) {
      return a - b;
    });

    while (k > 0) {
      arr[0] = -arr[0];
      k--;
    }

    return arr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  }
}

//Remove all duplicates from a given string
//Given a string Str which may contains lowercase and uppercase chracters. The task is to remove all duplicate characters from the string and find the resultant string. The order of remaining characters in the output should be same as in the original string.
class Solution {
  removeDuplicates(str) {
    //code here
    let stringArr = str.split("");
    let tallyArr = [];

    //slower way
    //   stringArr.forEach((elem)=>{
    //       if(tallyArr.indexOf(elem)<0){
    //           tallyArr.push(elem);
    //       }
    //   })

    let tallyObj = {};
    stringArr.forEach((elem) => {
      if (!tallyObj[elem]) {
        tallyObj[elem] = 1;
        tallyArr.push(elem);
      }
    });

    return tallyArr.join("");
  }
}

//Sort by Set Bit Count
//Given an array of integers, sort the array (in descending order) according to count of set bits in binary representation of array elements. Note: For integers having same number of set bits in their binary representation, sort according to their position in the original array i.e., a stable sort.

//works but invalid solution, need to use something called as comparator or Lamda Function approach
class Solution {
  sortBySetBitCount(arr, n) {
    //code here
    let resultArr = [];
    let tallyObj = {};

    arr.forEach((elem) => {
      let ones = elem
        .toString(2)
        .split("")
        .filter((bit) => bit === "1").length;
      if (tallyObj[ones]) {
        tallyObj[ones].push(elem);
      } else {
        tallyObj[ones] = [elem];
      }
    });
    let tallyArr = Object.keys(tallyObj).sort((a, b) => {
      return b - a;
    });
    for (let i = 0; i < tallyArr.length; i++) {
      resultArr = resultArr.concat(tallyObj[tallyArr[i]]);
    }

    return resultArr;
  }
}

//Pairs with certain difference
//Given an array of integers, arr[] and a number, K.You can pair two numbers of the array if the difference between them is strictly less than K. The task is to find the maximum possible sum of such disjoint pairs (i.e., each element of the array can be used at most once). The Sum of P pairs is the sum of all 2P elements of pairs.
class Solution {
  //Function to return maximum sum?.
  maxSumPairWithDifferenceLessThanK(arr, N, K) {
    //your code goes here
    let resultArr = [];

    arr.sort((a, b) => {
      return b - a;
    });
    arr.forEach((elem, index) => {
      for (let i = index + 1; i < N; i++) {
        if (elem - arr[i] < K) {
          resultArr.push(elem, arr[i]);
          arr.splice(i, 1);
          break;
        }
      }
    });

    return resultArr.reduce((total, elem) => {
      return total + elem;
    }, 0);
  }
}

//Minimum Sum of Absolute Differences of Pairs
//You are given two arrays A and B of equal length N. Your task is to pair each element of array A to an element in array B, such that the sum of the absolute differences of all the pairs is minimum.
class Solution {
  //Function to find the minimum sum of two numbers
  findMinSum(A, B, N) {
    //your code here
    let resultArr = [];

    A.sort((a, b) => {
      return a - b;
    });
    B.sort((a, b) => {
      return a - b;
    });

    for (let i = 0; i < N; i++) {
      let calc = A[i] - B[i];
      if (calc < 0) {
        calc = -calc;
      }
      resultArr.push(calc);
    }

    return resultArr.reduce((total, elem) => {
      return total + elem;
    }, 0);
  }
}

//The Celebrity Problem
//A celebrity is a person who is known to all but does not know anyone at a party. If you go to a party of N people, find if there is a celebrity in the party or not. A square NxN matrix M[][] is used to represent people at the party such that if an element of row i and column j  is set to 1 it means ith person knows jth person. Here M[i][i] will always be 0. Note: Follow 0 based indexing. Follow Up: Can you optimize it to O(N)
class Solution {
  //Function to find if there is a celebrity in the party or not.
  celebrity(M, n) {
    // code here
    let celeb = -1;
    for (let i = 0; i < n; i++) {
      if (M[i].indexOf(1) < 0) {
        celeb = i;
      }
    }
    for (let i = 0; i < n; i++) {
      if (i == celeb) {
        continue;
      }
      if (M[i][celeb] != 1) {
        celeb = -1;
        break;
      }
    }
    return celeb;
  }
}

//Minimum Swaps to Sort
//Given an array of n distinct elements. Find the minimum number of swaps required to sort the array in strictly increasing order.
//slower solution
class Solution {
  //Function to find the minimum number of swaps required to sort the array.
  minSwaps(nums) {
    // code here
    let swapCount = 0;
    let sortedArr = nums
      .map((elem) => {
        return elem;
      })
      .sort((a, b) => {
        return a - b;
      });
    nums.map((elem, index) => {
      if (nums[index] != sortedArr[index]) {
        let atIndex = nums.indexOf(sortedArr[index]);
        nums[index] = nums[atIndex];
        nums[atIndex] = elem;

        swapCount++;
      }
    });

    return swapCount;
  }
}

//Merge k Sorted Arrays
//Given K sorted arrays arranged in the form of a matrix of size K*K. The task is to merge them into one sorted array.
class Solution {
  mergeKArrays(arr, K) {
    //code here
    let resultArr = [];
    for (let i = 0; i < K; i++) {
      resultArr = resultArr.concat(arr[i]);
    }
    resultArr.sort((a, b) => {
      return a - b;
    });

    return resultArr;
  }
}

//Find Transition Point
//Given a sorted array containing only 0s and 1s, find the transition point, i.e., the first index where 1 was observed, and before that, only 0 was observed.
class Solution {
  transitionPoint(arr, n) {
    //code here
    return arr.indexOf(1);
  }
}

//Remove duplicate elements from sorted Array
//Given a sorted array A[] of size N, delete all the duplicated elements from A[]. Modify the array such that if there are X distinct elements in it then the first X positions of the array should be filled with them in increasing order and return the number of distinct elements in the array. Note: 1. Don't use set or HashMap to solve the problem. 2. You must return the number of distinct elements(X) in the array, the driver code will print all the elements of the modified array from index 0 to X-1 as output of your code.
class Solution {
  remove_duplicate(arr, n) {
    //code here
    for (let i = 0; i < arr.length; i++) {
      if (i == 0) {
        continue;
      }
      if (arr[i - 1] == arr[i]) {
        arr.splice(i, 1);
        i--;
      }
    }

    return arr.length;
  }
}

//Remove duplicates in small prime array
//Given an array consisting of only prime numbers, remove all duplicate numbers from it.
class Solution {
  removeDuplicate(a, n) {
    //your code here
    let checkObj = {};
    let resultArr = [];
    for (let i = 0; i < n; i++) {
      if (resultArr.indexOf(a[i]) < 0) {
        resultArr.push(a[i]);
      }
    }

    return resultArr;
  }
}

//Equilibrium index of an array
//Equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.Given an array, your task is to find the index of first Equilibrium point in the array.
class Solution {
  findEquilibrium(arr, n) {
    //code here
    let result = -1;
    let totalSum = 0;
    let sumFromLeft = 0;
    arr.forEach((elem) => {
      totalSum += elem;
    });
    for (let i = 0; i < n; i++) {
      if (sumFromLeft == totalSum - sumFromLeft - arr[i]) {
        result = i;
        break;
      }
      sumFromLeft += arr[i];
    }

    return result;
  }
}

//Find Maximum value
//Given an array A[ ] your task is to complete the function max_val which finds the maximum value of abs(i – j) * min(arr[i], arr[j]) where i and j vary from 0 to n-1.
//slower solution
class Solution {
  max_val(arr, n) {
    //code here
    let max = -Infinity;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let value = (j - i) * Math.min(arr[i], arr[j]);
        max = Math.max(max, value);
      }
    }

    return max;
  }
}

//two-pointer approach
class Solution {
  max_val(arr, n) {
    //code here
    let maxProduct = -Infinity;
    let currProduct;

    let left = 0,
      right = n - 1;
    while (left < right) {
      if (arr[left] < arr[right]) {
        currProduct = arr[left] * (right - left);
        left++;
      } else {
        currProduct = arr[right] * (right - left);
        right--;
      }

      maxProduct = Math.max(maxProduct, currProduct);
    }

    return maxProduct;
  }
}

//You and your books
//You have N stacks of books. Each stack of books has some non zero height Hi equal to the number of books on that stack ( considering all the books are identical and each book has a height of 1 unit ). In one move, you can select any number of consecutive stacks of books such that the height of each selected stack of books Hi <= K . Once such a sequence of stacks is chosen , You can collect any number of books from the chosen sequence of stacks . What is the maximum number of books that you can collect this way ?
class Solution {
  max_Books(arr, n, k) {
    //code here
    let result = 0;
    let left = null;
    let right = null;
    let currMax = 0;

    for (let i = 0; i < n; i++) {
      left = i - 1;
      right = i + 1;
      currMax = arr[i];
      if (arr[i] <= k) {
        while (arr[left] <= k && left >= 0) {
          currMax += arr[left];
          left--;
        }
        while (arr[right] <= k && right <= n) {
          currMax += arr[right];
          right++;
        }

        result = Math.max(result, currMax);
      }
    }

    return result;
  }
}

//Max distance between same elements
//Given an array with repeated elements, the task is to find the maximum distance between two occurrences of an element.
class Solution {
  maxDistance(arr, n) {
    //code here
    let maxDistance = 0;
    let currDistance = 0;
    let reverseArr = [...arr];
    reverseArr.reverse();
    let indexFromLast = null;
    arr.forEach((elem, index) => {
      indexFromLast = reverseArr.indexOf(elem);
      currDistance = n - 1 - indexFromLast - index;
      maxDistance = Math.max(currDistance, maxDistance);
    });

    return maxDistance;
  }
}

//Minimum distance between two numbers
//You are given an array a, of n elements. Find the minimum index based distance between two distinct elements of the array, x and y. Return -1, if either x or y does not exist in the array.
class Solution {
  minDist(a, n, x, y) {
    // code here
    let minDistance = -1;
    let currDistance = 0;
    let xArr = [];
    let yArr = [];
    if (a.indexOf(x) < 0 || a.indexOf(y) < 0) {
      return minDistance;
    }
    a.forEach((elem, index) => {
      if (elem == x) {
        xArr.push(index);
      }
      if (elem == y) {
        yArr.push(index);
      }
    });
    minDistance = Infinity;
    for (let i = 0; i < xArr.length; i++) {
      for (let j = 0; j < yArr.length; j++) {
        currDistance = Math.abs(xArr[i] - yArr[j]);
        minDistance = Math.min(minDistance, currDistance);
      }
    }

    return minDistance;
  }
}

//Find duplicates in an array
//Given an array a of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array. Return the answer in ascending order. If no such element is found, return list containing [-1]. Note: The extra space is only for the array to be returned. Try and perform all operations within the provided array.
//slower solution
function duplicates(a, n) {
  //your code here
  let repeateArr = [];
  let elemObj = {};
  let elem = null;
  for (let i = 0; i < n; i++) {
    elem = a[i];
    if (repeateArr.indexOf(elem) != -1) {
      continue;
    }
    if (elemObj[elem]) {
      repeateArr.push(elem);
    } else {
      elemObj[elem] = 1;
    }
  }

  return repeateArr.length == 0
    ? [-1]
    : repeateArr.sort((a, b) => {
        return a - b;
      });
}

//faster solution using set()
class Solution {
  duplicates(a, n) {
    //your code here
    const repeatedSet = new Set();
    const uniqueSet = new Set();

    for (let i = 0; i < n; i++) {
      const elem = a[i];
      if (uniqueSet.has(elem)) {
        repeatedSet.add(elem);
      } else {
        uniqueSet.add(elem);
      }
    }

    const result = Array.from(repeatedSet).sort((a, b) => a - b);
    return result.length === 0 ? [-1] : result;
  }
}

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

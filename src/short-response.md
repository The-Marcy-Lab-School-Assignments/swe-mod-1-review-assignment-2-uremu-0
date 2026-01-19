# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Read the following code:

```js
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = playlist1;
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

Part A: What will be logged to the console? Why?

The value logged to the console will be 15. This happens because objects in JavaScript are reference types, so playlist2 does not create a copy, it points to the same object in memory as playlist1. When playlist2.songCount is updated, it also updates playlist1.songCount.

Part B: How would you modify the code so that reassigning `playlist2.songCount` does NOT affect `playlist1`.songCount? Write the corrected code below your response (we've provided the broken code again for you to fix).

### Response 1

To prevent this,a true copy of playlist1 needs to be created so that changes to playlist2 do not affect it. This can be done using the spread operator, which creates a new object in memory.

**Corrected Code:**

```js
// fix this!
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = { ...playlist1 };
playlist2.songCount = 15;
console.log(playlist1.songCount); // 10
```

---

## Prompt 2

```js
const students = [
  { name: "Maya", grade: 92, passed: true },
  { name: "Jamal", grade: 78, passed: true },
  { name: "Destiny", grade: 88, passed: true },
  { name: "Marcus", grade: 95, passed: true }
];
```

For each task below, identify which array method (forEach, filter, map, find, or reduce) you would use.

1. You need to get an array containing only students who scored above 85.
2. You need to find the student named "Destiny" and update their grade to 90.
3. You need to calculate the average grade of all students.
4. You need to create an array of strings in the format: "Maya: 92"

### Response 2

Your response...
	1.	I would use filter because it creates a new array containing only elements that meet a condition.
	2.	I would use find to locate the student named “Destiny” so I can update her grade directly.
	3.	I would use reduce because it allows me to combine all grades into a single value to calculate the average.
	4.	I would use map to transform each student object into a formatted string like "Maya: 92".

---

## Prompt 3

We should expect that the code below prints the array `[ 'A', 'B', 'C', 'D' ]` but an error is thrown when the third line of code is executed.

Explain why this error occurs, how to fix it, and provide a suggestion for how to avoid this error in the future.

```js
const letters = ['a', 'b', 'c', 'd'];
const capitalize = (str) => str.toUpperCase();

const upperCaseLetters = letters.map(capitalize());
// Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')

console.log(upperCaseLetters);
```

### Response 3

The error occurs because capitalize is being invoked immediately instead of being passed as a callback to map. This causes capitalize to run with undefined, leading to the toUpperCase error. To fix this, we should pass the function reference without parentheses: letters.map(capitalize). To avoid this error in the future, always remember that array methods expect a function reference, not the result of calling a function

---

## Prompt 4

Given this code:

```js
const orders = [
  { id: 1, total: 45 },
  { id: 2, total: 23 },
  { id: 3, total: 67 }
];

const grandTotal = orders.reduce((sum, order) => {
  return sum + order.total;
}, 0);
```

- Part A: What will `grandTotal` equal after this code runs?
- Part B: Explain what the `0` at the end of the reduce method does. Why is it important?
- Part C: Walk through what happens in the FIRST iteration of reduce:
    - What is the value of sum?
    - What is the value of order?
    - What gets returned?

### Response 4

Your response...

Part A:
grandTotal will equal 135 after the code runs.

Part B:
The 0 is the initial value of the accumulator (sum). It is important because it ensures the reduction starts with a known value and prevents unexpected behavior.

Part C:
In the first iteration, sum is 0 and order is { id: 1, total: 45 }. The function returns 0 + 45, so sum becomes 45 for the next iteration.
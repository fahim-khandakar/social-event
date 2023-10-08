<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>It gives an empty object because the code greeting = {}; assigns an empty object to the variable greeting. The resulting greeting variable holds an empty object, even though it doesn't have any key-value pairs.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The code gives us '12' because JavaScript performs type coercion when adding different data types. In this case, it treats the number '1' as a string and concatenates it with the string '2', resulting in the string '12'. JavaScript tries to make the types compatible for concatenation with the '+' operator.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The code assigns the value '🍕' from the 'food' array to the 'info.favoriteFood' variable. Later, it changes the value of 'info.favoriteFood' to '🍝', but this modification only affects the 'info' object and does not alter the original 'food' array. Consequently, when you log 'food' to the console, it remains the same as the original array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>It gives us 'Hi there, undefined' because the 'sayHi' function uses template literals to create the string 'Hi there, ${name}', where ${name} is an attempt to interpolate the 'name' variable. Since 'name' is not provided as an argument when calling the 'sayHi' function, it remains undefined, resulting in 'Hi there, undefined' as the returned string.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>It gives us 3 because the code uses the forEach method to iterate through the nums array and count the number of truthy values. In JavaScript, 0 is considered falsy, but all other non-zero numbers are considered truthy. Since the nums array contains three non-zero values (1, 2, and 3), which are all truthy, the count variable increments for each of these values, resulting in a final count of 3.</i>

</p>
</details>

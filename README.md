# JavaScript: Subtle Null Handling Bug

This repository demonstrates a common, yet subtle bug in JavaScript related to null handling.  The `foo` function attempts to add two numbers, but only explicitly checks for `null` values. This can lead to unexpected behavior if undefined or other falsy values are passed as arguments.

## Bug Description

The provided `bug.js` file contains a function that adds two numbers. However, it only explicitly handles `null` values. If either `a` or `b` is `undefined` or another falsy value (e.g., 0, false, ""), it will result in an unexpected output.

## Solution

The `bugSolution.js` file demonstrates a more robust solution that explicitly checks for falsy values, providing more predictable behavior. 

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js` to see the unexpected behavior.
3. Run `node bugSolution.js` to see the corrected behavior.
# Uncommon JavaScript Bug: Incorrect Null Handling

This repository demonstrates a common yet subtle bug in JavaScript related to null value handling in arithmetic operations. The `foo` function attempts to add two numbers; however, it doesn't correctly handle cases where either or both inputs are null.  This can lead to unexpected null results or even runtime errors in more complex scenarios.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version with improved null handling.

## Bug Description

The original code returns `null` if either input is null. This is problematic because it might be expected to return 0, throw an error, or perform other actions depending on the context. 

## Solution

The solution involves adding explicit checks for null and converting them to numeric values (0) before performing the addition, ensuring that the function always performs the calculation as intended, or at least returns a result which is not null.
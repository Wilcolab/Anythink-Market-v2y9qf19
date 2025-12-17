# Power (Exponential) Function Feature

## Overview
This feature adds support for the power (exponential) operation to the calculator application.

## Changes Made

### 1. Frontend UI (public/index.html)
- Added power button (`^`) to the calculator interface under the TODO: Buttons section
- Button triggers `operationPressed('^')` when clicked

### 2. Frontend Logic (public/client.js)
- Added case handler for `^` operator in the calculate function's switch statement
- Maps `^` operation to backend `power` operation
- Added keyboard support for `^` operator in the event listener

### 3. Backend Implementation (api/controller.js)
- Added `'power'` operation to the operations object
- Implements power operation using `Math.pow(a, b)` function
- Fully integrated with existing validation and error handling

### 4. Test Coverage (test/arithmetic.test.js)
- Added power operation test suite with comprehensive coverage:
  - Test for positive integer base with positive exponent (2^5 = 32)
  - Test for negative exponents (4^-1 = 0.25)

## Usage
Users can now:
1. Click the `^` button on the calculator UI
2. Or type `^` on their keyboard
3. Enter the exponent value and press `=` to calculate the result
4. Example: 2 ^ 5 = 32

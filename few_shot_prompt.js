// Few-shot prompting example
// Prompt: Write a JavaScript function toCamelCase that converts strings to camelCase.
// Here are some examples:
// first name → firstName
// user_id → userId
// SCREEN_NAME → screenName
// mobile-number → mobileNumber
// Implement the function to handle these cases.

function toCamelCase(str) {
  return str
    .split(/[\s_-]+/)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Test cases
console.log(toCamelCase("first name"));        // firstName
console.log(toCamelCase("user_id"));           // userId
console.log(toCamelCase("SCREEN_NAME"));       // screenName
console.log(toCamelCase("mobile-number"));     // mobileNumber

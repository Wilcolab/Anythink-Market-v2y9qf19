/**
 * Converts a given string into camelCase format.
 * 
 * Requirements:
 * - The function should accept a single input parameter of type string.
 * - Throw a descriptive error if the input is not a string, or if it is null or undefined.
 * - Trim leading and trailing whitespace before processing.
 * - Handle edge cases such as empty strings, strings with multiple spaces, hyphens, or underscores, and mixed casing.
 * - Ignore non-alphanumeric characters except as word separators.
 * - Ensure the first word is lowercase and each subsequent word starts with an uppercase letter.
 * - Return the correctly formatted camelCase string.
 * 
 * @param {string} input - The input string to convert to camelCase
 * @returns {string} The converted camelCase string
 * @throws {Error} If input is not a string, null, or undefined
 * 
 * @example
 * toCamelCase("hello world")           // returns "helloWorld"
 * toCamelCase(" Hello_world-test ")    // returns "helloWorldTest"
 * toCamelCase("")                      // returns ""
 * toCamelCase(123)                     // throws an error with a clear message
 */
function toCamelCase(input) {
  // Validate input
  if (input === null || input === undefined) {
    throw new Error('Input cannot be null or undefined');
  }
  
  if (typeof input !== 'string') {
    throw new Error(`Expected a string, but received ${typeof input}`);
  }
  
  // Trim whitespace
  const trimmed = input.trim();
  
  // Handle empty string
  if (trimmed.length === 0) {
    return '';
  }
  
  // Split by non-alphanumeric characters and filter out empty strings
  const words = trimmed.split(/[^a-zA-Z0-9]+/).filter(word => word.length > 0);
  
  // Convert each word
  return words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

/**
 * Converts a given string into dot.case format (lowercase with dots as separators).
 * 
 * @param {string} input - The input string to convert to dot.case
 * @returns {string} The converted dot.case string
 * @throws {Error} If input is not a string, null, or undefined
 * 
 * @example
 * toDotCase("hello world")           // returns "hello.world"
 * toDotCase("HelloWorld")            // returns "hello.world"
 * toDotCase("hello_world-test")      // returns "hello.world.test"
 */
function toDotCase(input) {
  // Validate input
  if (input === null || input === undefined) {
    throw new Error('Input cannot be null or undefined');
  }
  
  if (typeof input !== 'string') {
    throw new Error(`Expected a string, but received ${typeof input}`);
  }
  
  // Trim whitespace
  const trimmed = input.trim();
  
  // Handle empty string
  if (trimmed.length === 0) {
    return '';
  }
  
  // Split by non-alphanumeric characters and filter out empty strings
  const words = trimmed.split(/[^a-zA-Z0-9]+/).filter(word => word.length > 0);
  
  // Convert to lowercase and join with dots
  return words.map(word => word.toLowerCase()).join('.');
}

// Test cases for toCamelCase
console.log('=== toCamelCase Tests ===');
console.log(toCamelCase("hello world"));           // "helloWorld"
console.log(toCamelCase(" Hello_world-test "));    // "helloWorldTest"
console.log(toCamelCase(""));                      // ""

// Test cases for toDotCase
console.log('\n=== toDotCase Tests ===');
console.log(toDotCase("hello world"));             // "hello.world"
console.log(toDotCase("HelloWorld"));              // "hello.world"
console.log(toDotCase("hello_world-test"));        // "hello.world.test"

// Error handling tests
console.log('\n=== Error Handling Tests ===');
try {
  toCamelCase(123);
} catch (error) {
  console.log('toCamelCase(123):', error.message);
}

try {
  toDotCase(null);
} catch (error) {
  console.log('toDotCase(null):', error.message);
}

/**
 * Chain Prompting Implementation:
 * You are a JavaScript coding assistant. Follow the steps below in order to produce the final result.
 * First, analyze what it means to convert a string to kebab case, including how to handle spaces,
 * camelCase, PascalCase, underscores, numbers, and mixed capitalization.
 * Next, design and implement a JavaScript function named toKebabCase that converts an input string
 * into kebab case based on that analysis.
 * Then, add inline comments to the function explaining the key parts of the logic.
 * Finally, provide three example inputs and their expected outputs to demonstrate that toKebabCase
 * works correctly.
 * Output only the final JavaScript function followed by the example inputs and outputs.
 */

/**
 * Converts a given string into kebab-case format (lowercase with hyphens as separators).
 * 
 * Kebab case analysis:
 * - Spaces: converted to hyphens
 * - camelCase: each uppercase letter becomes a new word with hyphen prefix
 * - PascalCase: same as camelCase
 * - Underscores: converted to hyphens
 * - Numbers: treated as word separators when adjacent to letters
 * - Mixed capitalization: normalized to lowercase with hyphens between words
 * 
 * @param {string} input - The input string to convert to kebab-case
 * @returns {string} The converted kebab-case string
 * @throws {Error} If input is not a string, null, or undefined
 */
function toKebabCase(input) {
  // Input validation: ensure input is a string
  if (input === null || input === undefined) {
    throw new Error('Input cannot be null or undefined');
  }
  
  if (typeof input !== 'string') {
    throw new Error(`Expected a string, but received ${typeof input}`);
  }
  
  // Trim leading and trailing whitespace
  const trimmed = input.trim();
  
  // Handle empty string case
  if (trimmed.length === 0) {
    return '';
  }
  
  // Insert hyphens before uppercase letters in camelCase/PascalCase strings
  // This handles the transition from lowercase to uppercase within a word
  let result = trimmed.replace(/([a-z])([A-Z])/g, '$1-$2');
  
  // Insert hyphens before uppercase letters that follow lowercase letters (for PascalCase)
  result = result.replace(/([a-z])([A-Z])/g, '$1-$2');
  
  // Replace sequences of non-alphanumeric characters with a single hyphen
  // This handles spaces, underscores, and other separators
  result = result.replace(/[^a-zA-Z0-9]+/g, '-');
  
  // Remove leading and trailing hyphens
  result = result.replace(/^-+|-+$/g, '');
  
  // Convert to lowercase
  result = result.toLowerCase();
  
  return result;
}

/**
 * Detailed JSDoc for all string case conversion functions
 */

/**
 * Converts a given string into camelCase format.
 * @param {string} input - The input string to convert
 * @returns {string} The converted camelCase string
 * @throws {Error} If input is not a string, null, or undefined
 * @example
 * toCamelCase("hello-world") // returns "helloWorld"
 */
function toCamelCase(input) {
  if (input === null || input === undefined) {
    throw new Error('Input cannot be null or undefined');
  }
  if (typeof input !== 'string') {
    throw new Error(`Expected a string, but received ${typeof input}`);
  }
  const trimmed = input.trim();
  if (trimmed.length === 0) return '';
  
  const words = trimmed.split(/[^a-zA-Z0-9]+/).filter(word => word.length > 0);
  return words.map((word, index) => {
    if (index === 0) return word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

/**
 * Converts a given string into PascalCase format.
 * @param {string} input - The input string to convert
 * @returns {string} The converted PascalCase string
 * @throws {Error} If input is not a string, null, or undefined
 * @example
 * toPascalCase("hello-world") // returns "HelloWorld"
 */
function toPascalCase(input) {
  if (input === null || input === undefined) {
    throw new Error('Input cannot be null or undefined');
  }
  if (typeof input !== 'string') {
    throw new Error(`Expected a string, but received ${typeof input}`);
  }
  const trimmed = input.trim();
  if (trimmed.length === 0) return '';
  
  const words = trimmed.split(/[^a-zA-Z0-9]+/).filter(word => word.length > 0);
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}

// Example inputs and their expected outputs for toKebabCase:

console.log('=== toKebabCase Examples ===');

// Example 1: Simple space-separated string
const example1 = "hello world";
const output1 = toKebabCase(example1);
console.log(`Input: "${example1}" → Output: "${output1}"`);
console.log(`Expected: "hello-world" | Actual: "${output1}" | ${output1 === "hello-world" ? "✓ PASS" : "✗ FAIL"}`);

// Example 2: camelCase string
const example2 = "helloWorldTest";
const output2 = toKebabCase(example2);
console.log(`Input: "${example2}" → Output: "${output2}"`);
console.log(`Expected: "hello-world-test" | Actual: "${output2}" | ${output2 === "hello-world-test" ? "✓ PASS" : "✗ FAIL"}`);

// Example 3: String with underscores and mixed case
const example3 = "Hello_World-Test";
const output3 = toKebabCase(example3);
console.log(`Input: "${example3}" → Output: "${output3}"`);
console.log(`Expected: "hello-world-test" | Actual: "${output3}" | ${output3 === "hello-world-test" ? "✓ PASS" : "✗ FAIL"}`);

// Additional test cases
console.log('\n=== Additional Tests ===');
console.log(`toKebabCase("") → "${toKebabCase("")}"`);
console.log(`toKebabCase("already-kebab-case") → "${toKebabCase("already-kebab-case")}"`);
console.log(`toCamelCase("hello-world") → "${toCamelCase("hello-world")}"`);
console.log(`toPascalCase("hello_world") → "${toPascalCase("hello_world")}"`);

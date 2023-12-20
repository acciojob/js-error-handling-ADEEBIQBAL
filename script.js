// Define custom errors that extend the Error class
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = 'OutOfRangeError';
  }
}
 
class InvalidExprError extends Error {
  constructor() {
    super('Expression should not have an invalid combination of operators');
    this.name = 'InvalidExprError';
  }
}
 
// Function to evaluate the input expression
function evalString(expression) {
  const invalidOperators = ['++', '--', '**', '//', '+-', '-+', '*+', '/+', '+*', '-*', '*/', '/*'];
 
  // Check for invalid combinations of operators
  for (const op of invalidOperators) {
    if (expression.includes(op)) {
      throw new InvalidExprError();
    }
  }
 
  // Check for expressions starting or ending with invalid operators
  if (/^[+\/*]/.test(expression)) {
    throw new SyntaxError('Expression should not start with invalid operator');
  }
 
  if (/[+\-*\/]$/.test(expression)) {
    throw new SyntaxError('Expression should not end with invalid operator');
  }
 
  // Additional evaluation logic can be added here if needed
}
 
// Example usage with try-catch block to handle errors
const expression = '4 + 5 * 2';
try {
  evalString(expression);
} catch (error) {
  // Check the type of error caught and handle accordingly
  if (error instanceof OutOfRangeError) {
    console.error('OutOfRangeError:', error.message);
  } else if (error instanceof InvalidExprError) {
    console.error('InvalidExprError:', error.message);
  } else if (error instanceof SyntaxError) {
    console.error('SyntaxError:', error.message);
  } else {
    console.error('Other Error:', error.message);
  }
}
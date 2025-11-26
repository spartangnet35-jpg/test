/**
 * Simple math helpers for testing npm installs.
 */
export function add(a, b) {
  return Number(a) + Number(b);
}

export function subtract(a, b) {
  return Number(a) - Number(b);
}

export function multiply(a, b) {
  return Number(a) * Number(b);
}

export function divide(a, b) {
  if (Number(b) === 0) {
    throw new Error('Cannot divide by zero');
  }
  return Number(a) / Number(b);
}

export default {
  add,
  subtract,
  multiply,
  divide
};

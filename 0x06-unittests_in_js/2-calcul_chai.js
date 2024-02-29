// Author: Olueatobiloba Light

/**
 * Returns the sum of 2 numbers
 * @param {String}
 * @param {Numbers} a - First argument
 * @param {Numbers} b - Second argument
 * @returns {Numbers|String} - The sum of a and b
 */

export const calculateNumber = (type, a, b) => {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }

      return roundedA / roundedB;
    default:
      return;
  }
};

// export default calculateNumber;
// module.exports = calculateNumber;

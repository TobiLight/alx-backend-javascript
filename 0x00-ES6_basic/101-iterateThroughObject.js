export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }

  if (result.length > 0) {
    result = result.slice(0, -3);
  }

  return result;
}

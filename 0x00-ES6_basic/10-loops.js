export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const [i, value] of array.entries()) {
    newArray[i] = appendString + value;
  }

  return newArray;
}

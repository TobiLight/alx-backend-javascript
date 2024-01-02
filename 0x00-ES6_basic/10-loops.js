export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];

  for (const [i, value] of newArray.entries()) {
    newArray[i] = appendString + value;
  }

  return newArray;
}

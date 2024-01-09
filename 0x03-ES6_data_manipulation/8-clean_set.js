export default function cleanSet(set, startString) {
  if (!startString.length) {
    return startString;
  }

  const arrayFromSet = Array.from(set);
  const filteredArr = arrayFromSet.filter((item) => item.startsWith(startString));
  const cleanedVal = filteredArr.map((item) => item.slice(startString.length));
  return cleanedVal.join('-');
}

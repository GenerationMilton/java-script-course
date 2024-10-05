/*Finding Substring indices
Given an array of strings and a target string,
write a function to determine if the target string is present in the array.
If it is present, return the index of the first occurrence and the index of
the last ocurrence; otherwise, return -1
*/
// Ejercicio: Encontrando Índices de substring

const stringArray = ["apple", "banana", "orange", "grape", "banana", "kiwi"];

const target = "banana";

function findStringIndicesInArray(array, target) {
  const result = {
    includesTargetString: false,
    firstOccurrenceIndex: -1,
    lastOccurrenceIndex: -1,
  };
  array.forEach((element, index) => {
    if (element.includes(target)) {
      result.includesTargetString = true;
      result.firstOccurrenceIndex = array.indexOf(target);
      result.lastOccurrenceIndex = array.lastIndexOf(target);
    }
  });
  return result;
}

const result = findStringIndicesInArray(stringArray, target);
console.log(result);
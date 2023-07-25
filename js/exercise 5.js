function ascendingSort(arr) {
  return arr.sort((a, b) => a - b);//the sort() method is used here to sort the array in ascending order
}

function descendingSort(arr) {
  return arr.sort((a, b) => b - a);//the sort() method is used here to sort the array in descending order
}

const unsortedArray = [8, 9, 5, 1, 7, 3, 2, 4, 6];
const sortedAscending = ascendingSort(unsortedArray.slice()); //the slice() method is used here to create copies of the array
const sortedDescending = descendingSort(unsortedArray.slice());

console.log("Original Array:", unsortedArray);
console.log("Ascending Sort:", sortedAscending);
console.log("Descending Sort:", sortedDescending);

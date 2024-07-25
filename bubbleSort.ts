//Bubble Sort

function bubbleSort(arr: number[]): number[] {
    let remainingUnsorted = arr.length;
    let swapped: boolean;

    do {
        swapped = false;
        for (let i = 0; i < remainingUnsorted - 1; i++) {
          if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];  // Swap
            swapped = true;
          }
        }
        remainingUnsorted--;  // Each pass ensures the next largest element is in place
      } while (swapped);

      return arr;
}

  // Example usage
  let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  console.log("Before Sort:", unsortedArray);
  console.log("Sorted array:", bubbleSort(unsortedArray));
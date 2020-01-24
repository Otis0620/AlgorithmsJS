/**
 * Search an array for a given value.
 **/
export function binarySearch(item: number, items: number[]): boolean {
  let end = items.length - 1;
  let start = 0;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (items[middle] === item) {
      return true;
    } else if (items[middle] < item) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return false;
}

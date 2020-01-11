/**
 * Search an array for a given value.
 **/
export function binarySearch(item: number, items: number[]): boolean {
  if (items[0] === item) {
    return true;
  }

  const sortedItems = items.sort((a, b) => b - a);
  let end = sortedItems.length - 1;
  let start = 0;

  while (start < end) {
    let middle = Math.floor((end + start) / 2);

    if (sortedItems[middle] === item) {
      return true;
    } else if (sortedItems[middle] < item) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return false;
}

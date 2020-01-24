import { binarySearch } from './binary-search';

describe('binarySearch', () => {
  const items = [1, 2, 3];
  it('should return true if the number 1 is in the array', () => {
    expect(binarySearch(1, items)).toBeTruthy();
  });

  it('should return true if the number 2 is in the array', () => {
    expect(binarySearch(2, items)).toBeTruthy();
  });

  it('should return true if the number 3 is in the array', () => {
    expect(binarySearch(3, items)).toBeTruthy();
  });

  it('should return false if the number 5 is not in the array', () => {
    expect(binarySearch(5, items)).toBeFalsy();
  });

  it('should return false if the array is empty', () => {
    expect(binarySearch(5, [])).toBeFalsy();
  });

  it('should return true if the array only has one item and the item matches', () => {
    expect(binarySearch(5, [5])).toBeTruthy();
  });

  it('should return false if the array only has one item and the item does not match', () => {
    expect(binarySearch(5, [2])).toBeFalsy();
  });
});

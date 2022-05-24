const isArrayNullOrEmpty = <T>(array?: any): boolean =>
  !Array.isArray(array) ||
  array === undefined ||
  array === null ||
  isArrayEmpty(array);
  
const isArrayEmpty = <T>(array: T[]): boolean => array.length === 0;

export { isArrayEmpty, isArrayNullOrEmpty };

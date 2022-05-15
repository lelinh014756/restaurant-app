const isEmptyArray = (array) =>
  typeof array != "undefined" &&
  array != null &&
  array.length != null &&
  array.length > 0
    ? true
    : false;

export default isEmptyArray;

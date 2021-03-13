module.exports = function towelSort (matrix) {
  if (typeof matrix === "undefined") {
    return [];
  }
  let sortedTowel = [];
  for (row = 0; row < matrix.length; row += 1) {
    if (row % 2 === 0) {
      for (i = 0; i < matrix[row].length; i += 1)
        sortedTowel.push(matrix[row][i]);
    } else {
      for (i = matrix[row].length - 1; i >= 0; i -= 1)
        sortedTowel.push(matrix[row][i]);
    }
  }
  return sortedTowel;
}
module.exports = function towelSort (matrix) {
  if(!matrix) return [];
    const arr = [];
    const arr1 = [];
    for(let i = 0; i < matrix.length; i++) {
        if ( i%2 ) arr.push(matrix[i].reverse());
        else arr.push(matrix[i]);
    }

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j <arr[i].length; j++) {
            arr1.push(arr[i][j]);
        }
    }
    return (arr1);
}


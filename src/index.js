
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let array = [];
    let i = 0;

    if (matrix === undefined) {
        return array;
    } else {
        while (i < matrix.length) {
            if(i % 2 !== 1) {
            array = array.concat(matrix[i]);
            } else {
            array = array.concat(matrix[i].reverse());
            }
            i = i + 1;
        } 
        return array;
    }
}

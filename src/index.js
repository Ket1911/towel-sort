
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
    result = [];
    
    if (matrix == undefined) {
          return [];
      } else if (matrix.length == 0) {
          return [];
      }
    
    for (let i = 0; i < matrix.length; i++) {
      
      if (i === 0 || i % 2 === 0) {
        console.log(matrix[i].length);
      
        for (let j = 0; j < matrix[i].length; j++) {
          result.push(matrix[i][j]);
        } 
      } 
      
      else { 
        for (let j = matrix[i].length - 1; j >= 0; j--) {
          result.push(matrix[i][j]);
        } 
      } 
      
    }
    
    return result;
  }
  
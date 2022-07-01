 
 // WE ARE USING GREEDY ALGORITHM TO CONSTRUCT VALID MATRIX GIVEN ROW AND COLUMN SUMS
 
 const restoreMatrix = (rowSum, colSum) => {
  
     const row = rowSum.length
     const col = colSum.length;
    
     // generate 2D Matrix filled with 0's
     const matrix = Array.from(Array(row), () => new Array(col).fill(0));
    
     for(let i = 0; i < row; i++){
       for(let j = 0; j < col; j++){
         let value = Math.min(rowSum[i], colSum[j]);
         matrix[i][j] = value;
         rowSum[i] -= value;
         colSum[j] -= value;
       }
     }
     return matrix;
   };
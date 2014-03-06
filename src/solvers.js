/* global Board */
/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var tempBoard = new Board({'n': n});
  var solution = [];
  for( var currRow = 0; currRow < tempBoard.attributes.n; currRow++){
    for( var currCol = 0; currCol < tempBoard.attributes.n; currCol++){
      tempBoard.attributes[currRow][currCol] = 1;
      if( tempBoard.hasAnyRowConflicts() === true || tempBoard.hasAnyColConflicts() === true){
        tempBoard.attributes[currRow][currCol] = 0;
      }
    }
  }
  for(var i = 0; i < tempBoard.attributes.n; i++){
    solution.push(tempBoard.attributes[i]);
  }
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var tempBoard = new Board({'n': n});
  var allSolutions = 0;
  var numRooks = 0;

  var subfunction = function(currRow, currCol){
    var nextRow = currRow, nextCol;
    tempBoard.attributes[currRow][currCol] = 1;
    if(tempBoard.hasAnyRowConflicts() === false && tempBoard.hasAnyColConflicts() === false){
      numRooks++;
      if(numRooks === n){
        allSolutions++;
        return;
      }
    } else {
      tempBoard.attributes[currRow][currCol] = 0;
    }
    nextCol = currCol+1;
    if(nextCol === n){
      nextCol = 0;
      nextRow = currRow + 1;
    }
    if(nextCol < n && nextRow < n){
      subfunction(nextRow, nextCol);
      tempBoard.attributes[nextCol][nextRow] = 0;
      subfunction(currRow, nextCol);
    }

    return;
  };

  subfunction(0, 0);

  console.log('Number of solutions for ' + n + ' rooks:', allSolutions);
  return allSolutions;
};

    // tempBoard.attributes[currRow][currCol] = 1;
    // if(tempBoard.hasAnyRowConflicts() === false && tempBoard.hasAnyColConflicts() === false){
    //   numRooks++;
    // } else {
    //   tempBoard.attributes[currRow][currCol] = 0;
    // }
    // if(numRooks === n){
    //   allSolutions++;
    // } else {
    //   currCol++;
    //   if(currCol === n){
    //     currCol = 0;
    //     currRow++;
    //   }
    //   subfunction(currRow, currCol);
    // }
    // return;



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

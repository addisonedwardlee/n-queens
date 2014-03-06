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
window.countNRooksSolutions = function(n, board, currentRow,totalSolutions) {
  // set board to existing board or create new one
  var board = board || new Board({'n':n} );
  // set currentRow to existing currentRow or set to 0
  var currentRow = currentRow || 0;
  // set up totalSolutions
  var totalSolutions = typeof totalSolutions === 'undefined'? 0: totalSolutions;
  //var copy;
  // iterate through the current row
  for( var column = 0; column < n; column++){
    // add 1 to current cell
    board.attributes[currentRow][column] = 1;
    // if current board is legal
    if( board.hasAnyRowConflicts() == false && board.hasAnyColConflicts() === false){
      // if nextRow is off of end of array, you've reached a solution
      if( currentRow + 1 === n){
        totalSolutions += 1;
      // else you haven't reached a solution yet keep going
      }else{
    //   make copy of board
        //copy = window.copyBoard(board);
    //   recursive call( n, copy, currentRow.valueOf()+1, totalSolutions)
         totalSolutions = window.countNRooksSolutions(n, board, currentRow+1, totalSolutions);
      }
    // else
    }
  //   reset current cell to zero
    board.attributes[currentRow][column] = 0;
  }
  return totalSolutions;
};

window.copyBoard = function(board){
  var newBoard = new Board({'n':board.attributes.n});
  for(var i = 0; i < board.attributes.n; i++){
    newBoard.attributes[i] = board.attributes[i].slice();
  }
  return newBoard;
}
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

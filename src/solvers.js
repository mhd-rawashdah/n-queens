/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such tha  t none of them can attack each other

  

window.findNRooksSolution = function(n) {
  var solution = new Board({n: n}); 
  var numRock = n;
  var colIndex = 0;
  for (var i = 0; i < solution.rows().length; i++) {
    if(numRock === 0 ){
      return solution.rows();
    } 
    if (!solution.hasRowConflictAt(i) && !solution.hasColConflictAt(colIndex)) {
      solution.togglePiece(i,colIndex);
      numRock--;
      colIndex++;

    } 
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var countSolutions = new Board({n:n})
  var counter = 0;
  var numRocks = n;
  var colIndex = 0
  for (var i = 0; i < countSolutions.rows().length; i++) {
    if(numRocks === 0){

      counter++;
      numRocks = n;
      i = 0;
    }
    if (!countSolutions.hasRowConflictAt(i) && !countSolutions.hasColConflictAt(colIndex)) {
      countSolutions.togglePiece(i,colIndex);
      numRocks--;
      colIndex++;

    } 
  }
  var solutionCount = counter; 

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

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

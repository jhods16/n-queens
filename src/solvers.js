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

// window.makeBoard = function(n) {
//   var board = [];

//   for (var i = 0; i <= n; i++) {
//     var row = [];
//     for (var j = 0; j <= n; j++) {
//       row.push(0);
//     }
//     board.push(row);
//   }
//   return board;
// };


window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var rows = board.rows();
  
  var solution; //fixme
  if (n === 1) {
    debugger;
    board.togglePiece(0, 0);
  } else {
    for (var i = 0; i < rows.length; i++) {
      if (!board.hasAnyRowConflicts()) {
        if (!board.hasAnyColConflicts()) {
          board.togglePiece(i, i);
        }
      } 
    }
    
  }
  
  solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});
  var rows = board.rows();
  var piecesPlaced = [];
  
  board.togglePiece(0, 0);
  
  for (var i = 1; i < rows.length; i++) {
    for (var j = 1; j < rows[i].length; j++) {
      board.togglePiece(i, j);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(i, j);
      } else {
        piecesPlaced.push([i, j]);
      }
    }
  }
  console.log(piecesPlaced);
  console.log(board);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  
};
// var letsCount = function(number){
//  if(number < 0){
//    return -1
//  } else if(number === 0){
//     return 1
//  } else{
//    return (number* letsCount(number -1))
//  }
// }
// solutionCount = letsCount(n)
// return solutionCount
//for(location)
// board.togglePiece(location[i])
//solutiongenerator(boardwithpiece at location zero)


// var solutionGenerator = function(currentBoard) {
//   for (var i = 0; i < rows.length; i++) {
//     if (!board.hasRowConflictsAt(i)) {
//       if (!board.hasColConflictsAt(i)) {
//         board.togglePiece(i);
//       }
      
//     }
//     console.log(board);
//     solutionCount++
//     var currentBoard = board;    
//   }
      


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //Create nxn board
  //Check for s
  
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

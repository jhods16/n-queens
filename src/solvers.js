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
  
  var solutionfinder = function (row) {
    
    if (row === n) {
      solutionCount++;
      return;
    }
    
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRooksConflicts()) {
        solutionfinder(row + 1);
      }
      board.togglePiece(row, i);
    }
  };
    
  solutionfinder(0);

  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
  
};
  


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var rows = board.rows();
  var count = 0;
  var solution;
  
  console.log('should be n', n);
  if (n === 0) {
    return board.rows();
  } 
  
  var solutionfinder = function(row) {
    if (row === n) {
      return 1;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        // var solution = solutionfinder(row + 1);
        if (solutionfinder(row + 1)) {
          return 1;
        }
      }
      board.togglePiece(row, i); 
      // console.log(board);
    }
  };
  
   solutionfinder(0);
   return board.rows();
   
  

    // board.togglePiece(0, 2);
    // for (var i = 0; i < rows.length; i++) {
    //   for (var j = 0; j < rows[i].length; j++) {
    //     board.togglePiece(i, j);
    //     if (board.hasAnyQueensConflicts()) {
    //       board.togglePiece(i, j);
    //     }
    //   }
    // }
  
  
  // if (n === 1) {
  //   board.togglePiece(0, 0);
  // } else {
  //   for (var i = 0; i < rows.length; i++) {
  //     board.togglePiece(i, i);
  //     if (board.hasAnyQueensConflicts()) {
  //       board.togglePiece(i, i);
  //     }
  //   } 
  // }
  
  
  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});
  var rows = board.rows();
  var count = 0;
  var solution;
  
  console.log('should be n', n);
  if (n === 0) {
    return 1;
  } 
  
  var solutionfinder = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        solutionfinder(row + 1);
      }
      board.togglePiece(row, i); 
    }
  };
  
  solutionfinder(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

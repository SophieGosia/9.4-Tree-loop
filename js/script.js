// 9.4 Loops - Exercise - tree

function drawTree (k) {
  for (var i = 0; i < k; i++) { //pion
    var star = '';
    for (var j = 0; j < i; j++) { // poziom
      star += '*';
    }
  console.log(star);
  }
}

drawTree(9);

function drawTreeMiddle (k) {
  for (var i = 0; i < k; i++) { //pion
    var star = '';
    var space = '';
    for(var x = 0 ; x < 2*i-1 ; x++){
      star += '*';
    }
    for (var j = k; j > i; j--) { // poziom
      space += ' ';
    }
  console.log(space+star+space+space+star);
  }
}

drawTreeMiddle(5);
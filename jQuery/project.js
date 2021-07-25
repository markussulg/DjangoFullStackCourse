var player1 = prompt("Player One: Enter your name, you will be Blue")
var player2 = prompt("Player Two: Enter your name, you will be Red")
var player1Color = "rgb(86, 151, 255)"
var player2Color = "rgb(237, 45, 73)"

var game_on = true
var table = $("table tr")

function reportWin(rowNum,colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}
// http://stackoverflow.com/questions/6139407/getting-td-by-index-with-jquery
function changeColor(rowIndex, colIndex, color) {
  return table.eq(rowIndex).find("td").eq(colIndex).find("button").css(
    "background-color", color)
}
function findColor(rowIndex, colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color')


}
function checkBottom(colIndex) {
  for (var i = 5; i >=0; i--) {
    if(findColor(i, colIndex) === "rgb(128, 128, 128)") { // color is gray
      return i;
    }
  }

}
function colorMatchCheck(one,two,three,four) {
  return (one === two && two===three && three===four &&
    one !== "rgb(128, 128, 128)" && one !== undefined)
}

// Check for Horizontal Wins
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(findColor(row,col), findColor(row,col+1) ,findColor(row,col+2), findColor(row,col+3))) {
        console.log('horiz');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Check for Vertical Wins
function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(findColor(row,col), findColor(row+1,col) ,findColor(row+2,col), findColor(row+3,col))) {
        console.log('vertical');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Check for Diagonal Wins
function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(findColor(row,col), findColor(row+1,col+1) ,findColor(row+2,col+2), findColor(row+3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else if (colorMatchCheck(findColor(row,col), findColor(row-1,col+1) ,findColor(row-2,col+2), findColor(row-3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}
// GAME LOGIC

//Start with Player 1
var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

$("h3").text(player1+" it is your turn, pick a column to drop in!")

$(".board button").on("click", function() {
  var col = $(this).closest("td").index();

  var bottomAvail = checkBottom(col);
  changeColor(bottomAvail, col, currentColor)
  if(horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
    $("h1").text(currentName+ " You have won!")
    $("h3").fadeOut("fast")
    $("h2").fadeOut("fast")
  } else {
    currentPlayer *= -1
    if(currentPlayer === 1) {
      currentName=player1
      currentColor = player1Color
    } else {
      currentName =player2
      currentColor = player2Color
    }
    $("h3").text(player1+" it is your turn, pick a column to drop in!")

}
})
console.log("Connected")

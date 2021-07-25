// Restart Game Button
var restart = document.querySelector("#btn");
// Squares
var squares = document.querySelectorAll("td");
//Clear Squares
function clearSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}
restart.addEventListener("click", clearSquares);
//Change square marker
function changeMarker() {
  if(this.textContent == "") this.textContent = "X";
  else if (this.textContent =="X") this.textContent="O";
  else this.textContent = "";
}
//For loop with event listeners
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeMarker);
}
console.log("Connected");

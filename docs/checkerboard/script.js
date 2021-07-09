let chessboard = document.querySelector('#chessboard');

for(let i=0; i<8; i++) {
  let k = i%2;  // switch pattern from black/white to white/black
  for (let j=0; j<8; j++) {
    let square = document.createElement('div');
    square.classList.add("square")
    if ((j+k)%2 == 0) {
      square.classList.add("black")
    } else {
      square.classList.add("white")
    }
    chessboard.append(square)
  }
}
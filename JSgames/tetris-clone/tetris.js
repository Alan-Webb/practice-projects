document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let squares = Array.from(document.querySelectorAll(".grid div"));

  const scoreDisplay = document.querySelector("#score");
  const startBtn = document.querySelector("#start-button");
  const width = 10;

  //Tetrominoes
  const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ];

  const zTetromino = [
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1]
  ];

  const tTetromino = [
    [1, width, width+1, width+2],
    [1, width+1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
  ];

  const oTetromino = [
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1]
  ];

  const iTetromino = [
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3]
  ];

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

  let currentPosition = 4;
  let currentRotation = 0;

  //random selection
  let randomSelect = Math.floor(Math.random() * theTetrominoes.length);
  let current = theTetrominoes[randomSelect][currentRotation];

  //draw tetromino
  function drawTetromino() {
    current.forEach(index => {
      squares[currentPosition + index].classList.add("tetromino");
    });
  }
  
  //undraw tetromino
  function undrawTetromino() {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove("tetromino");
    });
  }

  //tetromino descent
  timerId = setInterval(moveDown, 1000);

  function moveDown() {
    undrawTetromino();
    currentPosition += width;
    drawTetromino();
    freeze();
  }

  //freeze at bottom of screen
  function freeze() {
    if(current.some(index => squares[currentPosition + index + width].classList.contains("taken"))) {
      current.forEach(index => squares[currentPosition + index].classList.add("taken"));
      //spawn new tetromino
      randomSelect = Math.floor(Math.random() * theTetrominoes.length);
      current = theTetrominoes[randomSelect][currentRotation];
      currentPosition = 4;
      drawTetromino();
    }
  }
  //move left
  function moveLeft() {
    undrawTetromino();
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);
    if (!isAtLeftEdge) currentPosition -= 1;
    if(current.some(index => squares[currentPosition + index].classList.contains("taken"))) {
      currentPosition += 1;
    }
    drawTetromino();
  }





});
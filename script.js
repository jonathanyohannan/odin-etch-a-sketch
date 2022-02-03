// fill container with divs (starts as 16x16 grid)
const gridContainer = document.querySelector("#grid-container");
for (let i = 0; i < 256; i++) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("grid-square");
  gridContainer.appendChild(newSquare);
}

// add hover effect to each square
const gridSquares = document.querySelectorAll(".grid-square");
gridSquares.forEach((gridSquare) => {
  gridSquare.addEventListener("mouseenter", function (e) {
    e.target.style.background = "black";
  });
});

// clear grid, prompt user for new grid size
function clearGrid() {
  // prompt user for new grid size
  const newGridSize = prompt(
    "Enter the number of squares per side for the new grid (maximum of 100)."
  );

  // check if input is blank
  if (newGridSize === null) {
    return;
  }

  // check if input is invalid
  if (
    isNaN(newGridSize) === true ||
    newGridSize % 1 !== 0 ||
    newGridSize < 1 ||
    newGridSize > 100
  ) {
    alert("Invalid input.");
    return;
  }

  // remove old squares from grid
  const oldSquares = document.querySelectorAll(".grid-square");
  oldSquares.forEach((oldSquare) => {
    gridContainer.removeChild(oldSquare);
  });

  // resize grid
  gridContainer.style.cssText = `grid-template-columns: repeat(${newGridSize}, 1fr); grid-template-rows: repeat(${newGridSize}, 1fr);`;

  // fill grid with new squares
  for (let i = 0; i < newGridSize * newGridSize; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    newSquare.addEventListener("mouseenter", function (e) {
      e.target.style.background = "black";
    });
    gridContainer.appendChild(newSquare);
  }
}

const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener("click", clearGrid);

const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 256; i++) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("grid-square");
  gridContainer.appendChild(newSquare);
}

const gridSquares = document.querySelectorAll(".grid-square");
gridSquares.forEach((gridSquare) => {
  gridSquare.addEventListener("mouseenter", function (e) {
    e.target.style.background = "black";
  });
});

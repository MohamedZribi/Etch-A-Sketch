
// Create the grid
const container = document.getElementById("grid");
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).id = "grid-item";

    // ADD permanent hover effect
    cell.addEventListener('mousemove', () => {
      cell.setAttribute('style', 'background-color: yellow')
    });
  };
};





window.onload = makeRows(16, 16);


// resize the grid
const resize = document.getElementById('resize')
resize.addEventListener('click', () => {
  let cellCount = prompt("Enter the cell count you want: ");
  container.innerHTML = ""
  makeRows(Number(cellCount), Number(cellCount));

});




// console.log(gridItem)
const gridItem = document.querySelectorAll('#grid-item');
const eraze = document.getElementById('eraze');

eraze.addEventListener('click', () => {
  Array.from(gridItem).forEach(item => {
    item.setAttribute('style', 'background-color: none')
  });
});





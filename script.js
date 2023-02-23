




// creating a grid
const container = document.getElementById("grid");
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.setAttribute('style', 'background-color: blue;'); 

    cell.addEventListener('mouseenter', () => {
        cell.setAttribute('style', 'background-color: red;');    
      });
       

  };
};

makeRows(50, 50);








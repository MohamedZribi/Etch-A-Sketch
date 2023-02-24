// Return random color
function returnRandomColor(){
  let colors = ["blue", "red", "green", "yellow", "purple", "orange"]
  return randomColor = colors[Math.floor(Math.random()*colors.length)];
};

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
    cell.setAttribute('style', `background-color: ${returnRandomColor()};`)

    });
  };
};



// default grid on window load
makeRows(16, 16);


// Eraze function 
function erazeGrid() {
  const gridItems = document.querySelectorAll('[id=grid-item]');
  const eraze = document.getElementById('eraze');
  eraze.addEventListener('click', () => {
    gridItems.forEach(function(item) {
      item.setAttribute('style', 'background-color: none');    
    });
  
  });
};

erazeGrid()


// resize the grid
const resize = document.getElementById('resize')
resize.addEventListener('click', () => {
  container.innerHTML = ""
  let cellCount = prompt("Enter the cell count you want beteen 1 and 100: ");
  if((cellCount === null) || (cellCount > 100) || (cellCount < 1) ) {
    alert("The cell count should be between 1 and 100")
    cellCount = 16;
  };
  makeRows(Number(cellCount), Number(cellCount));
  erazeGrid()

});



// Add dynamic year change to footer
window.onload = function(){
  let year = new Date().getFullYear()      
  document.getElementById('footer').innerHTML = `Copyright © ${year}`;
};









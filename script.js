 
 const container = document.querySelector(".container");
 const grid = [];
 let counter = 1;

 function createGrid(columnCount, rowCount) {
   //creates all columns and assigns them a class to make them targetable by CSS
   for (let x = 0; x < columnCount; x++) {
     grid[x] = []; 
     const col = document.createElement("div");
     col.textContent = "";
     col.classList.add("col");
     container.appendChild(col);

    //creates all rows within columns and assigns them a class to make them targetable by CSS
     for (let y = 0; y < rowCount; y++) {
        grid [x][y] = " ";
        const row = document.createElement("div");
        row.textContent = " ";
        row.classList.add("row");
        col.appendChild(row);
        hover(row);
     }
   }
 }


 function hover (item) {
    item.addEventListener( "mouseover", 
        () => item.style = "background-color: black" );
 }


createGrid(16, 16);

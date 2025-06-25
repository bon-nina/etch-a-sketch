 
 const container = document.querySelector(".container");
 const newSketch = document.querySelector(".newSketch");
 let counter = 1;

 function createGrid(columnCount, rowCount) {
    grid = [];
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
        hover(row); //targets individual array for drawing
     }
   }
 }


 function hover (item) {
    item.addEventListener( "mouseover", 
        () => item.style = "background-color: black" );
 }


createGrid(16, 16); // default grid size

//variable grid size
newSketch.addEventListener("click", () => {  
   let newGrid = prompt("Enter grid size up to 100:");
   if (newGrid > 100) {
      alert("invalid input - set grid size to 100");
      newGrid = 100;
   }
   container.innerHTML = ""; //clears grid before creating a new one
   createGrid(newGrid,newGrid);
});
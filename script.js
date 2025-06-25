 
 const container = document.querySelector(".container");
 const newSketch = document.querySelector(".newSketch");


 //setting colors
 let color = "black";
 const eraser = document.querySelector(".eraser");
 eraser.addEventListener("click", () => color = "eraser");
 const random = document.querySelector(".rainbow");
 random.addEventListener("click", () => color = "rainbow");
 const black = document.querySelector(".black");
 black.addEventListener("click", () => color = "black");
 const gradient = document.querySelector(".gradient");
 gradient.addEventListener("click", () => color = "gradient");


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
        row.style.backgroundColor = "hsl(0,0.00%,100.00%)";
        draw(row); //targets individual array for drawing
     }
   }
 }


 function draw(item) {
   item.addEventListener( "mouseover", () => {
      if (color === "rainbow") {
         item.style.backgroundColor = RGB();
      }
      else if (color === "gradient") {
         let newColor = gradientColor(item.style.backgroundColor);
         item.style.backgroundColor = newColor;
      }
      else if (color === "eraser") {
         item.style.backgroundColor = "hsl(0,0.00%,100.00%)";
      }
      else {
         item.style.backgroundColor = "hsl(0,0.00%,00.00%)";
      }
   });
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


function RGB () {
   const a = Math.floor(Math.random() * 360);
   const b = Math.floor(Math.random() * 100);
   const c = Math.floor(Math.random() * 100);
   const randomColor = "hsl(" + a + "," + b + "%," + c + "%)";
   return randomColor;
}


function gradientColor(current) {
   console.log(current);
   if (current == "rgb(255, 255, 255)"){
      return "hsl(0,0.00%,90.00%)";
   }
   else if (current == "rgb(230, 230, 230)") {
      return "hsl(0, 0.00%, 80.00%)";
   }
   else if (current == "rgb(204, 204, 204)") {
      return "hsl(0, 0.00%, 70.00%)";
   }
   else if (current == "rgb(179, 179, 179)") {
      return "hsl(0, 0.00%, 60.00%)";
   }
   else if (current == "rgb(153, 153, 153)") {
      return "hsl(0, 0.00%, 50.00%)";
   }
   else if (current == "rgb(128, 128, 128)") {
      return "hsl(0, 0.00%, 40.00%)";
   }
   else if (current == "rgb(102, 102, 102)") {
      return "hsl(0, 0.00%, 30.00%)";
   }
   else if (current == "rgb(77, 77, 77)") {
      return "hsl(0, 0.00%, 20.00%)";
   }
   else if (current == "rgb(51, 51, 51)") {
      return "hsl(0, 0.00%, 10.00%)";
   }
   else { 
      return "hsl(0, 0.00%, 0.00%)";
   }
}


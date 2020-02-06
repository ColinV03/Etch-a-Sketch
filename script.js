//from SO: 

//const container = document.getElementById("container");
//
//function makeRows(rows, cols) {
//  container.style.setProperty('--grid-rows', rows);
//  container.style.setProperty('--grid-cols', cols);
//  for (c = 0; c < (rows * cols); c++) {
//    let cell = document.createElement("div");
//    cell.innerText = (c + 1);
//    container.appendChild(cell).className = "grid-item";
//  };
//};
//
//makeRows(16, 16);



//grid function that takes value from user input, and creates a grid.
//non functional. 

let v = prompt("How many rows ya want!?");
// definition section: 
let container = document.querySelector('#container');
let clearResize = document.querySelector('#clearResize');

grid(v);

function grid(v) {
  
  
   var area = v * v;

    //Sets styles and size for big container
    container.style.gridTemplateRows = `repeat(${v}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${v}, 1fr)`;
  
  
    for(let i = 0;  i < area; i++){
            let divAdded = document.createElement("div");
            divAdded.className = 'newDiv';
            container.appendChild(divAdded);
            console.log("divadded")
    }

    clearResize.addEventListener('click', function() {
        reset();
    });

}


//resize function
function reset() {
    let divsDelete = document.getElementsByClassName("newDiv");
    while(divsDelete.length > 0){
        divsDelete[0].parentNode.removeChild(divsDelete[0])
    }
   
    number = prompt("How many boxes ya want!?")
    grid(number);
}


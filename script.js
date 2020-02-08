


// definition section: 
let container = document.querySelector('.container');
let divAdded = document.createElement('div');
let clearResize = document.querySelector('#clearResize');
let targetDiv = document.getElementsByClassName('newDiv'); 
                          

//main prompt
let v = prompt("How many rows ya want!?");


//initial function call

grid(v);

function grid(v) {
  
    let area = v * v;

    //Sets styles and size for big container
    container.style.gridTemplateRows = `repeat(${v}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${v}, 1fr)`;
  
    clearResize.addEventListener('click', function() {
        reset();
        console.log("Cleared")
    });
  
  
    for(let i = 0;  i < area; i++){
        let divAdded = document.createElement('div');
        divAdded.className = "newDiv";
        divAdded.addEventListener("mouseover", function() {
          this.style.backgroundColor = "black";
          console.log("Cell Drawn");
        });
        container.appendChild(divAdded);
        console.log("divadded");
    }
    

}


//resize function
function reset() {

    while(targetDiv.length > 0){
        targetDiv[0].parentNode.removeChild(targetDiv[0]);
    }
   
    number = prompt("How many boxes ya want!?");
    grid(number);
}



const body = document.querySelector("body");
const gridContainer = document.querySelector('.grid-container');
const button = document.createElement("button");
const colorButton = document.createElement("button");
const clearButton = document.createElement("button");
const buttonDiv = document.createElement("div");
const buttonGridDiv = document.createElement("div");
const NEON_GREEN_COLOR = '#ACE1AF';

button.textContent = 'Click For Customizing';
button.setAttribute("id", "size-btn");
buttonDiv.appendChild(button);

colorButton.textContent = "Change Color";
button.setAttribute("id", "color-btn");
buttonDiv.appendChild(colorButton);

clearButton.textContent = "Clear Grid";
clearButton.setAttribute("id", "clear-btn");
buttonDiv.appendChild(clearButton);

buttonGridDiv.setAttribute("class", "grid-btn-container");
body.appendChild(buttonGridDiv);

buttonDiv.setAttribute("class", "btn-container");
buttonGridDiv.appendChild(buttonDiv);

buttonGridDiv.appendChild(gridContainer);

let userSquareInput = 16;   // default value
let color = NEON_GREEN_COLOR;
let containerSize = 590;


function gridDivsCreation(color, numOfSquare)
{
    gridContainer.innerHTML = '';   // empty the grid container before creating new grid
    gridContainer.style.width = `${containerSize}px`;
    gridContainer.style.height = `${containerSize}px`;
    gridContainer.style.border = '3px solid black';

    for(let i = 1; i <= numOfSquare*numOfSquare; i++)
        {
            let hoverCount = 0;
            let currenOpacity = 0.1;
            let maxOpacity = 1;
            const increment = 0.1;
            // let currentBrightness = 1;
        
            const gridDiv = document.createElement("div");
            gridDiv.setAttribute("class", "grid-item");
            gridDiv.style.width =  `${containerSize/numOfSquare}px`;
            gridDiv.style.height = `${containerSize/ numOfSquare}px`;
            gridContainer.appendChild(gridDiv);
        
            gridDiv.addEventListener('mouseover', () => {
        
                gridDiv.style.backgroundColor = color;
                hoverCount++;
                console.log('hoverCount: ', hoverCount);
                
                // make it darker on every hover
                currenOpacity = currenOpacity + increment;
                if(currenOpacity  > maxOpacity)
                {
                    currenOpacity = maxOpacity;
                }
        
                gridDiv.style.opacity = `${currenOpacity}`
        
                if(hoverCount > 9)
                {
                    gridDiv.style.backgroundColor = color;
                    hoverCount = 0;
                }
            })
        
        }
}


function handleCustomizing()
{
    userSquareInput = prompt("Enter the number of squares you want per side for the new grid, should be less than 100");

    while(userSquareInput > 100 || (userSquareInput == null) || (userSquareInput === ''))
    {
        userSquareInput = prompt("Enter a valid input");
    }

    console.log('userSquareInput: ', userSquareInput);
    gridDivsCreation(color, userSquareInput);

}

function colorToHex(userColor)
{
    const colors = {
        black: "#000000",
        red: "#FF0000",
        lime: "#00FF00",
        maroon: "#800000",
        teal: "#008080",
    };

    return colors[userColor.toLowerCase()] || "Invalid color name";

}

function handleColorChange()
{
    const userSelColor = prompt("Choose a color between : black, red, lime, maroon or teal");
    color = colorToHex(userSelColor);
    console.log('userSquareInput: ', userSquareInput);

    if(color !== "Invalid color name")
    {
        gridDivsCreation(color, userSquareInput); 
    }
    else
    {
        alert("Entered an Invalid color");
    }

}

function handleClearGrid()
{
   gridDivsCreation(color, userSquareInput);
}

button.addEventListener('click', handleCustomizing);
colorButton.addEventListener('click',  handleColorChange);
clearButton.addEventListener('click', handleClearGrid);

// initial grid creation with default values
gridDivsCreation(color, userSquareInput);

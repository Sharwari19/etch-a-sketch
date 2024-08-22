const body = document.querySelector("body");
const gridContainer = document.querySelector('.grid-container');
const button = document.createElement("button");
const colorButton = document.createElement("button");
const buttonDiv = document.createElement("div");
const NEON_GREEN_COLOR = '#ACE1AF';

buttonDiv.setAttribute("class", "btn-container");
body.appendChild(buttonDiv);

button.textContent = 'Click For Customizing';
button.setAttribute("id", "color-btn");
buttonDiv.appendChild(button);

colorButton.textContent = "Change Color";
button.setAttribute("id", "size-btn");
buttonDiv.appendChild(colorButton);


function gridDivsCreation(color = NEON_GREEN_COLOR)
{
    gridContainer.innerHTML = '';
    gridContainer.style.width = '500px';
    gridContainer.style.height = '500px';
    
    for(let i = 1; i <= 256; i++)
        {
            let hoverCount = 0;
            let currenOpacity = 0.1;
            let maxOpacity = 1;
            const increment = 0.1;
            // let currentBrightness = 1;
        
            const gridDiv = document.createElement("div");
            gridDiv.setAttribute("class", "grid-item");
            gridContainer.appendChild(gridDiv);
        
            gridDiv.addEventListener('mouseover', () => {
        
                gridDiv.style.backgroundColor = color;
                hoverCount++;
                console.log('hoverCount: ', hoverCount);
        
                // currentBrightness = currentBrightness - decrement;
                // if(currentBrightness < 0.1)
                // {
                //     currentBrightness = 0.1;
                // }
                // gridDiv.style.filter = `brightness(${currentBrightness})`;
        
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

let userInput = '';
let containerWidth = 500;
let containerHeight = 500;


function handleCustomizing()
{
    userInput = prompt("Enter the number of squares you want per side for the new grid, should be less than 100");

    while(userInput > 100 || (userInput == null) || (userInput === ''))
    {
        userInput = prompt("Enter a valid input");
    }
    console.log('userInput: ', userInput);

    gridContainer.innerHTML = '';
    gridContainer.style.width = '500px';
    gridContainer.style.height = '500px';
    
    for(let i = 1; i <= userInput*userInput; i++)
    {
        let hoverCount = 0;
        let currenOpacity = 0.1;
        let maxOpacity = 1;
        const increment = 0.1;
        // let currentBrightness = 1;

        const newGridDiv = document.createElement("div");
        newGridDiv.setAttribute("class", "new-item");
        newGridDiv.style.width = `${containerWidth/userInput}px`;
        newGridDiv.style.height = `${containerWidth/userInput}px`;
        gridContainer.appendChild(newGridDiv);
        console.log('box-width-height ', containerWidth/userInput);
        

        newGridDiv.addEventListener('mouseover', () => {
            newGridDiv.style.backgroundColor = NEON_GREEN_COLOR;
            hoverCount++;
            console.log('hoverCount: ', hoverCount);

            // currentBrightness = currentBrightness - decrement;
            // if(currentBrightness < 0.1)
            // {
            //     currentBrightness = 0.1;
            // }
            // newGridDiv.style.filter = `brightness(${currentBrightness})`;

            currenOpacity = currenOpacity + increment;
            if(currenOpacity  > maxOpacity)
            {
                currenOpacity = maxOpacity;
            }

            newGridDiv.style.opacity = `${currenOpacity}`

            if(hoverCount > 9)
            {
                newGridDiv.style.backgroundColor = NEON_GREEN_COLOR;
                hoverCount = 0;
            }
        })
    
    }

}

button.addEventListener('click', handleCustomizing);

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
    const hexValue = colorToHex(userSelColor);
    gridDivsCreation(hexValue); 

}

colorButton.addEventListener('click',  handleColorChange);


gridDivsCreation();

const body = document.querySelector("body");
const gridContainer = document.querySelector('.grid-container');
const button = document.createElement("button");

for(let i = 1; i <= 256; i++)
{
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", "grid-item");
    gridContainer.appendChild(gridDiv);
    gridDiv.addEventListener('mouseover', () => {
        gridDiv.style.backgroundColor = '#006A4E';
    })

    gridDiv.addEventListener('mouseout', () => {
        gridDiv.style.backgroundColor = '#ACE1AF';
    })
}

body.appendChild(button);
button.textContent = 'Click For Customizing'
let userInput = '';
let containerWidth = 500;
let containerHeight = 500;

function handleCustomizing()
{
    userInput = prompt("Enter the number of squares you want per side for the new grid");
    if(userInput > 100)
    {
        userInput = prompt("Number of squares should be less than 100");
    }
    console.log('userInput: ', userInput);

    gridContainer.innerHTML = '';
    gridContainer.style.width = '500px';
    gridContainer.style.height = '500px';
    
    for(let i = 1; i <= userInput*userInput; i++)
    {
        const newGridDiv = document.createElement("div");
        newGridDiv.setAttribute("class", "new-item");
        newGridDiv.style.width = `${containerWidth/userInput}px`;
        newGridDiv.style.height = `${containerWidth/userInput}px`;
        gridContainer.appendChild(newGridDiv);
        console.log('box-width-height ', containerWidth/userInput);
        

        newGridDiv.addEventListener('mouseover', () => {
            newGridDiv.style.backgroundColor = '#006A4E';
        })
    
        newGridDiv.addEventListener('mouseout', () => {
            newGridDiv.style.backgroundColor = '#ACE1AF';
        })
    }
}

button.addEventListener('click', handleCustomizing);



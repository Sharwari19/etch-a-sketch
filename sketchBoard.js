const gridContainer = document.querySelector('.grid-container');

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


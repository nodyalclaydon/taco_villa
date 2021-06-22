const menuBoard = document.querySelector(".menu-entrees-container")

async function getMenu() {
    const data = await fetch("/taco_villa/menu.json")
    const entrees = await data.json()
    
    entrees.forEach(item => {
        menuBoard.innerHTML += `
        <div class="entree-item">
            <h2 class="entree-name">${item.entree}</h2>
            <p class="entree-price">${item.price}</p>
            <p class="entree-desc">${item.description}</p>
        </div>
        `
    })
}

getMenu()

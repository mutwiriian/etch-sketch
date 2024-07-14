const gridContainer = document.querySelector(".grid-container")
const btnEl = document.querySelector("button")
let gridItems = undefined;

btnEl.addEventListener("click", () => {
    let boxSize = parseInt(prompt("Enter dimension:"))
    gridContainer.textContent = ""
    for (let i = 1; i<= boxSize**2; i++){
        let gridEl = document.createElement("div")
        gridEl.textContent = `${i}`
        gridEl.classList.add("grid-item")
        gridContainer.appendChild(gridEl)
    }
    gridItems = Array.from(document.querySelectorAll(".grid-item"))

    gridItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`
        })
    })

})


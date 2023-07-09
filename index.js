let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")

function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    totalEl.textContent =  Number(totalEl.textContent) + count
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}







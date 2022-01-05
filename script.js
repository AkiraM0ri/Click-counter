const cliques = document.querySelector('#btn-click')
const resetClick = document.querySelector('#reset-click')
const res = document.querySelector('#res')

count = 0

function clickCount(){
    count += 1
    res.textContent = count
}
function reset() {
    count = 0
    res.textContent = count
}

cliques.addEventListener('click', clickCount)
resetClick.addEventListener('click', reset)
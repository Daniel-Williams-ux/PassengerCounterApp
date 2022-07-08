let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0;
console.log(countEl)

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr;
    console.log(count);
}
// Google:
// innerText alternative mdn

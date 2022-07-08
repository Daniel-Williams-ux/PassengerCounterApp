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
    countEl.textContent = 0;
    count = 0;  //JS keeps track of our previous count hence the need to reset count to 0
}

const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el")
let counter = 0;
const savedEntries = [];


function increment() {
  counter += 1;
  countEl.innerText = counter
}

function save() {
  savedEntries.push(counter)
  const savedEntriesString = savedEntries.join("-");
  saveEl.innerText = `Previous entires: ${savedEntriesString}`;
  counter = 0;
  countEl.innerText = counter;
}
let myLeads = JSON.parse(localStorage.getItem("myLeads")) || []
const inputEl = document.getElementById("input--el")
const inputBtn = document.getElementById("input--btn")
const deleteBtn = document.getElementById("delete--btn")
const saveTabBtn = document.getElementById("save-tab--btn")
const ulEl = document.getElementById("ul--el")


if (myLeads) {
  render(myLeads)
}

function render(leads) {
  let listItems = "";
  leads.forEach(elem => (
    listItems += `
    <li>
    <a target="_blank" href="${elem}">
    ${elem}
    </a>
    </li>`
    ))
    ulEl.innerHTML = listItems;
  }

  inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })

  deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear("myLeads")
    myLeads = []
    render(myLeads)
  })

  saveTabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads", JSON.stringify(myLeads))
      render(myLeads)
    })
  })
  
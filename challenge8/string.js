let items = [];

function addCustomItem() {
  const input = document.getElementById("itemInput");
  const newItem = input.value.trim();

  if (newItem === "") {
    alert("Please enter an item.");
    return;
  }

  items.push(newItem);
  input.value = ""; // clear input

  updateDisplay();
}

function showList() {
  alert("Your items: " + (items.length ? items.join(", ") : "No items yet."));
}

function updateDisplay() {
  const list = document.getElementById("itemList");
  list.innerHTML = "";
  for (let item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }
}

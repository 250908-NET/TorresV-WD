let items = [];

function addCustomItem() {
  const input = document.getElementById("itemInput");
  const newItem = input.value.trim();

  if (newItem === "") {
    showToast(" Please enter an item.");
    return;
  }

  items.push(newItem);
  input.value = "";
  updateDisplay();
  showToast(` Added: ${newItem}`);
}

function showList() {
  if (items.length === 0) {
    showToast(" No items yet!");
  } else {
    showToast(" Items: " + items.join(", "));
  }
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

// Toast function
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000); // hide after 3 seconds
}

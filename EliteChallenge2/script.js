let items = [];

function addCustomItem() {
  const input = document.getElementById("itemInput");
  const newItem = input.value.trim();

  if (newItem === "") {
    showToast("Please enter an item.");
    return;
  }

  items.push(newItem);
  input.value = "";
  updateDisplay();
  showToast(`Added: ${newItem}`);
}

function deleteItem(index) {
  const removed = items.splice(index, 1);
  updateDisplay();
  showToast(`Removed: ${removed}`);
}

function clearList() {
  if (items.length === 0) {
    showToast("List is already empty!");
    return;
  }
  items = [];
  updateDisplay();
  showToast("Cleared all items!");
}

function updateDisplay() {
  const list = document.getElementById("itemList");
  list.innerHTML = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    const delBtn = document.createElement("button");
    delBtn.textContent = "x";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => deleteItem(index);

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Toast function
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

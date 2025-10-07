let items = [];

function addItem(item) {
  items.push("Item" + (items.length + 1));
  alert("Added: Item " + items.length);
}

function showList() {
  alert("Current items: " + items.join(", "));
}

// Select the element with id "target"
const targetElement = document.getElementById("target");

// Array of items to add
const items = ["First item", "Second item", "Third item"];

// Loop through the items and create list elements dynamically
items.forEach((itemText) => {
  const listItem = document.createElement("li"); // Create <li> element
  listItem.textContent = itemText; // Set text content
  listItem.classList.add("my-item"); // Add the class for styling
  targetElement.appendChild(listItem); // Append to the target element
});

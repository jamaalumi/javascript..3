'use strict';

// Array of names
const names = ['John', 'Paul', 'Jones'];

// Select the element with id "target"
const targetElement = document.getElementById('target');

// Use a for-loop to generate list items
let listHTML = '';
for (let i = 0; i < names.length; i++) {
  listHTML += `<li>${names[i]}</li>`; // Append each name as a list item
}

// Set the innerHTML of the target element
targetElement.innerHTML = listHTML;

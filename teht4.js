'use strict';

// Array of student objects
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

// Select the target element
const targetElement = document.getElementById('target');

// Use a for-loop to create <option> elements
students.forEach((student) => {
  // Create an <option> element
  const optionElement = document.createElement('option');

  // Set the value attribute and text content
  optionElement.value = student.id;
  optionElement.textContent = student.name;

  // Append the <option> element to the <select> element
  targetElement.appendChild(optionElement);
});

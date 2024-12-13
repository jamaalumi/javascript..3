'use strict';

// Select the trigger and target elements
const trigger = document.getElementById('trigger');
const target = document.getElementById('target');

// Add mouseover event to change the image to picB.jpg
trigger.addEventListener('mouseover', () => {
  target.src = 'img/picB.jpg';
});

// Add mouseout event to change the image back to picA.jpg
trigger.addEventListener('mouseout', () => {
  target.src = 'img/picA.jpg';
});

'use strict';

// Updated picArray data with uploaded images
const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg',
    },
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description: 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut.',
    image: {
      large: 'img/pic2.jpg',
      medium: 'thumbnails/pic2.jpg',
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description: 'Phasellus imperdiet nunc tincidunt molestie vestibulum.',
    image: {
      large: 'img/pic3.jpg',
      medium: 'thumbnails/pic3.jpg',
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description: 'Duis sodales enim eget leo condimentum vulputate.',
    image: {
      large: 'img/pic4.jpg',
      medium: 'thumbnails/pic4.jpg',
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description: 'Sed vel velit ante. Aenean quis viverra magna.',
    image: {
      large: 'img/pic5.jpg',
      medium: 'thumbnails/pic5.jpg',
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description: 'Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl.',
    image: {
      large: 'img/pic6.jpg',
      medium: 'thumbnails/pic6.jpg',
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: {
      large: 'img/pic7.jpg',
      medium: 'thumbnails/pic7.jpg',
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description: 'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt.',
    image: {
      large: 'img/pic8.jpg',
      medium: 'thumbnails/pic8.jpg',
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description: 'Phasellus imperdiet nunc tincidunt molestie vestibulum.',
    image: {
      large: 'img/pic9.jpg',
      medium: 'thumbnails/pic9.jpg',
    },
  },
];

// Select the target section
const section = document.getElementById('pictures');

// Loop through the picArray and create articles
picArray.forEach((pic) => {
  // Create the article element
  const article = document.createElement('article');
  article.classList.add('card');

  // Create the heading
  const heading = document.createElement('h2');
  heading.textContent = pic.title;
  article.appendChild(heading);

  // Create the figure and add image and caption
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  img.src = pic.image.medium;
  img.alt = pic.title;
  figure.appendChild(img);

  const figcaption = document.createElement('figcaption');
  figcaption.textContent = pic.caption;
  figure.appendChild(figcaption);

  article.appendChild(figure);

  // Add description
  const paragraph = document.createElement('p');
  paragraph.textContent = pic.description;
  article.appendChild(paragraph);

  // Append the article to the section
  section.appendChild(article);
});

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

// Створюємо скрипт для створення галереї зображень на основі масиву даних.
const gallery = document.querySelector('ul.gallery'); 

// Створюємо масив елементів <li> з вкладеними <img>
const galleryItems = images.map(({ url, alt }) => {
  // Створюємо <li> елемент
  const li = document.createElement('li'); 
  // Створюємо <img> елемент
  const img = document.createElement('img'); 
  img.src = url; 
  img.alt = alt; 
  li.appendChild(img); // Додаємо <img> в <li>
  return li;
});

// Додаємо всі <li> в ul.gallery за одну операцію
gallery.append(...galleryItems);

gallery.style.display = 'flex';
gallery.style.listStyleType = 'none';


galleryItems.forEach(item => {
  item.style.margin = '0 10px'; 
  item.style.display = 'block';
  
});



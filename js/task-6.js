const controls = document.getElementById('controls');
  const input = controls.querySelector('input');
  const createBtn = controls.querySelector('[data-create]');
  const destroyBtn = controls.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';  // очищаємо значення в input
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

  destroyBtn.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    destroyBoxes(); // Очищуємо попередні елементи перед додаванням нових

    const fragment = document.createDocumentFragment();
    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = '5px';
      fragment.appendChild(box);
      boxSize += 10; // збільшуємо розмір для наступного елемента
    }

    boxesContainer.appendChild(fragment);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }








  

const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', () => {
    // Отримуємо значення інпуту і видаляємо пробіли по краях
    const trimmedName = nameInput.value.trim();

    // Перевіряємо, чи значення не порожнє після обрізання пробілів
    nameOutput.textContent = trimmedName !== '' ? trimmedName : 'Anonymous';
  });
const depositAmount = prompt("Введіть суму вкладу:"); // сума вкладу
const interestRate = 0.05; // процентна ставка депозиту 5% річних
const months = 2; // термін вкладу в місяцях

const interestAmount = depositAmount * interestRate * (months / 12); // розраховуємо нараховані відсотки
// Формула: сума нарахованих відсотків = сума вкладу * процентна ставка * (термін вкладу в місяцях / 12)

alert(`На ваш вклад нараховано ${interestAmount.toFixed(2)} грн. відсотків.`); // виводимо результат

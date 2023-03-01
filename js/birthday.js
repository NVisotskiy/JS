const currentYear = new Date().getFullYear();
const birthYear = prompt("У якому році ви народилися?");

const age = currentYear - birthYear;

alert(`Вам ${age} років!`);

const { format, differenceInCalendarMonths } = require("date-fns");

// FORMATA A DATA
const formattedDate = format(new Date(), "dd/MM/yyyy");
console.log(formattedDate);

// MESES DE DIFERENÇA
const difference = differenceInCalendarMonths(
  new Date(2025, 9, 20),
  new Date(2024, 9, 20)
);
// console.log(difference);

/*  TODO: Exercise (04)
    write a JavaScript program to get the current date
    Expected Output:
    dd-mm-yyyy, dd/mm/yyyy
*/

// newDate()

const newDate = (date) => {
  date = new Date();

  today = today.getDate();
  month = month.getMonth();
  year = year.getFullYear();

  return `${today}-${month}-${year} , ${today}/${month}/${year}`;
};

console.lof(newDate());

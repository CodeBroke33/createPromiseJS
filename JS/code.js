let myPromise = new Promise((resolve, reject) => {
    let number1 = parseFloat(prompt("Enter Number 1"));
    let number2 = parseFloat(prompt("Enter Number 2"));
  
    if (!isNaN(number1) && !isNaN(number2)) {
      resolve(`${number1} + ${number2} = ${number1 + number2}`);
    } else {
      let errorMsg = '';
      if (isNaN(number1) && isNaN(number2)) {
        errorMsg = `Both ${number1} and ${number2} are not numbers`;
      } else if (i(number1)) {
        errorMsg = `${number1} is not a number`;
      } else {
        errorMsg = `${number2} is not a number`;
      }
      reject(errorMsg);
    }
  });
  
  myPromise
    .then(completed => alert(completed))
    .catch(rejected => alert(rejected));
  
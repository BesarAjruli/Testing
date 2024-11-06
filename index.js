function capitalized(value) {
  let uppercaseString = value.charAt(0).toUpperCase();
  uppercaseString = uppercaseString + value.slice(1);
  return uppercaseString;
}

function reverseString(value) {
  let lengthOfString = value.length;
  let reversedString = "";
  let i = 0;

  while (lengthOfString > 0) {
    i = lengthOfString - 1;
    reversedString = reversedString.concat(value[i]);

    lengthOfString--;
  }
  return reversedString;
}

const calculator = {
  sum: function sum(num1, num2) {
    return num1 + num2;
  },

  substract: function substract(num1, num2) {
    return num1 - num2;
  },

  multiply: function multiply(num1, num2) {
    return num1 * num2;
  },

  divide: function divide(num1, num2) {
    return num1 / num2;
  },
};

function caesarCipher(value, shift) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let cipheredString = "";
  var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/;

  for (let x = 0; x < value.length; x++) {
    for (let i = 0; i < alphabet.length; i++) {
        if(value[x].match(format) 
    ){ 
        if (cipheredString[cipheredString.length - 1] !== value[x]) {
            cipheredString = cipheredString.concat(value[x]);
        }
    }
      if (value[x] === alphabet[i]) {
        if (shift + i > 25) {
          cipheredString = over25(value, alphabet);
        } else cipheredString = cipheredString.concat(alphabet[i + shift]);
      }
      if (value[x] === value[x].toUpperCase()) {
        if (value[x].toLowerCase() === alphabet[i]) {
          if (shift + i > 25) {
            cipheredString = over25(value, alphabet);
          } else{
            cipheredString = cipheredString.concat(
              alphabet[i + shift].toUpperCase(),
            );
        }
        }
      }
    }
  }
  return cipheredString;
}
function over25(value, alphabet) {
  let string = "";
  for (let i = 0; i < value.length; i++) {
    string = string.concat(alphabet[i]);
  }
  return string;
}

function analyzeArray(array){
    let sum = 0
    let max = 0
    let min = 10

    array.forEach((element, index) => {
        sum += element

            if(element > max){
                max = element
            }
            if(element < min){
                min = element
            }
    });

    const analization = {
        average: sum / array.length,
        min: min,
        max: max,
        length: array.length
    }
    return analization
}

module.exports = { capitalized, reverseString, calculator, caesarCipher, analyzeArray };

const getNthElement = (index, array) => {
  return array[index % array.length]
}

const arrayToCSVString = array => {
  return array.toString()
};

function csvStringToArray(string) {
  return string.split(',')
}

const addToArray = (element, array) => {
  array.push(element)
};

const addToArray2 = (element, array) => {
  return array.concat(element)
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1)
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString())
};

const uppercaseWordsInArray = strings => {
  return strings.map(element => {
    return element.toUpperCase()
  })
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};

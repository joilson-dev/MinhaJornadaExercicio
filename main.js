// Função 1 - compareTrue
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Função 2 - calcArea
function calcArea(base, height) {
  return (base * height) / 2;
}

// Função 3 - splitSentence
function splitSentence(phrase) {
  return phrase.split(" ");
}

// Função 4 - concatName
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Função 5 - footballPoints
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Função 6 - highestCount
function highestCount(numbers) {
  const maxNumber = Math.max(...numbers);
  return numbers.filter((num) => num === maxNumber).length;
}

// Função 7 - catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  const dist1 = Math.abs(mouse - cat1);
  const dist2 = Math.abs(mouse - cat2);

  if (dist1 < dist2) {
    return "cat1";
  } else if (dist2 < dist1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Função 8 - fizzBuzz
function fizzBuzz(numbers) {
  return numbers.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return "fizzBuzz";
    if (num % 3 === 0) return "fizz";
    if (num % 5 === 0) return "buzz";
    return "bug!";
  });
}

// Função 9 - encode
function encode(str) {
  const vowels = { a: "1", e: "2", i: "3", o: "4", u: "5" };
  return str
    .split("")
    .map((char) => vowels[char] || char)
    .join("");
}

// Função 9 - decode
function decode(str) {
  const numbers = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
  return str
    .split("")
    .map((char) => numbers[char] || char)
    .join("");
}

// Função 10 - techList
function techList(techs, name) {
  if (techs.length === 0) return "Vazio!";
  return techs.map((tech) => ({ tech, name }));
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

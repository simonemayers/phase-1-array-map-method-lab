const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(s => {
    const word = s.split(" ")
    console.log(word)
    const casedWord = word.map(s => s[0].toUpperCase() + s.slice(1))
    console.log(casedWord)
    return casedWord.join(" ")
  })
}
titleCased()
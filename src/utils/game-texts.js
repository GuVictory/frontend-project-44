const TEXTS = (rulesText) => ({
  rules: () => rulesText,
  correct: () => 'Correct!',
  question: (question) => `Question: ${question}`,
  yourAnswer: () => 'Your answer: ',
  congratulations: (name) => `Congratulations, ${name}!`,
  notCorrectAnswer: (answer, correctAnswer) => `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  tryAgain: (name) => `Let's try again, ${name}!`,
});

export default TEXTS;

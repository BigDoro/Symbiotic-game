const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const answersReview = document.getElementById("answers-review");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex, score;

const questions = [
  {
    question: "What type of relationship is mutualism?",
    answers: [
      { text: "Both species benefit", correct: true },
      { text: "One benefits, one harmed", correct: false },
      { text: "One benefits, one unaffected", correct: false },
      { text: "Neither benefits", correct: false }
    ]
  },
  {
    question: "Lichens are a symbiosis between fungi and ____?",
    answers: [
      { text: "Bacteria", correct: false },
      { text: "Algae", correct: true },
      { text: "Moss", correct: false },
      { text: "Plants", correct: false }
    ]
  },
  {
    question: "Clownfish and sea anemones share what type of symbiosis?",
    answers: [
      { text: "Commensalism", correct: false },
      { text: "Parasitism", correct: false },
      { text: "Mutualism", correct: true },
      { text: "Competition", correct: false }
    ]
  },
  {
    question: "Which insect has a mutualistic relationship with flowering plants?",
    answers: [
      { text: "Mosquito", correct: false },
      { text: "Bee", correct: true },
      { text: "Antlion", correct: false },
      { text: "Termite", correct: false }
    ]
  },
  {
    question: "Oxpecker birds on buffaloes show what relationship?",
    answers: [
      { text: "Parasitism", correct: false },
      { text: "Mutualism", correct: true },
      { text: "Competition", correct: false },
      { text: "Commensalism", correct: false }
    ]
  },
  {
    question: "Tapeworms living inside a human intestine is an example of?",
    answers: [
      { text: "Mutualism", correct: false },
      { text: "Parasitism", correct: true },
      { text: "Commensalism", correct: false },
      { text: "Predation", correct: false }
    ]
  },
  {
    question: "Which plant has a nitrogen-fixing relationship with Rhizobium bacteria?",
    answers: [
      { text: "Legumes", correct: true },
      { text: "Maize", correct: false },
      { text: "Rice", correct: false },
      { text: "Pine trees", correct: false }
    ]
  },
  {
    question: "Hermit crabs using empty snail shells is what type of relationship?",
    answers: [
      { text: "Mutualism", correct: false },
      { text: "Commensalism", correct: true },
      { text: "Parasitism", correct: false },
      { text: "Predation", correct: false }
    ]
  },
  {
    question: "What is the term for two species competing for the same resource?",
    answers: [
      { text: "Mutualism", correct: false },
      { text: "Parasitism", correct: false },
      { text: "Competition", correct: true },
      { text: "Commensalism", correct: false }
    ]
  },
  {
    question: "Cleaner fish eating parasites off bigger fish is an example of?",
    answers: [
      { text: "Commensalism", correct: false },
      { text: "Parasitism", correct: false },
      { text: "Mutualism", correct: true },
      { text: "Competition", correct: false }
    ]
  }
];

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  resultContainer.classList.add("hide");
  questionContainer.classList.remove("hide");
  currentQuestionIndex = 0;
  score = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(answer) {
  if (answer.correct) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setNextQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  questionContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
  scoreElement.innerText = score;
  showAnswers();
}

function showAnswers() {
  answersReview.innerHTML = "<h3>Correct Answers:</h3>";
  questions.forEach((q, index) => {
    const correct = q.answers.find(ans => ans.correct);
    const div = document.createElement("div");
    div.innerText = `${index + 1}. ${q.question} → ${correct.text}`;
    answersReview.appendChild(div);
  });
}

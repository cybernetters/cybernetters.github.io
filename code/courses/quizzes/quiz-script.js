// Question Bank
const questionBank = [
  {
    question: "How are things organized in a directory server?",
    answers: [
      { text: "By a hierarchical model of objects and containers", correct: true },
      { text: "By random allocation of user accounts", correct: false },
      { text: "By IP addresses and subnets", correct: false },
      { text: "By alphabetical sorting of usernames", correct: false }
    ]
  },
  {
    question: "In order to authenticate user accounts against AD, what must be done to the computer first?",
    answers: [
      { text: "Join it to the domain", correct: true },
      { text: "Install Active Directory on the computer", correct: false },
      { text: "Set up a local user account with the same username", correct: false },
      { text: "Connect the computer to the internet", correct: false }
    ]
  },
  {
    question: "What would you use if you wanted to set a default wallpaper background for all machines in your company, but still wanted users to be able to set their own wallpaper?",
    answers: [
      { text: "A preference", correct: true },
      { text: "A policy", correct: false },
      { text: "A registry key", correct: false },
      { text: "A group membership", correct: false }
    ]
  },
  // Add more questions here...
];

let selectedQuestions = []; // To store randomized questions
const numberOfQuestions = 3; // Number of questions per quiz

// Randomly shuffle and pick questions for this session
function getRandomQuestions() {
  const shuffled = questionBank.sort(() => Math.random() - 0.5);
  selectedQuestions = shuffled.slice(0, numberOfQuestions);
}

// Display a question based on its index
function displayQuestion(index) {
  const questionContainer = document.getElementById("question-container");
  const question = selectedQuestions[index];
  
  // Display the question text
  questionContainer.querySelector(".question-text").textContent = question.question;

  // Display answers as radio buttons
  const answerContainer = questionContainer.querySelector(".answers");
  answerContainer.innerHTML = ""; // Clear previous answers
  question.answers.forEach((answer, i) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="answer" value="${answer.correct}"> ${answer.text}`;
    answerContainer.appendChild(label);
  });
}

// Initialize randomized questions and display the first one
document.addEventListener("DOMContentLoaded", () => {
  getRandomQuestions(); // Get randomized questions
  displayQuestion(0); // Show the first question
});

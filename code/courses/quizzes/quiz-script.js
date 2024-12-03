let userScore = 0; // Track the user's current score
let askedQuestions = []; // Track already-asked questions
let currentQuestionIndex = 0; // Keeps track of the current question

// Function to get a random question that hasn't been asked
function getRandomQuestion() {
  const unaskedQuestions = questionBank.filter((_, index) => !askedQuestions.includes(index));
  if (unaskedQuestions.length === 0) {
    // If all questions have been asked, reset the pool
    askedQuestions = [];
    return getRandomQuestion(); // Get another random question
  }

  // Randomly select a question
  const randomIndex = Math.floor(Math.random() * unaskedQuestions.length);
  const selectedQuestionIndex = questionBank.indexOf(unaskedQuestions[randomIndex]);
  askedQuestions.push(selectedQuestionIndex);
  return questionBank[selectedQuestionIndex];
}

// Function to display a question
function displayQuestion() {
  const question = getRandomQuestion();
  const questionContainer = document.getElementById("question-container");

  // Display the question text
  questionContainer.querySelector(".question-text").textContent = question.question;

  // Display answers as radio buttons
  const answerContainer = questionContainer.querySelector(".answers");
  answerContainer.innerHTML = ""; // Clear previous answers
  question.answers.forEach((answer) => {
    const label = document.createElement("label");
    label.style.display = "block"; // Ensure each option is on a new line
    label.innerHTML = `<input type="radio" name="answer" value="${answer.correct}"> ${answer.text}`;
    answerContainer.appendChild(label);
  });

  // Clear feedback and disable "Next" button
  document.getElementById("feedback").textContent = "";
  document.getElementById("next-button").disabled = true;

  // Enable "Next" button once an answer is selected
  document.querySelectorAll('input[name="answer"]').forEach((input) => {
    input.addEventListener("change", () => {
      document.getElementById("next-button").disabled = false;
    });
  });

  // Update progress bar
  updateProgressBar();
}

// Calculate diminishing points
function calculatePoints(currentScore) {
  const maxScore = 100; // Maximum score
  const basePoints = 10; // Base points for a correct answer
  const diminishingFactor = 1 - currentScore / maxScore;
  return Math.ceil(basePoints * diminishingFactor);
}

// Check the user's answer
function checkAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  const feedback = document.getElementById("feedback");
  const nextButton = document.getElementById("next-button");

  if (!selected) {
    feedback.textContent = "Please select an answer!";
    feedback.style.color = "yellow";
    return;
  }

  const isCorrect = selected.value === "true";
  if (isCorrect) {
    const points = calculatePoints(userScore);
    userScore += points;
    feedback.textContent = `Correct! You earned ${points} points. Total Score: ${userScore}`;
    feedback.style.color = "lime";
  } else {
    feedback.textContent = "Incorrect. Try again!";
    feedback.style.color = "red";
  }

  // Update score dynamically
  document.getElementById("score-display").textContent = `Score: ${userScore}`;

  // Enable the "Next" button
  nextButton.disabled = false;

  // Save progress
  localStorage.setItem("quizScore", userScore);


  // Save progress
  localStorage.setItem("quizScore", userScore);

  // Enable the "Next" button
  document.getElementById("next-button").disabled = false;

  // Update live score display
  updateScoreDisplay();

}

// Navigate to the next question
function goToNextQuestion() {
  if (currentQuestionIndex < questionBank.length - 1) {
    currentQuestionIndex++;
    displayQuestion(); // Show the next question
  } else {
    endQuiz(); // End the quiz if no more questions remain
  }
}

// Update progress bar
function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / questionBank.length) * 100;
  document.querySelector(".progress-bar").style.width = `${progress}%`;
}

// Update live score display
function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("score-display");
  scoreDisplay.textContent = `Score: ${userScore}`;
}

// End the quiz and redirect to the results page
function endQuiz() {
  window.location.href = "results.html"; // Redirect to results page
}

// Initialize the first question
document.addEventListener("DOMContentLoaded", () => {
  displayQuestion();
  updateScoreDisplay();
});

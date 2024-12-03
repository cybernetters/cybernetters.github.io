let userScore = 0; // Track the user's current score
let askedQuestions = []; // Track already-asked questions

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
    label.innerHTML = `<input type="radio" name="answer" value="${answer.correct}"> ${answer.text}`;
    answerContainer.appendChild(label);
  });

  // Clear feedback and disable "Next" button
  document.getElementById("feedback").textContent = "";
  document.getElementById("next-button").disabled = true;
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

  // Enable the "Next" button
  nextButton.disabled = false;

  // Save progress
  localStorage.setItem("quizScore", userScore);
}

// End the quiz and redirect to the results page
function endQuiz() {
  window.location.href = "results.html"; // Redirect to results page
}

// Initialize the first question
document.addEventListener("DOMContentLoaded", displayQuestion);

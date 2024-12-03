let userScore = 0; // Track the user's current score
let askedQuestions = []; // Track already-asked questions
let currentQuestionIndex = 0; // Keeps track of the current question
let correctAnswersCount = 0; // Number of correct answers
let totalAnswersCount = 0; // Total answers given

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
  document.getElementById("check-answer-button").disabled = true;
  document.getElementById("check-answer-button").style.display = "block";
  document.getElementById("next-button").style.display = "none";

  // Enable "Next" button once an answer is selected
  document.querySelectorAll('input[name="answer"]').forEach((input) => {
    input.addEventListener("change", () => {
      document.getElementById("check-answer-button").disabled = false;
      //document.getElementById("check-answer-button").style.display = "block";
    });
  });

  // Update progress bar
  updateProgressBar();
}

// Calculate diminishing points for correct answers
function calculatePoints(currentScore) {
  const maxScore = 100; // Maximum possible score
  const basePoints = 10; // Base points for a correct answer
  const diminishingFactor = Math.max(0.1, 1 - currentScore / maxScore); // Ensure at least 10% scaling
  return Math.ceil(basePoints * diminishingFactor);
}

// Calculate penalty for wrong answers
function calculatePenalty(currentScore) {
  const penaltyFactor = 0.1; // Lose 10% of the current score
  const penalty = Math.ceil(currentScore * penaltyFactor); // Deduct based on current score
  return penalty > 0 ? penalty : 1; // Ensure at least 1 point is deducted
}

// Check the user's answer
function checkAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked'); // Get selected answer
  const feedback = document.getElementById("feedback");
  const answerButton = document.getElementById("check-answer-button");
  const nextButton = document.getElementById("next-button");

  // Check if an answer is selected
  if (!selected) {
    feedback.textContent = "Please select an answer!";
    feedback.style.color = "yellow";
    return; // Do not proceed if no answer is selected
  }

  const isCorrect = selected.value === "true"; // Determine if the selected answer is correct
  totalAnswersCount++; // Increment the total number of answers

  // Scoring logic
  if (isCorrect) {
    const points = calculatePoints(userScore); // Dynamically calculate points for correct answers
    userScore += points; // Add points to the user's score
    correctAnswersCount++; // Increment the count of correct answers
    feedback.textContent = `✅ Correct! You earned ${points} points. Total Score: ${userScore}`;
    feedback.style.color = "lime"; // Display feedback in green
  } else {
    const penalty = calculatePenalty(userScore); // Dynamically calculate penalty for wrong answers
    userScore = Math.max(0, userScore - penalty); // Subtract points and ensure score doesn't go below 0
    feedback.textContent = `❌ Incorrect! You lost ${penalty} points. Total Score: ${userScore}`;
    feedback.style.color = "red"; // Display feedback in red
  }

  // Update score and accuracy display dynamically
  updateScoreDisplay();

  // Enable the "Next" button
  answerButton.disabled = true;
  answerButton.style.display = "none";
  nextButton.style.display = "block";

  // Save progress to local storage
  localStorage.setItem("quizScore", userScore);
}


// Navigate to the next question
function goToNextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');
  const feedback = document.getElementById("feedback");

  // Check if an answer is selected
  if (!selected) {
    feedback.textContent = "Please select an answer!";
    feedback.style.color = "yellow";
    return; // Do not proceed if no answer is selected
  }

  //// Validate the answer
  //const isCorrect = selected.value === "true";
  //if (isCorrect) {
  //  feedback.textContent = `Correct! You earned ${points} points. Total Score: ${userScore}`;
  //  feedback.style.color = "lime";
  //} else {
  //  feedback.textContent = "Incorrect. Try again!";
  //  feedback.style.color = "red";
  //}

  //// Update score and progress
  //updateScoreDisplay();
  //localStorage.setItem("quizScore", userScore);

  // Move to the next question immediately
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

// Update live score and accuracy display
function updateScoreDisplay() {
  const accuracy = totalAnswersCount > 0 
    ? Math.round((correctAnswersCount / totalAnswersCount) * 100) 
    : 0; // Calculate accuracy as a percentage
  const scoreDisplay = document.getElementById("score-display");
  scoreDisplay.textContent = `Score: ${userScore} | Accuracy: ${accuracy}%`;
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

// Dynamically Update the Progress Bar
function setProgressBar(currentQuestion, totalQuestions) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  const progressBar = document.querySelector('.progress-bar');
  if (progressBar) {
    progressBar.style.width = `${progressPercentage}%`;
  }
}

// Initialize the Progress Bar
function initializeProgressBar() {
  const url = window.location.pathname;
  const currentQuestion = parseInt(url.match(/q(\d+)/)?.[1] || 1, 10); // Extract `q1`, `q2`, etc.
  const totalQuestions = window.totalQuestions || 3; // Default to 3 if not specified
  setProgressBar(currentQuestion, totalQuestions);
}

// Provide Feedback and Enable "Next"
function checkAnswer(questionId, correctAnswers) {
  const selected = document.querySelector(`input[name="${questionId}"]:checked`);
  const feedbackElement = document.getElementById('feedback');
  const nextButton = document.getElementById('next-button');

  if (!selected) {
    feedbackElement.textContent = "Please select an answer!";
    feedbackElement.style.color = "yellow";
    return; // Exit if no answer is selected
  }

  const userAnswer = selected.value;
  const correctAnswer = correctAnswers[questionId];

  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! Well done!";
    feedbackElement.style.color = "lime";
  } else {
    feedbackElement.textContent = "Incorrect. The correct answer is A preference.";
    feedbackElement.style.color = "red";
  }

  // Save the user's answer to localStorage
  localStorage.setItem(questionId, userAnswer);

  // Enable the "Next" button
  nextButton.disabled = false;
}

// Handle Navigation on "Next"
function goToNextPage(nextPage) {
  window.location.href = nextPage; // Navigate to the next page
}

// Initialize Progress Bar on Page Load
document.addEventListener('DOMContentLoaded', initializeProgressBar);


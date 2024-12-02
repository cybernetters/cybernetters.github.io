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

// Provide Feedback and Save Answer
function provideFeedback(questionId, correctAnswers) {
  const selected = document.querySelector(`input[name="${questionId}"]:checked`);
  const feedbackElement = document.getElementById('feedback');
  if (!selected) {
    feedbackElement.textContent = "Please select an answer!";
    feedbackElement.style.color = "yellow";
    return false;
  }

  const userAnswer = selected.value;
  const correctAnswer = correctAnswers[questionId];

  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! Well done!";
    feedbackElement.style.color = "lime";
  } else {
    feedbackElement.textContent = "Incorrect. Review the material and try again.";
    feedbackElement.style.color = "red";
  }

  // Save the user's answer
  localStorage.setItem(questionId, userAnswer);
  return true;
}

// Handle the "Next" Button Click
function nextQuestion(questionId, correctAnswers, nextPage) {
  if (provideFeedback(questionId, correctAnswers)) {
    setTimeout(() => {
      window.location.href = nextPage; // Redirect to the next question
    }, 2000); // Delay to show feedback
  }
}

// Initialize Progress Bar on Page Load
document.addEventListener('DOMContentLoaded', initializeProgressBar);

// Dynamically Update Progress Bar
function setProgressBar(currentQuestion, totalQuestions) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  const progressBar = document.querySelector('.progress-bar');
  if (progressBar) {
    progressBar.style.width = `${progressPercentage}%`;
  }
}

// Call this function on each quiz page
function initializeProgressBar() {
  // Define the current question and total questions
  // Update `currentQuestion` on each page accordingly
  const url = window.location.pathname;
  const currentQuestion = parseInt(url.match(/q(\d+)/)?.[1] || 1, 10); // Extract `q1`, `q2`, etc.
  const totalQuestions = 3; // Update if you have more questions
  setProgressBar(currentQuestion, totalQuestions);
}

// Initialize the progress bar when the page loads
document.addEventListener('DOMContentLoaded', initializeProgressBar);

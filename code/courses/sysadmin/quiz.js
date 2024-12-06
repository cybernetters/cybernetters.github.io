function endQuiz(quizId, score) {
    localStorage.setItem(quizId, score); // Save score to localStorage
    window.location.href = "results.html"; // Redirect to results page
}

  
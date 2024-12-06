function saveQuizScore(quizId, score) {
    localStorage.setItem(quizId, score); // Save the score using localStorage
    console.log(`Score saved for ${quizId}: ${score}`);
  }
  
  function endQuiz(quizId) {
    const score = calculateScore(); // Replace this with the actual score calculation logic
    saveQuizScore(quizId, score);
    alert(`Quiz complete! You scored: ${score}`);
  }
  
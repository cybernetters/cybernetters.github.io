function updateQuizScore(quizId, score) {
    const scoreElement = document.getElementById(quizId);
    if (scoreElement) {
    scoreElement.querySelector("h2").textContent = score;
    } else {
    console.error(`Quiz ID "${quizId}" not found.`);
    }
}

setTimeout(() => {
    updateQuizScore("quiz-directory-services-score", 250); // Update to 250 points
}, 2000)
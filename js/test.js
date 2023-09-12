// Function to calculate quiz results
function calculateResults() {
    const form = document.getElementById("quiz-form");
    const resultText = document.getElementById("result-text");
    
    // Replace with your own logic to calculate results
    // For simplicity, we'll assume the user got 2 out of 3 questions correct.
    const score = 2;
    const totalQuestions = 3;
    
    resultText.innerHTML = `You got ${score} out of ${totalQuestions} correct!`;
    
    // Show the popup
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}

// Handle form submission
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", calculateResults);

// Close the popup
const closePopup = document.getElementById("close-popup");
closePopup.addEventListener("click", function () {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
});

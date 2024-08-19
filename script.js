

document.querySelector(".quiz-submit").addEventListener("click", function() {
    let questions = document.querySelectorAll(".quiz-question");

    questions.forEach(question => {
        let quizOptions = question.querySelectorAll(".quiz-options input");
        let correctOption = question.querySelector('[id^="Correct"]'); // Find the correct option within the current question
        
        quizOptions.forEach(option => {
            if (option.checked) {
                if (option === correctOption) {
                    option.parentElement.style.backgroundColor = "green";
                } else {
                    option.parentElement.style.backgroundColor = "red";
                }
            }
        });
    });
});
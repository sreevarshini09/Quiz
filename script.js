document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".options-list li");

    options.forEach(option => {
        option.addEventListener("click", () => {
            const isCorrect = option.getAttribute("data-answer") === "correct";

            options.forEach(opt => {
                opt.classList.remove("correct", "incorrect");
                if (opt.getAttribute("data-answer") === "correct") {
                    opt.classList.add("correct");
                }
            });

            if (isCorrect) {
                option.classList.add("correct");
            } else {
                option.classList.add("incorrect");
            }
        });
    });
});


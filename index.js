function toggleAnswer(question) {
    const answer = question.nextElementSibling; // Get the next sibling (the answer)
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
const myForm = document.getElementById("techquiz");
const answers = ['b', 'a', 'c', 'b'];
let total = 0;
let answeredArray = [];
let totalDisplay = document.getElementById("score");
let resultBox = document.getElementById("result");

myForm.addEventListener('submit', function (event) {
    total = 0;
    event.preventDefault();
    checkAnswers();
})


function checkAnswers() {

    let userAnswers = document.querySelectorAll("input[type=radio]: checked");

    for (var i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i].value == answers[i]) {
            //push the wrong id into answered Array

            answeredArray.push({
                id: userAnswers[i].id,
                answer: 'incorrect'
            });
        }
    }

}

displayResult(total, answeredArray);


function displayResult(total, answeredArray) {

    totalDisplay.innerHTML = total;
    resultBox.style.display = "inline";

    for (var x = 0; x < answeredArray.length; x++) {
        if (answeredArray[x].answer == 'correct') {
            document.getElementById(answeredArray[x].id).nextElementSibling.classList.add("correct");

        } else if (answeredArray[x].answer == 'incorrect') {

            document.getElementById(answeredArray[x].id).nextElementSibling.classList.add("incorrect");
        }
    }

}
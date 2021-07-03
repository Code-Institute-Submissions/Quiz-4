// Questions compliment of W3 schools


let questionChoice = [

    {
        question: 'What does HTML stand for?',



        option: ['Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyper Text Modified Language', 'Hyper Test Markup Language', ],

        answer: 'Hyper Text Markup Language'

    },


    {
        question: 'What does CSS stand for?',

        option: ['Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets', ],

        answer: 'Cascading Style Sheets'

    },


    {
        question: 'Waht does JS stand for?',

        option: ['Java School', 'Java Source ', 'Java Script', 'Jason Script', ],

        answer: 'Java Script'

    },


    {
        question: 'What is Python?',

        option: ['A snake', 'A Programming language', 'A reptile', 'A coding language', ],

        answer: 'A Programming language'

    }


]


let question = document.getElementById("question");
let answers = Array.from(document.getElementByClassName('ans-text'));
let game = document.getElementById("game");

let score = document.getElementById("score");

let next = document.querySelector('.next');
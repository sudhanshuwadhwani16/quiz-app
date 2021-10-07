const quizDB = [
    {
        question: "Q1: What is fullform of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is fullform of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Colour Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is fullform of HTTP?",
        a: "HyperText Type Protocol",
        b: "HyperText Transfer Protocol",
        c: "HyperText Type Page",
        d: "HyperText Transfer Product",
        ans: "ans2"
    },
    {
        question: "Q4: What is fullform of JS?",
        a: "JavaScirpt",
        b: "JavaScene",
        c: "JavaScript",
        d: "JavaStall",
        ans: "ans3"
    },
    {
        question: "Q5: What is fullform of Ig?",
        a: "Instagarm",
        b: "Instagram",
        c: "Istagram",
        d: "Instagran",
        ans: "ans2"
    },
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let  score=0;
const showScore = document.querySelector('#Showscore');

const loadQuestion = () =>{
    question.innerHTML = quizDB[questionCount].question;
    option1.innerHTML = quizDB[questionCount].a;
    option2.innerHTML = quizDB[questionCount].b;
    option3.innerHTML = quizDB[questionCount].c;
    option4.innerHTML = quizDB[questionCount].d;
}

loadQuestion();


const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () =>{
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if(checkAnswer == quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} ✌ </h3>
        <button class="btn" id="plag"  onclick="location.reload()"> Play Again</button>
        `;
        showScore.classList.remove('scoreArea');

    }
});
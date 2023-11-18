const questions = [
    {
        question:"What is the name of the night journey and ascension of the Prophet Muhammad (SAW)?",
        answers:[
            {text: "Miraj" , correct: true},
            {text: "Isra" , correct: false},
            {text: "Hijrah" , correct: false},
            {text: "Tawaf"  , correct: false}
        ]
    },
    {
        question:"How many times a day do Muslims typically pray?",
        answers:[
            {text: "2 ", correct: false},
            {text: "5" , correct: true},
            {text: "4", correct: false},
            {text: "6" , correct: false}
        ]
    },
    {
        question:"What is the first revelation received by the Prophet Muhammad (SAW)?",
        answers:[
            {text: " Surah Al-Baqarah" , correct: false},
            {text: " Surah Al-Ikhlaas" , correct: false},
            {text: " Surah Al-Alaq" , correct: true},
            {text: " Surah Al-Yaseen" , correct: false}
        ]
    },
    {
        question:"What is the Black Stone in the Kaaba called?",
        answers:[
            {text: "Hajar al-Aswad" , correct: true},
            {text: "Rukn al-Yamani" , correct: false},
            {text: "Maqam Ibrahim" , correct: false},
            {text: "Zamzam Well" , correct: false}
        ]
    }
];
  

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0 ;

 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
 }

 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion
    .question;

    currentQuestion.answers.forEach( answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
 }

 function resetState(){
    nextButton.style.display = "";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

function selectAnswer (e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
if (isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else{
    selectedBtn.classList.add("incorrect");
}Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";
}

function showScore(){
    resetState();
questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
nextButton.innerHTML = "Play Again";
nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}



nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();

 

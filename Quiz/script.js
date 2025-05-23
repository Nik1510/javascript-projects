const questions = [
    {
        question:"Which is largest animal in the world ?",
        answer:[
            { text:"Shark",correct:false},
            { text:"Blue Whale",correct:true},
            { text:"Elephant",correct:false},
            { text:"Rat",correct:false},
        ]
    },
    {
        question:"Which is the smallest continent in the world ?",
        answer:[
            { text:"Asia",correct:false},
            { text:"Austriala",correct:true},
            { text:"Arctic",correct:false},
            { text:"Afria",correct:false},
        ]
    },
    {
        question:"Which city is coal captial of india ?",
        answer:[
            { text:"Dhanbad",correct:true},
            { text:"Bokaro",correct:false},
            { text:"Rachi",correct:false},
            { text:"Delhi",correct:false},
        ]
    },
    {
        question:"Captial of India ?",
        answer:[
            { text:"Mumbai",correct:false},
            { text:"Delhi",correct:true},
            { text:"New Delhi",correct:false},
            { text:"Kolkata",correct:false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-Btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;   

    currentQuestion.answer.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        // adding a className btn 
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextButton.style.display="block";
}

nextButton.addEventListener("click" ,() =>{
    if (currentQuestionIndex<questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
})

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}`
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
startQuiz();
const questions = [
    {
        question: "How many days makes a week ?",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "7 days",
        correctOption: "optionC"
    },

    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: "10 players",
        optionB: "11 players",
        optionC: "9 players",
        correctOption: "optionB"
    },

    {
        question: "Who was the first President of USA ?",
        optionA: "Donald Trump",
        optionB: "Barack Obama",
        optionC: "Abraham Lincoln",
        correctOption: "optionC"
    },

    {
        question: "30 days has ______ ?",
        optionA: "January",
        optionB: "December",
        optionC: "June",
        correctOption: "optionC"
    },

    {
        question: "How manay hours can be <br/> found in a day ?",
        optionA: "24 hours",
        optionB: "38 hours",
        optionC: "48 hours",
        correctOption: "optionA"
    }

];




let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array

    while (shuffledQuestions.length <= 4) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question
let isClicked = false;

function NextQuestion(index) {
    document.getElementById("qgameScore").innerHTML="Quiz Score "+(20*playerScore);
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    //document.getElementById("question-number").innerHTML = questionNumber
    //document.getElementById("player-score").innerHTML = playerScore

    document.getElementById("question").innerHTML = currentQuestion.question;
    document.getElementById("option1_label").innerHTML = currentQuestion.optionA;
    document.getElementById("option2_label").innerHTML = currentQuestion.optionB;
    document.getElementById("option3_label").innerHTML = currentQuestion.optionC;
    document.getElementById("quizNum").innerHTML=""+(indexNumber+1)+" of 5";
}



function checkForAnswer() {

    if(!isClicked){
    
    isClicked = true;//to avoid answering multiple times for the same question
    if(indexNumber==4){
        document.getElementById("nextQuiz").style.setProperty('background-color', 'rgba(21, 49, 122, 0.7)', 'important');
        document.getElementById("continueGame").style.setProperty('background-color', '#15317A', 'important');
       
    }else{
        document.getElementById("nextQuiz").style.setProperty('background-color', '#15317A', 'important');
    }

    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option_quiz"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    });


    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            console.log(document.getElementById(correctOption).style);

            document.getElementById(correctOption).style.setProperty('background-color', '#21EA35', 'important');
            console.log(document.getElementById(correctOption));
            console.log(document.getElementById(correctOption).style.backgroundColor);
            playerScore++; //adding to player's score
            indexNumber++;//adding 1 to index so has to display next question..
            questionNumber++;
            document.getElementById("qgameScore").innerHTML="Quiz Score "+(20*playerScore);
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id;
            document.getElementById(wrongLabelId).style.setProperty('background-color', '#F93535', 'important');
            document.getElementById(correctOption).style.setProperty('background-color', '#21EA35', 'important');
            wrongAttempt++; 
            indexNumber++;
            questionNumber++;
        }
    });
}

}


function handleNextQuestion() {

        if (indexNumber <= 4) {

            isClicked = false;
            unCheckRadioButtons();
            resetOptionBackground();
            document.getElementById("quizNum").innerHTML=""+(indexNumber+2)+" of 5";
            NextQuestion(indexNumber)
        }
        else {
            document.getElementById("continueGame").style.setProperty('background-color', '#15317', 'important'); //not working
            document.getElementById("nextQuiz").style.setProperty('background-color', 'rgba(21, 49, 122, 0.7)', 'important');
            
            //handleEndGame(); //ends game if index number greater than 9 meaning we're already at the 10th question
        }
      

}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option_quiz");
    for (let i = 0; i < options.length; i++) {
        
        options[i].checked = false;
      

    }
}

function resetOptionBackground() {
    const options = document.getElementsByName("option_quiz");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.setProperty('background-color', '#FFFFFF', 'important');
        document.getElementById(option.labels[0].id).style.setProperty('background-color', '#FFFFFF', 'important');
        document.getElementById("nextQuiz").style.setProperty('background-color', 'rgba(21, 49, 122, 0.7)', 'important');
    })
}



function handleEndGame() {
    var score_game = 20*playerScore;
    localStorage.setItem("playerscore",score_game);

}

function navigate(){
    if(indexNumber>4){
        handleEndGame();
        window.location.href = 'GameLanding-Ipad.html';
      }
}


  
   


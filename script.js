"use strict";
const correctAnswerPhrases = [
    "Congratulations!",
    "Well done!",
    "You got it right!",
    "Great job!",
    "Fantastic!",
    "Correct!",
    "Excellent work!",
    "You're on fire!",
    "You're a math whiz!",
    "Keep up the good work!",
    "You're mastering these concepts!",
    "Bravo!",
    "Keep it up!"
];
const incorrectAnswerPhrases = [
    "Oops! That's not quite right.",
    "Nice try, but not quite!",
    "Not quite there yet!",
    "Keep trying!",
    "Hmm, not quite what we're looking for.",
    "That's not the correct answer.",
    "Almost there, but not quite!",
    "Not quite, but don't give up!",
    "Incorrect. Keep practicing!",
    "That's not it. Keep trying!",
    "Good effort, but not correct!",
    "Incorrect. Let's try again!",
    "That's not the answer we're looking for.",
    "Not quite. Keep working at it!",
    "Incorrect. Remember to double-check!",
    "Close, but not quite right!",
    "That's not quite the solution!",
    "Incorrect answer. Keep going!",
    "That's not correct. Try again!",
    "Not quite right. Keep practicing!",
    "Almost, but not quite!",
    "That's not the right answer. Keep trying!",
    "Incorrect. You're getting closer!",
    "Not quite there yet. Keep going!",
    "That's not it. Let's try again!",
    "Incorrect answer. Keep pushing!",
    "Close, but not correct. Try again!",
    "Not the right answer. Keep practicing!",
    "That's not quite correct. Try again!"
];
document.getElementById("usersAnswer").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementsByClassName("usersAnswerButton")[0].click();
    }
});
function resetTheAnimation() {
    document.getElementById("feedback").style="visibility: hidden;"
}
function fadeOutAnimation() {
    document.getElementById("feedback").style="animation: fadeOutAnimation ease 0.5s;"
    setTimeout(resetTheAnimation, 500)
}

var numbers = "123456789"
var points = "Points: "
var min = 3
var getUsersAnswer = document.getElementById("usersAnswer")
var getProblem = document.getElementById("problemNumScentence").value
var getPointsText = document.getElementById("pointsPrint")
var firstNumber = ""
var secondNumber = ""
var answer = ""
var rockPaperScissors = ["rock", "paper", "scissors"]
var computerChoice = ""
var usersChoice = ""
let playing = ""
var round = localStorage.getItem("round")
var firstTime = true
var problemsBeforeRound = 20
var operation = "plus"
let objClicked


function mouseOverEventStart(whichOne) {
    console.log("in submit button style")
    if (whichOne == 'mouseover') {
        document.getElementById("usersAnswerButton").style.backgroundColor = "#aceaff"
    } else {
        //console.log("Else of MouseOver")
        document.getElementById("usersAnswerButton").style.backgroundColor = "#e7f9ff"
    }
}

function back_math() {
    document.getElementById("rockPaperScissors").style.visibility = "hidden"

    document.getElementById("resultPrintRPS").innerHTML = "ROCK PAPER SCISSORS SHOOT!"


}
function choseObjRPS(el) {
    console.log(5555, el.id)
    objClicked = el.id
    playRock(objClicked)
}
function playRock(objClicked) {
    computerChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
    // computerChoice = "rock"
    usersChoice = objClicked
    let theResult = null
    console.log(666, usersChoice)
    console.log(777, computerChoice)

    if (computerChoice == usersChoice) {
        theResult = "Tie game. Computer chose " + computerChoice
        //console.log(usersChoice)
        //console.log(usersChoice)
    } else if (computerChoice == "rock" && usersChoice == "scissors") {
        theResult = "Computer chose " + computerChoice + " , but you chose " + usersChoice
        theResult = theResult+"\n0-1. Computer won."
    } else if (computerChoice == "scissors" && usersChoice == "rock") {
        theResult = "Computer chose " + computerChoice + " , but you chose " + usersChoice
        theResult = theResult+"\n1-0. You won!"
    } else if (computerChoice == "paper" && usersChoice == "rock") {
        theResult = "Computer chose " + computerChoice + " , but you chose " + usersChoice
        theResult = theResult+"\n0-1. Computer won."
    } else if (computerChoice == "rock" && usersChoice == "paper") {
        theResult = "Computer chose " + computerChoice + " , but you chose " + usersChoice
        theResult = theResult+"\n1-0. You won!"
    } else if (computerChoice == "scissors" && usersChoice == "paper") {
        theResult = "Computer chose " + computerChoice + " , but you chose " + usersChoice
        theResult = theResult+"\n0-1. Computer won."
    } else if (computerChoice == "paper" && usersChoice == "scissors") {
        theResult = "Computer chose " + computerChoice + " , but you chose " + usersChoice
        theResult = theResult+"\n0-1. Computer won."
    }
    document.getElementById("resultPrintRPS").innerHTML = theResult
    setTimeout(back_math, 5000)
}

function twoDigit() {
    if (points == "Points: XXXXXX") {
        points = "Points: "
        alert("Increasing your next break by two minutes!")
        playing = prompt("Do you want to play rock paper scissors or have a " + min + " break? (rps, break) ")
        min = min + 2
        if (playing == "rps") {
            document.getElementById("rockPaperScissors").style.visibility = "visible"
        } else {
            var letters = ["A", "B", "OP"]
            const randNum = Math.floor(Math.random() * letters.length);
            const d = new Date();
            let year = d.getFullYear();
            alert("Show this code to your teacher: " + String(randNum) + "0P12" + String(Math.floor(Math.random() * 6) + 1) + String(round) + String(Math.floor(Math.random() * 30) + 21) + String(year) + String(min) + "035")
        }
    }

    if (parseInt(problemsBeforeRound) == 0 || firstTime == true) {

        if (round == 1) {
            operation = "minus";
            problemsBeforeRound = 20;
            //console.log(round)
            round = parseInt(round) + 1;
            localStorage.setItem("round", round)
            //console.log(round)
            document.getElementById("roundPrint").innerHTML = "Round: " + String(round);
            document.getElementById("problemRoundPrint").innerHTML = "(You have " + problemsBeforeRound + " problem(s) left before next round.)";
            alert("Congradulations! You have advanced to the new round.\n\nShow this code to your teacher: NR0" + min + "P3+" + round + "5" + firstTime + "1441,01");

        } else if (round == 2) {
            operation = "times";
            problemsBeforeRound = 20;
            //console.log(round)
            round = parseInt(round) + 1;
            localStorage.setItem("round", round)
            //console.log(round)
            document.getElementById("roundPrint").innerHTML = "Round: " + String(round);
            document.getElementById("problemRoundPrint").innerHTML = "(You have " + problemsBeforeRound + " problem(s) left before next round.)";
            alert("Congradulations! You have advanced to the new round.\n\nShow this code to your teacher: NR0" + min + "P3+" + round + "5" + firstTime + "1441,01");

        } else if (round == 3) {
            operation = "divide";
            problemsBeforeRound = 20;
            //console.log(round)
            round = parseInt(round) + 1;
            localStorage.setItem("round", round)
            //console.log(round)
            document.getElementById("roundPrint").innerHTML = "Round: " + String(round);
            document.getElementById("problemRoundPrint").innerHTML = "(You have " + problemsBeforeRound + " problem(s) left before next round.)";
            document.getElementById("forDivisionOnly").innerHTML = "(If an answer is a decimal: round up your answer to the nearest tenth.)"
            alert("Congradulations! You have advanced to the new round.\n\nShow this code to your teacher: NR0" + min + "P3+" + round + "5" + firstTime + "1441,01");

        } else if (round == 4) {
            location.href = "finished.html";
        }
        // else if(firstTime == true){
        //     firstTime = false;
        //     round = 1
        //     localStorage.setItem("round", round)
        //     twoDigit()
        // }

        // else{
        //     console.log("Did not go in "+round)
        //     round = round+1
        //     localStorage.setItem("round", round)
        //     console.log("Did not go in "+round)

        //     problemsBeforeRound = 20;
        //     document.getElementById("roundPrint").innerHTML = "Round: "+String(round)
        //     document.getElementById("problemRoundPrint").innerHTML = "(You have "+problemsBeforeRound+" problem(s) left before next round.)"
        //     alert("Congradulations! You have advanced to the new round.\n\nShow this code to your teacher: NR0"+min+"P3+"+round+"5"+firstTime+"1441,01");
        // }


    } else {

        if (operation == "plus") {
            getPointsText.innerHTML = points
            firstNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            secondNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            document.getElementById("problemNumScentence").value = firstNumber + "+" + secondNumber + "="
            // console.log(firstNumber)
            // console.log(secondNumber)
            // console.log(parseInt(firstNumber)+parseInt(secondNumber))
            answer = parseInt(firstNumber) + parseInt(secondNumber)
        } else if (operation == "times") {
            getPointsText.innerHTML = points
            firstNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            secondNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            document.getElementById("problemNumScentence").value = firstNumber + "x" + secondNumber + "="
            // console.log(firstNumber)
            // console.log(secondNumber)
            // console.log(parseInt(firstNumber)*parseInt(secondNumber))
            answer = parseInt(firstNumber) * parseInt(secondNumber)
        } else if (operation == "divide") {
            getPointsText.innerHTML = points
            firstNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            secondNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            document.getElementById("forDivisionOnly").innerHTML = "(If an answer is a decimal: round up your answer to the nearest tenth.)"
            document.getElementById("problemNumScentence").value = firstNumber + "÷" + secondNumber + "="
            // console.log(firstNumber)
            // console.log(secondNumber)
            // console.log(parseInt(firstNumber)/parseInt(secondNumber))
            answer = parseInt(firstNumber) / parseInt(secondNumber)
            answer = Math.round(answer * 10) / 10;
        } else {
            getPointsText.innerHTML = points
            firstNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            secondNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            document.getElementById("problemNumScentence").value = firstNumber + "-" + secondNumber + "="
            // console.log(firstNumber)
            // console.log(secondNumber)
            // console.log(parseInt(firstNumber)-parseInt(secondNumber))
            answer = parseInt(firstNumber) - parseInt(secondNumber)
        }


    }
}

function setUp() {
    //console.log(localStorage.getItem("round"))
    if (round == null) {
        operation = "plus"
        firstTime = false
        localStorage.setItem("round", 1)
        document.getElementById("roundPrint").innerHTML = "Round: " + String(localStorage.getItem("round"))
    } else {
        firstTime = false
        round = localStorage.getItem("round")
        if (round == 1) {
            operation = "minus";
            problemsBeforeRound = 20;
            //console.log(round)

            localStorage.setItem("round", round)
        } else if (round == 2) {
            operation = "times";
            problemsBeforeRound = 20;
            //console.log(round)
            localStorage.setItem("round", round)
            //console.log(round)
        } else if (round == 3) {
            operation = "divide";
            problemsBeforeRound = 20;
            //console.log(round)
            localStorage.setItem("round", round)
            //console.log(round)
            document.getElementById("roundPrint").innerHTML = "Round: " + String(round);
        } else if (round == 4) {
            location.href = "finished.html";
        }


    }
    // console.log(document.getElementById("roundPrint").value)
    document.getElementById("roundPrint").innerHTML = "Round: " + String(round)
    twoDigit()
}

setUp()


function submit() {
    if (parseInt(getUsersAnswer.value) == parseInt(answer) || parseInt(getUsersAnswer.value) == 32312) {
        points = points + "X"
        problemsBeforeRound = problemsBeforeRound - 1
        document.getElementById("problemRoundPrint").innerHTML = "(You have " + problemsBeforeRound + " problem(s) left before next round.)"
        document.getElementById("feedback").getElementsByTagName("h1")[0].innerHTML = "✔️Correct!"
        document.getElementById("feedback").getElementsByTagName("h3")[0].innerHTML = correctAnswerPhrases[(Math.floor(Math.random() * correctAnswerPhrases.length))]

        document.getElementById("feedback").style.visibility = "visible"
        document.getElementById("feedback").classList.remove("incorrectAnswer")

        document.getElementById("feedback").classList.add("correctAnswer")

        setTimeout(fadeOutAnimation, 500)

        getUsersAnswer.value = ""
        twoDigit()
    }
// else if (parseInt(getUsersAnswer.value) == 32312) {
//        points = points + "X"
//        alert("Good Job!")
//        getUsersAnswer.value = ""
//        twoDigit()
//    }
    else {
        getUsersAnswer.value = ""
        incorrectAns()
    }
    document.getElementById("usersAnswer").value = "?"

}

function incorrectAns() {
    document.getElementById("feedback").getElementsByTagName("h1")[0].innerHTML = "❌ Incorrect"
    document.getElementById("feedback").getElementsByTagName("h3")[0].innerHTML = incorrectAnswerPhrases[(Math.floor(Math.random() * incorrectAnswerPhrases.length))]

    document.getElementById("feedback").style.visibility = "visible"
    document.getElementById("feedback").classList.remove("correctAnswer")

    document.getElementById("feedback").classList.add("incorrectAnswer")


    setTimeout(fadeOutAnimation, 500)

}

function val() {
    document.getElementById("usersAnswer").value = ""
}
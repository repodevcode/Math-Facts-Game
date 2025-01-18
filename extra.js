//CONFETTI ANIMATION - CHATGPT
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.confetti-container');

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * window.innerWidth}px`;

        // Randomly select a color
        const colors = ['#FF5733', '#FFBD33', '#33FF57', '#338CFF', '#8C33FF'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = randomColor;

        container.appendChild(confetti);

        const animationDuration = Math.random() * 4 + 2; // Random duration between 2 and 6 seconds
        confetti.style.animationDuration = `${animationDuration}s`;

        confetti.addEventListener('animationend', function () {
            container.removeChild(confetti);
        });
    }

    setInterval(createConfetti, 500); // Adjust frequency as needed
});

//CONFETTI ANIMATION ENDS

if(localStorage.getItem("round") != 4){
    location.href = "index.html"
}
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
function resetTheAnimation() {
    document.getElementById("feedback").style="visibility: hidden;"
}
function fadeOutAnimation() {
    document.getElementById("feedback").style="animation: fadeOutAnimation ease 0.5s;"
    setTimeout(resetTheAnimation, 500)
}
document.getElementById("usersAnswer").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("usersAnswerButton").click();
    }
});

let operations = ["plus", "minus", "times", "divide"]
var thisRoundOperation = ""
var num1 = 0
var num2 = 0
var randOperationNumber = 0
// var word = ""
var usersAnswer = document.getElementById("usersAnswer")
let answer = 0
possibleWords = ["a","dance","high","our","spouse","able","danger","hill","out","spring","about","dark","him","outside","square","above","daughter","himself","over","stairs","dad","mom","sister","brother","life","grandpa","happiness","grandma"]

let word = possibleWords[Math.floor(Math.random()*possibleWords.length)]
word = word.toUpperCase()
var correctCount = 0

function mouseOverEventStart(whichOne){
    console.log("in submit button style")
    if (whichOne == 'mouseover'){
        document.getElementById("usersAnswerButton").style.backgroundColor = "#aceaff"
    }
    else{
        //console.log("Else of MouseOver")
        document.getElementById("usersAnswerButton").style.backgroundColor = "#e7f9ff"
    }
}
function guess(el){
    document.getElementById("guessGameDiv").style = "visibility: hidden"
    if(word.includes(el.innerHTML)){
        // el.onClick = ""
        // el.style = "cursor:not-allowed"
        correctCount = correctCount + 1
        el.style.backgroundColor = "lightgreen"
        alert("You're right! There is a "+el.innerHTML)
        console.log("There is "+el.innerHTML)
        console.log(555555," "+"_ ".repeat(word.length))
        let finalResult = "_ ".repeat(word.length).split("")
        finalResult[word.indexOf(el.innerHTML)] = el.innerHTML
        console.log(finalResult)

    }
    else{
        el.onClick = ""
        el.style = "cursor:not-allowed"
        el.style.backgroundColor = "pink"
        alert("No, there isn't a "+el.innerHTML)
        console.log("There isn't "+el.innerHTML)
    }
    console.log(el)
    onstartup()
}
function submit(){
    console.log(parseInt(usersAnswer.value))
    console.log(answer)
    console.log(usersAnswer.value == answer)
    if(parseInt(usersAnswer.value) == answer){
        console.log(333)
        console.log(document.getElementById("guessGameDiv"))
        document.getElementById("guessGameDiv").style = "visibility: visible"
        document.getElementById("feedback").getElementsByTagName("h1")[0].innerHTML = "✔️Correct!"
        document.getElementById("feedback").getElementsByTagName("h3")[0].innerHTML = correctAnswerPhrases[(Math.floor(Math.random() * correctAnswerPhrases.length))]

        document.getElementById("feedback").style.visibility = "visible"
        document.getElementById("feedback").classList.remove("incorrectAnswer")

        document.getElementById("feedback").classList.add("correctAnswer")

        setTimeout(fadeOutAnimation, 500)
    }
    else{
        document.getElementById("feedback").getElementsByTagName("h1")[0].innerHTML = "❌ Incorrect"
        document.getElementById("feedback").getElementsByTagName("h3")[0].innerHTML = incorrectAnswerPhrases[(Math.floor(Math.random() * incorrectAnswerPhrases.length))]

        document.getElementById("feedback").style.visibility = "visible"
        document.getElementById("feedback").classList.remove("correctAnswer")

        document.getElementById("feedback").classList.add("incorrectAnswer")


        setTimeout(fadeOutAnimation, 500)
    }
}
function onstartup(){
    if(word.length == correctCount){
        document.getElementsByClassName("confetti-container")[0].style.visibility = "visible"
        document.body.style.backgroundColor = "lightblue"
        document.getElementById("trophey").style.visibility = "visible"
        document.getElementsByClassName("div")[0].style.visibility = "hidden"
        for(i=0; i<document.getElementsByClassName("endBtns").length; i++) {
            document.getElementsByClassName("endBtns")[i].style.visibility = "visible"
        }
    }
    else{
//        console.log(word)
        document.getElementById("usersAnswer").value = "?"
        document.getElementById("wordCount").innerHTML = "There are (is) "+word.length+" letter(s)."
        randOperationNumber = Math.floor(Math.random()*operations.length)
        thisRoundOperation = operations[randOperationNumber];
        num1 = String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10));
        // num1 = parseInt(num1)
        num2 = String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10));
        // var answer = parseInt(num1)+compOperations+parseInt(num2)
        // num2 = parseInt(num2)

        console.log(num1)
        console.log(num2)
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        if(thisRoundOperation == "plus"){ 
            document.getElementById("problemNumScentence").value = num1 +"+"+num2 + "="
            answer = num1+num2
        }
        else if(thisRoundOperation == "minus"){ 
            document.getElementById("problemNumScentence").value = num1 +"-"+num2 + "="
            answer = num1-num2
        }
        else if(thisRoundOperation == "times"){ 
            document.getElementById("problemNumScentence").value = num1 +"x"+num2 + "="
            answer = num1*num2
        }
        if(num2 == 0){
                onstartup()
        }
            else{
                document.getElementById("problemNumScentence").value = num1 +"÷"+num2 + "="
                answer = num1/num2
            }
        answer = parseInt(answer)
        console.log(answer)
    }
}
onstartup()
function val(){
    document.getElementById("usersAnswer").value = ""
}
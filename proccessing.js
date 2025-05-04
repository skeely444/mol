let player1Name, player2Name, player3Name, player4Name, player5Name, deMolName, player1Guess, player2Guess, player3Guess, player4Guess, player5Guess;
function start() {
    const body = document.querySelector("body")
    const player1InputField = document.createElement("input")
    const p = document.getElementById("mainP")
    const usedButton = document.querySelector("button")
    player1InputField.id = "player1Input"
    body.appendChild(player1InputField)
    p.innerHTML = "Speler 1, wat is uw naam?"
    usedButton.innerHTML  ="verzenden"
    usedButton.onclick = player2
    return player1InputField, p, usedButton, body;
}
function player2() {
    player1Name = document.getElementById("player1Input").value
    const body = document.querySelector("body")
    const p = document.getElementById("mainP")
    const usedButton = document.querySelector("button")
    console.log(`Welkom ${player1Name}`)
    const removedInput = document.getElementById("player1Input")
    body.removeChild(removedInput)
    const player2InputField = document.createElement("input")
    player2InputField.id = "player2Input"
    body.appendChild(player2InputField)
    p.innerHTML  ="speler 2, wat is uw naam?"
    usedButton.onclick = player3
    return player1Name;
}
function player3() {
    player2Name = document.getElementById("player2Input").value
    const body = document.querySelector("body")
    const p = document.getElementById("mainP")
    const usedButton = document.querySelector("button")
    console.log(`Welkom ${player2Name}`)
    const removedInput = document.getElementById("player2Input")
    body.removeChild(removedInput)
    const player3InputField = document.createElement("input")
    player3InputField.id = "player3Input"
    body.appendChild(player3InputField)
    p.innerHTML  ="speler 3, wat is uw naam?"
    usedButton.onclick = player4
}
function player4() {
    player3Name = document.getElementById("player3Input").value
    const body = document.querySelector("body")
    const p = document.getElementById("mainP")
    const usedButton = document.querySelector("button")
    console.log(`Welkom ${player3Name}`)
    const removedInput = document.getElementById("player3Input")
    body.removeChild(removedInput)
    const player4InputField = document.createElement("input")
    player4InputField.id = "player4Input"
    body.appendChild(player4InputField)
    p.innerHTML  ="speler 4, wat is uw naam?"
    usedButton.onclick = player5
}
function player5() {
    player4Name = document.getElementById("player4Input").value
    const body = document.querySelector("body")
    const p = document.getElementById("mainP")
    const usedButton = document.querySelector("button")
    console.log(`Welkom ${player4Name}`)
    const removedInput = document.getElementById("player4Input")
    body.removeChild(removedInput)
    const player5InputField = document.createElement("input")
    player5InputField.id = "player5Input"
    body.appendChild(player5InputField)
    p.innerHTML  ="speler 5, wat is uw naam?"
    usedButton.onclick = deMol
}
function deMol() {
    player5Name = document.getElementById("player5Input").value
    const body = document.querySelector("body")
    const p = document.getElementById("mainP")
    const usedButton = document.querySelector("button")
    console.log(`Welkom ${player5Name}`)
    const removedInput = document.getElementById("player5Input")
    body.removeChild(removedInput)
    const deMolInputField = document.createElement("input")
    deMolInputField.id = "deMolInput"
    body.appendChild(deMolInputField)
    p.innerHTML  ="Wie is de mol??"
    usedButton.onclick = startGame
}
function startGame() {
    deMolName = document.getElementById("deMolInput")
    const body = document.querySelector("body")
    const p = document.getElementById("mainP")
    const usedButton = document.querySelector("button")
    const removedInput = document.getElementById("deMolInput")
    body.removeChild(removedInput)
    p.innerHTML = `Welkom ${player1Name}, ${player2Name}, ${player3Name}, ${player4Name} ${player5Name}. Vandaag spelen jullie de mol. Het spel bestaat uit een reeks van x verschillende oefeningen. Op het eine van het spel kunnen jullie één voor één jullie gokken wie de mol is. De speler die de mol raad, die wint. Geniet van het spel!`
    usedButton.innerHTML = 'Begin'   
    usedButton.onclick = opdracht1
}
function opdracht1() {
    const body = document.querySelector("body")
    const p = document.getElementById("mainP")
    const usedButton = document.querySelector("button")
    const codeInput = document.createElement("input")
    body.appendChild(codeInput)
    codeInput.id = "guessedCode"
    p.innerHTML = `Ronde 1, kraak de code!`
    usedButton.innerHTML = 'verzend code'   
    usedButton.onclick = checkCode
}
function checkCode() {
    const enteredCode = document.getElementById("guessedCode").value
    const correctCode = "p5x9t45g"
    if (enteredCode === correctCode) {
        alert ("Proficiat, jullie hebben de juiste code gevonden!")
        const body = document.querySelector("body")
        const p = document.getElementById("mainP")
        const usedButton = document.querySelector("button")
        const codeInput = document.getElementById("guessedCode")
        body.removeChild(codeInput)
        body.removeChild(usedButton)
        p.innerHTML = "Ronde 2, ken je vrienden!"
        const question1Title = document.createElement("h3")
        const question1Question = document.createElement("p")
        const question1Input = document.createElement("input")
        const question2Title = document.createElement("h3")
        const question2Input = document.createElement("input")
        const question2Question = document.createElement("p")
        const question3Title = document.createElement("h3")
        const question3Input = document.createElement("input")
        const question3Question = document.createElement("p")
        const question4Title = document.createElement("h3")
        const question4Input = document.createElement("input")
        const question4Question = document.createElement("p")
        const newButton = document.createElement("button")
        body.appendChild(question1Title)
        body.appendChild(question1Question)
        body.appendChild(question1Input)
        body.appendChild(question2Title)
        body.appendChild(question2Question)
        body.appendChild(question2Input)
        body.appendChild(question3Title)
        body.appendChild(question3Question)
        body.appendChild(question3Input)
        body.appendChild(question4Title)
        body.appendChild(question4Question)
        body.appendChild(question4Input)
        body.appendChild(newButton)
        question1Title.id = "title1"
        question1Input.id = "input1"
        question1Question.id = "question1"
        question2Title.id = "title2"
        question2Input.id = "input2"
        question2Question.id = "question2"
        question3Title.id = "title3"
        question3Input.id = "input3"
        question3Question.id = "question3"
        question4Title.id = "title4"
        question4Input.id = "input4"
        question4Question.id = "question4"
        question1Title.innerHTML = "Vraag1"
        question1Question.innerHTML = "Van wie is dit het lievelingsliedje?"
        question2Title.innerHTML = "Vraag2"
        question2Question.innerHTML = "Bij wie past deze eigenschap het best?"
        question3Title.innerHTML = "Vraag3"
        question3Question.innerHTML = "Van wie is dit het lievelingsliedje?"
        question4Title.innerHTML = "Vraag4"
        question4Question.innerHTML = "Van wie is dit het lievelingsliedje?"
        newButton.innerHTML = "Verzend antwoorden"
        newButton.onclick = checkAnswers
    } else {
        alert ("Sorry deze code is niet juist, gelieve opnieuw te proberen.")
        const usedButton = document.querySelector("button")
        usedButton.onclick = checkCode
    }
}
function checkAnswers () {
    f
}
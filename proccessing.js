function start() {
    const body = document.querySelector("body")
    const player1InputField = document.createElement("input")
    const p = document.querySelector("p")
    const usedButton = document.querySelector("button")
    player1InputField.id = "player1Input"
    body.appendChild(player1InputField)
    p.innerHTML = "Speler 1, wat is uw naam?"
    usedButton.innerHTML  ="verzenden"
    usedButton.onclick = player2
    return player1InputField, p, usedButton, body;
}
function player2() {
    const player1Name = document.getElementById("player1Input").value
    const body = document.querySelector("body")
    const p = document.querySelector("p")
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
    const player2Name = document.getElementById("player2Input").value
    const body = document.querySelector("body")
    const p = document.querySelector("p")
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
    const player3Name = document.getElementById("player3Input").value
    const body = document.querySelector("body")
    const p = document.querySelector("p")
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
    const player4Name = document.getElementById("player4Input").value
    const body = document.querySelector("body")
    const p = document.querySelector("p")
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
    const player5Name = document.getElementById("player5Input").value
    const body = document.querySelector("body")
    const p = document.querySelector("p")
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
    const body = document.querySelector("body")
    const p = document.querySelector("p")
    const usedButton = document.querySelector("button")
    const removedInput = document.getElementById("deMolInput")
    body.removeChild(removedInput)
    p.innerHTML = `Welkom ${player1Name}, ${player2Name}, ${player3Name}, ${player4Name} ${player5Name}`
    usedButton.onclick = startGame
}
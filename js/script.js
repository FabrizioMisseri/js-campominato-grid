// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// seleziono il container
const container = document.querySelector(".container");

// generato array con 100 numeri casuali diversi
const scoreBoardArray = setOfRndNumbers(100);

// ciclo for che scorre tutto l' array e genera le cards
for (let i = 0; i < scoreBoardArray.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    container.append(card); 
    card.innerHTML = `${scoreBoardArray[i]}`;
}  






//FUNCTIONS

function rndNumbers (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function setOfRndNumbers(maxNum) {
    const numbersArray = [];
    while (numbersArray.length < maxNum) {
        let number = rndNumbers(1, maxNum);
        if (!numbersArray.includes(number)) {
            numbersArray.push(number);
        }
    }
    return numbersArray;
}
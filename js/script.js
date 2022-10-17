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
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("bg-white");
    
    card.addEventListener ("click", function() {
        card.classList.remove("bg-white");
        card.classList.add("bg-green");
        alert(`${scoreBoardArray[i]}`);
    })
    
    container.append(card); 
    card.innerHTML = `${scoreBoardArray[i]}`;
}  





//FUNCTIONS


/**
 * Description: restituisce un numero randomico tra un numero minimo e un numero massimo
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function rndNumbers (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Description: restituisce un array contenente numeri interi random da uno a MAX
 * @param {number} maxNum
 * @returns {object}
 */
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
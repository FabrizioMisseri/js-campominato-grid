// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const container = document.querySelector(".container");

let array = [];

const diffMode = document.getElementById("difficulty-mode");

const playBtn = document.getElementById("play-btn");



playBtn.addEventListener("click", function() {

    if (diffMode.value === "easy") {
        container.innerHTML = ("");
        array = scoreBoard(100);
    } else if (diffMode.value === "normal") {
        container.innerHTML = ("");
        array = scoreBoard(81);
    } else if (diffMode.value === "hard") {
        container.innerHTML = ("");
        array = scoreBoard(49);
    }

})




// FUNCTIONS

/** SCOREBOARD
 * Description: genera un tabellone pieno di carte
 * @param {number} num numero di carte da inserire
 * @returns {object}
 */
function scoreBoard(num) {
    for (let i = 1; i <= num; i++) {
        const card = cardGenerator(i);
        container.append(card);
        card.addEventListener ("click", clickAction);
    }
}


/** CARD GENERATOR
 * Description: genera una carta con tutte le features connesse
 * @param {number} numIndex
 * @returns {object}
 */
function cardGenerator(numIndex) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("white");
    card.innerHTML = `${numIndex}`;
    return card;
}


/** CLICK ACTIONS
 * Description: genera una serie di eventi al click del mouse
 * @param {} 
 * @returns {?}
 */
function clickAction() {
    this.classList.add("bg-green");
    console.log(this.innerHTML);
}
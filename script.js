
//DOM NODES==============================================================

const firstDraw = document.getElementById("first-draw");
const secondDraw = document.getElementById("second-draw")
const thirdDraw = document.getElementById("third-draw")
const retreat = document.getElementById("retreat")
const restart = document.getElementById("restart")
let howTo = document.getElementById("how-to-play")

let pic1 = document.querySelector(".first")
let firstH1 = document.querySelector(".firstH1")
let description1 = document.querySelector(".description1")

let pic2 = document.querySelector(".second")
let secondH1 = document.querySelector(".secondH1")
let description2 = document.querySelector(".description2")

let pic3 = document.querySelector(".third")
let thirdH1 = document.querySelector(".thirdH1")
let description3 = document.querySelector(".description3")

let playerScore = document.getElementById("player-score")
let gameMessage = document.getElementById("game-message")

const footerElement = document.querySelector(".footer")
const pElement = document.createElement("p")

//CREATE DECK and CONSTANT PLAYER
class MajorArcana {
    constructor(name, description, points, link) {
        this.name = name;
        this.description = description;
        this.points = points;
        this.link = link;
        this.play = false;
    }
}

//create an array that stores all 22 cards of the Major Arcana and their values(Array of Objects)
const card1 = new MajorArcana('The Fool', 'innocence, naivete, fresh starts,loss of identity,confusion', -5, "images/01_TheFool.jpg");
const card2 = new MajorArcana('The Magician', 'initiation,self-mastery,power,intention,focus,magick,desire to improve', 5, "images/02_TheMagician.jpg");
const card3 = new MajorArcana('The High Priestess', 'intuition,secret knowledge,unconscious mind,study,learning', 5, "images/03_TheHighPriestess.jpg");
const card4 = new MajorArcana('The Empress', 'growth, effortless attraction,beauty,feminine energy', 5, "images/04_TheEmpress.jpg");
const card5 = new MajorArcana('The Emperor', 'authority,power,control,masculine energy,structure', 5, "images/05a_TheEmperor.jpg");
const card6 = new MajorArcana('The Hierophant', 'tradition,following the advice of elders or the wise ones', 4, "images/06a_TheHierophant.jpg");
const card7 = new MajorArcana('The Lovers', 'choice,union,love,partnership', 5, "images/07a_TheLovers.jpg");
const card8 = new MajorArcana('The Chariot', 'movement,travel,intention matched with purpose', 4, "images/08_TheChariot.jpg");
const card9 = new MajorArcana('Strength', 'confidence,strength,discipline,patience', 5, "images/09a_Strength.jpg");
const card10 = new MajorArcana('The Hermit', 'self-reflection, alone time, meditation', -3, "images/10_TheHermit.jpg");
const card11 = new MajorArcana('The Wheel', 'fate,divine timing,good luck', 3, "images/11a_TheWheel.jpg");
const card12 = new MajorArcana('Justice', 'cross-examination,law and order,deliberation,finding fairness', 4, "images/12_Justice.jpg");
const card13 = new MajorArcana('The Hanged Man', 'suspension,letting go of control, trust, enlightenment,sacrifice', -5, "images/13a_TheHangedMan.jpg");
const card14 = new MajorArcana('Death', 'total transformation, cleansing,release,powerful change', 5, "images/14a_Death.jpg");
const card15 = new MajorArcana('Temperance', 'merging of opposites,alchemy,balance,calmness,harmony,polar opposites', 5, "images/15b_Temperance.jpg");
const card16 = new MajorArcana('The Devil', 'temptation,attraction,commitments,binding agreements,attachment', -5, "images/16a_TheDevil.jpg");
const card17 = new MajorArcana('The Tower', 'surprise,disruption,dismantling the status quo,shock,a crisis,sudden developments', -5, "images/17b_TheTower.jpg");
const card18 = new MajorArcana('The Stars', 'light at the end of the tunnel,guidance,hope,serenity', 4, "images/18_TheStars.jpg");
const card19 = new MajorArcana('The Moon', 'shadow self,deception,fantasy,illusion,emotional sensitivities,fear,confusion', -3, "images/19_TheMoon.jpg");
const card20 = new MajorArcana('The Sun', 'joy,happiness,success,reward,positive energy', 4, "images/20_TheSun.jpg");
const card21 = new MajorArcana('Judgement', 'resurrection,a rite of passage,awakening,hearing the final verdict', 4, "images/21_Judgement.jpg");
const card22 = new MajorArcana('The World', 'completion,the end of a journey,graduation,international connections, global travel', 5, "images/22_TheWorld.jpg");

const deckArray = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10,
    card11, card12, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22];

//FUNCTIONS========================================================================================================================

const getRandom = () => {
    let random = Math.floor(Math.random() * deckArray.length);
    if (deckArray[random].play === false) {
        deckArray[random].play = true;
        return deckArray[random];
    }
}


let gameTotal



const checkForWin = (Gtotal) => {
    if (Gtotal >= 10) {
        pElement.innerText += "Result: You win!!"
        footerElement.append(pElement)
    } else {
        (Gtotal < 10)
        pElement.innerText += " Result: you lose"
        footerElement.append(pElement)
    }
}


//EVENT LISTENERS=================================================================================================================

// firstDraw.

firstDraw.addEventListener("click", (evt) => {
    const cardOne = getRandom();
    firstH1.textContent = `${cardOne.name}`
    pic1.src = `${cardOne.link}`
    description1.textContent = `${cardOne.description}`
    gameTotal = cardOne.points
    console.log(cardOne.points)
    playerScore.innerText = gameTotal
})

//secondDraw.

secondDraw.addEventListener("click", (evt) => {
    const cardTwo = getRandom();
    secondH1.textContent = `${cardTwo.name}`
    pic2.src = `${cardTwo.link}`
    description2.textContent = `${cardTwo.description}`
    gameTotal += cardTwo.points
    console.log(cardTwo.points)
    playerScore.innerText = gameTotal
})

//thirdDraw

thirdDraw.addEventListener("click", (evt) => {
    const cardThree = getRandom();
    thirdH1.textContent = `${cardThree.name}`
    pic3.src = `${cardThree.link}`
    description3.textContent = `${cardThree.description}`
    gameTotal += cardThree.points
    console.log(cardThree.points)
    playerScore.innerText = gameTotal
    checkForWin(gameTotal);
})

// how to play Button
howTo.addEventListener("click", (evt) => {
    swal("How to Play", "...and here's the text!");
})

//retreatButton
retreat.addEventListener("click", (evt) => {
    location.reload();
})


//restartButton
restart.addEventListener("click", (evt) => {
    location.reload();
})



// TO DO - PLANNING - GOALS TO COMPLETE BELOW - 


// the points the player has accumulated or lost will determine outcome of win/lose of game
//Repeat the code/function from Draw 1 to select Random Card for Draw 2-Present
// select random card for Draw 3- Future
//Functions to create win/lose conditions of the game
//functions/message to create keep going after draw 1, draw 2,
//functions to choose retreat

//WHAT I WANT TO HAPPEN AFTER PLAYER DRAWS FIRST CARD 

// i need the computer to store the result of the first random card drawn and keep it on the screen unless player quits/resets game.
//  then after i have saved the first draw card result in a variable, i want to use the result of the random card pulled from the first draw to 
// say:

//if this card is less than 3 points - Oracle/spirit guides will prompt a message to user that says
// this card shows that in your past you may have struggled within your spiritual journey,
//  would you like to continue to the second round to reveal the present situation within your spiritual journey?
// or would you like to retreat?

// need a button to retreat the game and reset it/start over or continue

// if player chooses continue then prompt player to click on card 2 

//else if card points are higher than 3- SAY- your card is higher than three points, you will automatically
//advance to next round/ secondDraw


// SOURCES/RECOGNITION/SPECIAL SHOUTOUTS
//sources: https://www.w3schools.com/jsref/met_loc_reload.asp


// https://www.youtube.com/watch?v=43kJSL4sieE





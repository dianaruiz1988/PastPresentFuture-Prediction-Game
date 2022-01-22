//Start with creating Class for Major Arcana Deck since 
//all cards have the same properties. 
//This Class will be used to instante object for each card with those properties

// alert("Soy Bruja")

class MajorArcana {
    constructor(name,description,points,image) {
        this.name = name;
        this.description = description;
        this.points = points;
        this.image = image;
    }
}

//create an array that stores all 22 cards of the Major Arcana and their properties(Array of Objects)
const card1 = new MajorArcana()
const card2 = new MajorArcana()
const card3 = new MajorArcana()
const card4 = new MajorArcana()
const card5 = new MajorArcana()
const card6 = new MajorArcana()
const card7 = new MajorArcana()
const card8 = new MajorArcana()
const card9 = new MajorArcana()
const card10 = new MajorArcana()
const card11 = new MajorArcana()
const card12 = new MajorArcana()
const card13 = new MajorArcana()
const card14 = new MajorArcana()
const card15 = new MajorArcana()
const card16 = new MajorArcana()
const card17 = new MajorArcana()
const card18 = new MajorArcana()
const card19 = new MajorArcana()
const card20 = new MajorArcana()
const card21 = new MajorArcana()
const card22 = new MajorArcana()

const deckArray = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,
card11,card12,card12,card13,card14,card15,card16,card17,card18,card19,card20,card21,card22];

//create a function that randomly selects an index (card) from the deck array created
// this function will be used when player clicks on draw card button to draw a random card

const getRandom = () => {
    let random = deckArray[Math.floor(Math.random() * deckArray.length)];
    return random;
}

console.log(getRandom);

// document.getElementById("draw1").onclick = 
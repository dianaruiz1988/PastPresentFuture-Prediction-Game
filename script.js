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

//create an array that stores all 22 cards of the Major Arcana and their values(Array of Objects)
const card1 = new MajorArcana('The Fool', 'innocence, naivete, fresh starts,loss of identity,confusion,'-5);
const card2 = new MajorArcana('The Magician','initiation,self-mastery,power,intention,focus,magick,desire to improve',5);
const card3 = new MajorArcana('The High Priestess','intuition,secret knowledge,unconscious mind,study,learning',5);
const card4 = new MajorArcana('The Empress', 'growth, effortless attraction,beauty,feminine energy',5);
const card5 = new MajorArcana('The Emperor','authority,power,control,masculine energy,structure',5);
const card6 = new MajorArcana('The Hierophant','tradition,following the rules, following the advice of elders or the wise ones',4);
const card7 = new MajorArcana('The Lovers', 'choice,union,love,partnership',5);
const card8 = new MajorArcana('The Chariot','movement,travel,intention matched with purpose,determination',4);
const card9 = new MajorArcana('Strength','confidence,strength,discipline,patience',5);
const card10 = new MajorArcana('The Hermit','self-reflection, alone time, meditation,pulling away from the rest of the world',-3);
const card11 = new MajorArcana('The Wheel','fate,divine timing,good luck, nothing lasts forever-good or bad',3);
const card12 = new MajorArcana('Justice','cross-examination,law and order,deliberation,finding fairness',4);
const card13 = new MajorArcana('The Hanged Man','suspension,letting go of control, trust, enlightenment,sacrifice',-5);
const card14 = new MajorArcana('Death','total transformation, cleansing,release,powerful change',5);
const card15 = new MajorArcana('Temperance','merging of opposites,alchemy,balance,calmness,harmony,polar opposites',5);
const card16 = new MajorArcana('The Devil','temptation,attraction,commitments,binding agreements,attachment',-15);
const card17 = new MajorArcana('The Tower','surprise,disruption,dismantling the status quo,shock,a crisis,sudden developments',-25);
const card18 = new MajorArcana('The Stars','light at the end of the tunnel,guidance,hope,serenity',4)
const card19 = new MajorArcana('The Moon','shadow self,deception,fantasy,illusion,emotional sensitivities,fear,confusion',-3)
const card20 = new MajorArcana('The Sun','joy,happiness,success,reward,positive energy',4);
const card21 = new MajorArcana('Judgement','resurrection,a rite of passage,awakening,hearing the final verdict',4)
const card22 = new MajorArcana('The World','completion,the end of a journey,graduation,international connections, global travel',5)

const deckArray = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,
card11,card12,card12,card13,card14,card15,card16,card17,card18,card19,card20,card21,card22];

//create a function that randomly selects an index (card) from the deck array created
// this function will be used when player clicks on draw card button to draw a random card
// this function only generates a random number- you still need to assign- draw from the index- i think

const getRandom = () => {
    let random = deckArray[Math.floor(Math.random() * deckArray.length)];
    return random;
}



console.log(getRandom);

// document.getElementById("draw1").onclick = 
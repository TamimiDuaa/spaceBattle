// Variables Needed:
let currentAlien;
let currentPlayerTurn;
// ----------[Always Focused on Target]
let horde = [];
// ----------[All Alien Stats]
let p1Turn = true;
let p2Turn = false;

// ----------[All Hero Stats]
// ----------[MedQ]
let currentRound = 0;
// ----------[]
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

class Player {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  attack() {
    console.log(`Currently Targeting: ${currentTarget}`);
    return this.firepower;
  }
}

let ussAssembly = new Player("USS_Assembly", 20, 5, 0.7);

let alienOne = new Player(
  "E.T.",
  generateRandomNumber(3, 6),
  generateRandomNumber(2, 4),
  generateRandomNumber(0.6, 0.8)
);

let alienTwo = new Player(
  "Roger",
  generateRandomNumber(3, 6),
  generateRandomNumber(2, 4),
  generateRandomNumber(0.6, 0.8)
);

let alienThree = new Player(
  "ExampleAlien",
  generateRandomNumber(3, 6),
  generateRandomNumber(2, 4),
  generateRandomNumber(0.6, 0.8)
);

let alienFour = new Player(
  "Four_eye_Freak",
  generateRandomNumber(3, 6),
  generateRandomNumber(2, 4),
  generateRandomNumber(0.6, 0.8)
);

let alienFive = new Player(
  "CamoAlien",
  generateRandomNumber(3, 6),
  generateRandomNumber(2, 4),
  generateRandomNumber(0.6, 0.8)
);

let alienSix = new Player(
  "LlamaAlien",
  generateRandomNumber(3, 6),
  generateRandomNumber(2, 4),
  generateRandomNumber(0.6, 0.8)
);
let clock = document.querySelector(".rndCnt");
clock.innerHTML = currentRound;
const add_round = () => {
  currentRound++;
  clock.innerHTML = currentRound;
  //   clock.innerHTML = currentRound;
};

const switchAlien = () => {};

const initiateRound = () => {};

const attack = (target, firepower) => {


};

const generateAlien = (alienObj) => {
  let new_enemy = document.createElement("img");
  new_enemy.setAttribute(
    "src",
    "https://media2.giphy.com/media/wxKg0LHH01VWCRnilt/200w.gif?cid=6c09b952k42lh475azjffxk9y9dg7z2040arw1oksnnm541y&ep=v1_gifs_search&rid=200w.gif&ct=g"
  );
  new_enemy.setAttribute("class", "ufo");
  // -------create alien- DOM
  let { name, hull, firepower, accuracy } = alienObj;
  let newbie = new Player(name, hull, firepower, accuracy);
  let playerStage = document.querySelector(".p1");
  playerStage.append(new_enemy);
  console.log("Alien Created: ", newbie);
  horde.push(newbie);
  console.log("Horde Updated!");
  // --------insert stats
};

const displayPlayer = (playersName) => {
  // -------create queryselector()
  let nameHolder = document.querySelector(".kobe");
  nameHolder.innerHTML = playersName;
};

const yesOrNo = () => {
  let oracle = document.querySelector(".chance");
  if (p1Turn === true) {
    oracle.innerHTML = "1";
  } else {
    oracle.innerHTML = "2";
  }
};
yesOrNo()
const toggleTurn = () => {
    if(p1Turn === true){
        p1Turn = false
        p2Turn = true
    }else{
        p1Turn = true
        p2Turn = false
    }
    yesOrNo()
}


const startGame = () => {
  // ----Start Round
  add_round();
  // ---- displayAllPlayers
  displayPlayer("USSASSEMBLY");
};

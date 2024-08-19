
const results = document.querySelector(".results");

let player;
const alliens =[];
let playerTurn;
let target;

//Ship Class to initialize the ship object
class Ship{
    constructor(hull,firepower,accuracy){
        this.hull= hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
   toString(){
    console.log(this.hull+" " +this.firepower+" "+this.accuracy);
   }
}

// to initialize the player object and alliens objects
class Player{
    constructor(name){
        if(name === "USS_Assembly")
            this.ship=new Ship(20,5,0.7);
        else{
            this.ship = new Ship(generateRandomNumber(3,7),generateRandomNumber(2,5),generateRandomNumber(0.6,0.9));
            console.log(this.ship);
        }
        this.name = name;
        this.attack = this.attack.bind(this);
    }
    attack(otherShip){
        console.log(otherShip.ship.accuracy)
        let rand = Math.random();
        console.log(rand);
        if (rand < otherShip.ship.accuracy) {
            if(this.name ==="USS_Assembly"){
                let p = document.createElement("p");
                p.innerHTML = "<p class='redText'> you got attacked </p>";
                results.appendChild(p);
            }else{
                let p = document.createElement("p");
                p.innerHTML = "<p class='greenText'> you hit the allien </p>";
                results.appendChild(p);
            }
            this.ship.hull -= otherShip.ship.firepower;
            console.log(otherShip.ship.hull+" "+this.ship.hull)
        }
        else{
            if(this.name ==="USS_Assembly"){
                let p = document.createElement("p");
                p.innerHTML = "<p class='redText'> you missed </p>";
                results.appendChild(p);
            }else{
                let p = document.createElement("p");
                p.innerHTML = "<p class='greenText'>the allien missed you </p>";
                results.appendChild(p);
            }
        }
    }
   
}

//generate a random number for alliens
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

function startGame(){
    document.getElementById("retreatID").removeAttribute("disabled");
    document.getElementById("attackID").removeAttribute("disabled");
    let backgroundSound = new Audio('sounds/game-music-loop-7-145285.mp3');
    backgroundSound.play();
    backgroundSound.loop =true;
    
    player = new Player("USS_Assembly");
    playerTurn = player.name;

    alliens.push(new Player("1"));
    alliens.push(new Player("2"));
    alliens.push(new Player("3"));
    alliens.push(new Player("4"));
    alliens.push(new Player("5"));
    alliens.push(new Player("6"));
    target = alliens[0];
    console.log(target.ship.hull+" "+target.ship.firepower); 
    document.getElementById('allignHull').textContent = "Allign Hull: "+target.ship.hull;
    document.getElementById('allignFirepower').textContent = "Firepower: "+target.ship.firepower;
   
    document.getElementById("playerTurn").textContent = playerTurn;

}


function attackTarget(){
    // 
    // console.log(theTarget.ship.hull);
    let hitLaser = new Audio('sounds/hit-soundvideo-game-type-230510.mp3');
    hitLaser.play();

    if(playerTurn === "USS_Assembly"){
        target.attack(player);
    }
    else{
        player.attack(target);
    }
    

    console.log(playerTurn);
    switchPlayers();
    console.log(playerTurn);
    document.getElementById("playerTurn").textContent = playerTurn;

    document.getElementById('allignHull').textContent = "Allign Hull: "+target.ship.hull;
    document.getElementById('allignFirepower').textContent = "Firepower: "+target.ship.firepower;

    document.getElementById('playerHull').textContent = "Player Hull: "+player.ship.hull;
    document.getElementById('playerFirepower').textContent = "Firepower: "+player.ship.firepower;
    if(target.ship.hull<=0){
        console.log("remove target"+target.name);
        let explosion = new Audio('sounds/my-first-recorded-explosion-103816.mp3');
        explosion.play();
        let p = document.createElement("p");
        p.innerHTML = `<p class='greenText'>the allien# ${target.name}  </p>`;
        results.appendChild(p);
        document.getElementsByClassName(target.name)[0].remove();

        alliens.shift();
        if(alliens.length === 0){
            alert("You Win!!!!!");

        }else {
            target = alliens[0];
            console.log(target.name);
        }
    }
    else if(player.ship.hull <=0 ){
        let loseSound = new Audio("sounds/you-lose-game-sound-230514.mp3");

        loseSound.play();
        alert("Game Over");
    }
}

function switchPlayers(){
    if(playerTurn === "USS_Assembly"){
        playerTurn = target.name;
    }
    else{
        playerTurn = "USS_Assembly";
    }
}
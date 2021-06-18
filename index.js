
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let results = document.querySelector('h1')

const randomNumber1 = () => {
    return  Math.floor(Math.random() * 6) + 1;
 
}

const displayDice = (value1, value2) => {
   switch (value1) {
       case 1:
       img1.src =  "images/dice1.png"
       break;
       case 2:
       img1.src =  " images/dice2.png"
       break;
       case 3:
       img1.src =  " images/dice3.png"
       break;
       case 4:
       img1.src =  " images/dice4.png"
       break;
       case 5:
       img1.src =  " images/dice5.png"
       break;
       case 6:
       img1.src =  " images/dice6.png"
       break;

   }
    
   switch (value2) {
    case 1:
    img2.src =  "images/dice1.png"
    break;
    case 2:
    img2.src =  " images/dice2.png"
    break;
    case 3:
    img2.src =  " images/dice3.png"
    break;
    case 4:
    img2.src =  " images/dice4.png"
    break;
    case 5:
    img2.src =  " images/dice5.png"
    break;
    case 6:
    img2.src =  " images/dice6.png"
    break;

}

if (value1 === value2) {
    results.innerHTML = "Draw"
} else if(value1 > value2){
    results.innerHTML = "Player 1 wins"
}else{
    results.innerHTML = "Player 2 wins"
}
}
displayDice(randomNumber1(), randomNumber1());
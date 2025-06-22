let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userpara=document.querySelector("#user-score");
const computers=document.querySelector("#comp-score");

const computerchoice = ()=>{
   let arr = ["rock","paper","scissors"]
  const randomidx = Math.floor(Math.random()*3);
  return arr[randomidx];

}
const draw = () =>{
    // console.log("draw game.")
    msg.innerText="Draw game"
    msg.style.backgroundColor="green"
}
const showwinner= (usewin)=>{
   if(usewin){
userScore++;
userpara.innerText=userScore;

    // console.log("you win")
    msg.innerText="You win! you beat computer";
    msg.style.backgroundColor="blue"

   }else{
    compScore++;
    computers.innerText=compScore;
    // console.log("you lose")
    msg.innerText="You lose!computer beat you"
    msg.style.backgroundColor="red"

   }
}
const playGame = (choiceId)=>{
    console.log("user choice =",choiceId)
    const compchoice= computerchoice();
    console.log("computer choice =",compchoice);
    if(choiceId === compchoice){
        draw();
    }else {
        let usewin= true;
        if(choiceId === "rock"){
            usewin = compchoice === "paper" ? false: true;
        }else if(choiceId === "paper"){
            usewin = compchoice === "scissors" ? false: true;
        } else{
            usewin = compchoice === "rock" ? false: true;
        }
        showwinner(usewin);
    }
};
choices.forEach((choice) =>{
choice.addEventListener("click", ()=>{
    const choiceId = choice.getAttribute("id")
// console.log("radhe radhe",choiceId)
playGame(choiceId);
computerchoice()
})
})
    
const choices=['paper','rock','scissors'];
const buttons=document.querySelectorAll('.pick');
//console.log(pickRandomChoice());
const reset=document.getElementById('reset');
const main=document.getElementById('main');
const selection=document.getElementById('selection');
let score=0;
const scoreEl=document.getElementById('score');
let userChoice=undefined;
const user_select=document.getElementById('user-select');
const computer_select=document.getElementById('computer-select');
const winner=document.getElementById('win');
// model button stuff
   const open=document.getElementById('open');
   const close=document.getElementById('close');
   const model=document.getElementById('model');
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        userChoice=button.getAttribute('data-choice');
        main.style.display='none';
        selection.style.display='flex';
        checkWinner();
        
    });
});
reset.addEventListener('click',()=>{
    main.style.display='flex';
    selection.style.display='none';
});
open.addEventListener('click',()=>{
    model.style.display='flex';
    selection.style.display='none';
});
close.addEventListener('click',()=>{
    model.style.display='none';
});
function checkWinner(){
    const computerChoice=pickRandomChoice();
    // update the selection
    updateSelection(user_select,userChoice);
    updateSelection(computer_select,computerChoice);

    if(userChoice==='paper' && computerChoice=='rock'||
    userChoice=='rock'&& computerChoice=='scissors'||
    userChoice=='scissors'&& computerChoice==='paper'){
       updateScore();
       winner.innerText='win';
    }else if(userChoice==computerChoice){
       winner.innerText='draw'
    }else{
       winner.innerText='lose' 
       //updateScore(-1);
    }
    //show the selection
}
function pickRandomChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}
function updateScore(){
  score+=1;
  scoreEl.innerText=score;
}

function updateSelection(selectionEl,choice){
    // class reset
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');
    selectionEl.classList.add(`btn-${choice}`);
    // update the image
    const img=selectionEl.querySelector('img');
    img.src=`./images/icon-${choice}.svg`;
    img.alt=choice;
}

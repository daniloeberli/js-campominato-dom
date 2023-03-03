"use strict";

/*
FUNCTION
*/

function resetGame(){
    
    const boardContainer = document.querySelector('.board');
    boardContainer.innerHTML = '';
    bomb = [];
    scoreBoard.innerHTML = 0;
}

function createBoard(cellNumber){
    
    let fragmentBoard = document.createDocumentFragment();

    for(let i = 1; i<= cellNumber; i++){
        //console.log(i);
        const element = document.createElement('div');
        const table = document.getElementById('table');
        element.classList.add('cell');
        element.style.width = `calc(100% / ${Math.sqrt(cellNumber)})`;
        element.style.height = element.style.width;

        element.addEventListener('click', function(){
            //controllo se il numero della casella fa parte delle bombe
            if(bomb.includes(i)){
                element.classList.add('lose');
                element.style.pointerEvents = `none`;
                table.style.pointerEvents = `none`;
                console.log('perso');
            }else{
                element.classList.add('change');
                element.style.pointerEvents = `none`;
                score++;
                scoreBoard.innerHTML = score;
            }
            console.log(score);
           // alert(i);
        })

        element.innerText = i;
        fragmentBoard.append(element);
    }

    return fragmentBoard;
}

function campoMinato(){
    
    const boardContainer = document.querySelector('.board');
    resetGame();

    let cellNumber;
    let level = document.getElementById('level').value;

    switch(level){
        case '2':
            cellNumber = 81;
            break;
        
        case '3':
            cellNumber = 49;
            break;
          
        case '1':
        default:
            cellNumber = 100;        
    }

    console.log(cellNumber);

    const fragmentBoard = createBoard(cellNumber);
    boardContainer.append(fragmentBoard);
}

function bombCreate(){

    let difficulty = document.getElementById('level').value;
    let max;
    
    // a seconda della difficoltà selezioniamo il numero massimo 
    if(difficulty === '1'){
        max = 100;
    }else if(difficulty ==='2'){
        max = 81;
    }else{
        max = 49;
    }
    //creiamo l'array di 16 numeri casuali non duplicati
    while(bomb.length < 16){
        const randomNum = Math.floor(Math.random() * (max - 1) ) + 1;
        if(!bomb.includes(randomNum)){
            bomb.push(randomNum);
        }
    }

    console.log(bomb);
    return bomb;
}

/*
MAIN
*/


const startButton = document.getElementById('game-start');
const resetButton = document.getElementById('game-reset');

let bomb = [];
let score = 0;
let scoreBoard = document.getElementById("score");


startButton.addEventListener('click', campoMinato);
startButton.addEventListener('click',bombCreate)
resetButton.addEventListener('click', resetGame);


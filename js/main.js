"use strict";

/*
FUNCTION
*/

function resetGame(){
    console.log('reset game');
    const boardContainer = document.querySelector('.board');
    boardContainer.innerHTML = '';
}

function createBoard(cellNumber){
    
    console.log('create');
    let fragmentBoard = document.createDocumentFragment();

    for(let i = 1; i<= cellNumber; i++){
        //console.log(i);
        const element = document.createElement('div');
        element.classList.add('cell');
        element.style.width = `calc(100% / ${Math.sqrt(cellNumber)})`;
        element.style.height = element.style.width;

        element.addEventListener('click', function(){
            element.classList.add('change');
            console.log(i);
            alert(i);
        })

        element.innerText = i;
        fragmentBoard.append(element);
    }

    return fragmentBoard;
}

function campoMinato(){
    console.log('inizia il gioco');
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

    if(difficulty === '1'){
        max = 100;
    }else if(difficulty ==='2'){
        max = 81;
    }else{
        max = 49;
    }

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

//let cellNumber;

const startButton = document.getElementById('game-start');
const resetButton = document.getElementById('game-reset');

let bomb = [];

//bombCreate();

startButton.addEventListener('click', campoMinato);
startButton.addEventListener('click',bombCreate)
resetButton.addEventListener('click', resetGame);
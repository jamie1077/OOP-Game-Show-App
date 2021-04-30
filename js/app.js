/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const startGame = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');

startGame.addEventListener('click', () => {
    game = new Game;
    game.startGame();
});

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
keyboard.addEventListener('click', (e) =>{
    if(e.target.tagName === 'BUTTON'){
        game.handleInteraction(e.target);
    }
});
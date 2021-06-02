/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const startGame = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');
const keys = document.querySelectorAll('.key');

/**
 * Listens for clicks on the start game button
 */
startGame.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});


//Listens for clicks on the games keyboard buttons and pass it to the handleInteraction method
keyboard.addEventListener('click', (e) =>{
    if(e.target.tagName === 'BUTTON'){
        game.handleInteraction(e.target);
    }
});


//Listen for key presses on the player's keyboard
document.addEventListener('keydown', (e) => {
    //get the value of the key pressed and pass it to the handleInteraction method
    let keyPress = e.key;
    keys.forEach((key) => {
        if(key.textContent === keyPress && key.disabled === false){
            game.handleInteraction(key);
        }
    });
});

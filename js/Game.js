/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases(){
        const phrases = [
            new Phrase('May the Force be with you'), 
            new Phrase('Live long and prosper'),
            new Phrase('Houston we have a problem'),
            new Phrase('Nobody puts Baby in a corner'),
            new Phrase('Thats why they call it the jungle sweetheart')
        ]
        
        return phrases;
    }

    
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase(){
        const randomPhase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhase];
    };


    /**
     * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };


    
    resetGame(){
        const phrase = document.querySelector('#phrase ul');
        phrase.innerHTML = '';

        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.className = 'key';
            key.disabled = false;
        });

        const lives = document.querySelectorAll('#scoreboard li img');
        lives.forEach(life => {
            life.src = 'images/liveHeart.png';
            life.parentElement.className = 'tries';
        });

        this.missed = 0;
    }


    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        if(hiddenLetters.length === 0){
            return true;
        } else{
            return false;
        }
    };


    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const lives = document.querySelectorAll('#scoreboard li img');
        lives[this.missed].src = 'images/lostHeart.png';
        lives[this.missed].alt = 'Lost Heart Icon';
        this.missed++;

        if(this.missed === 5){
            this.gameOver(false);
        }
    };

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
    */
        handleInteraction(button) {
        const key = button.textContent;
        const guessed = this.activePhrase.checkLetter(key);
        
        //Disable the selected letter's onscreen keyboard button once guessed.
        button.disabled = true;

        /**
         * If the guessed letter is not in the active phrase add a class to the button to highlight on screen to user
         * Remove a life for an incorrect guess
         */
        if (!guessed) {
            button.classList.add('wrong');
            this.removeLife();
        }
        
        /**
         * If the guessed letter is present in the active phrase add class to button to highlight on screen to user
         * Show the correct guessed letter in the active phrase
         * Check if the guess wins the game and if so show the win screen
         */
        if(guessed) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(key);
            const win = this.checkForWin();
            if(win){
                this.gameOver(true);
            }
        }
    };


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const statusOverlay = document.querySelector('#overlay');
        statusOverlay.style.display = 'flex';
        const gameOverTitle = document.querySelector('#game-over-message');
        
        if(gameWon){
            statusOverlay.className = 'win';
            gameOverTitle.innerHTML = 'Congratulations you won!';
        }else{
            statusOverlay.className = 'lose';
            gameOverTitle.innerHTML = 'Better luck next time!';
        }
        this.resetGame();
    };
}
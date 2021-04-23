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
    }


    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
}
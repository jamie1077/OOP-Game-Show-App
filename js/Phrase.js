/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     * This method adds letter placeholders to the display when the game starts. 
     * Each letter is presented by an empty box, one list item for each letter
    */
    addPhraseToDisplay(){
        const phraseList = document.querySelector('#phrase ul');
        const letters = this.phrase.split('');
        let html = ``;

        letters.forEach(letter => {
            if(letter !== ' '){
                html += `<li class="hide letter ${letter}">${letter}</li>`;
            }else{
                html += `<li class="space">${letter}</li>`;
            }
        });
        phraseList.innerHTML = html;
    };


    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        if(this.phrase.includes(letter)){
            return true;
        } else{
            return false;
        }
    };


    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
    */
     showMatchedLetter(letter) {
      const matchingLetters = document.querySelectorAll(`.${letter}`);
      
      matchingLetters.forEach(letter => {
          letter.className = 'show';
      })
    };
}
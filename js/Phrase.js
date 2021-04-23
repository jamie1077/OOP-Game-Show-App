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
    }

    checkLetter(){

    }

    showMatchedLetter(){

    }
}
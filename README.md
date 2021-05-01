# OOP Game Show App
A browser-based, word guessing game called "Phrase Hunter." The game selects a random hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, that letter is disabled on the onscreen keyboard.

## Extra features and custom styles
Lets players use their physical computer keyboard to enter guesses using the keydown event.

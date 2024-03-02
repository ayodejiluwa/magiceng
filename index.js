class CardGame {
    constructor() {
      this.cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
      this.currentCard = null;
    }
  
    startNewGame() {
      // Randomly select a card from the deck
      const randomIndex = Math.floor(Math.random() * this.cards.length);
      this.currentCard = this.cards[randomIndex];
      console.log('New game started! Try to guess the card.');
    }
  
    makeGuess(guess) {
      if (!this.currentCard) {
        console.log('Please start a new game first.');
        return;
      }
  
      console.log(`Your guess: ${guess}`);
  
      if (guess === this.currentCard) {
        console.log('Congratulations! You guessed the card correctly.');
      } else {
        console.log(`Sorry, the correct card is: ${this.currentCard}`);
      }
  
      // Reset the current card for the next game
      this.currentCard = null;
    }
  }
  
  // Example usage
  const myCardGame = new CardGame();
  myCardGame.startNewGame();
  myCardGame.makeGuess('Ace');
  
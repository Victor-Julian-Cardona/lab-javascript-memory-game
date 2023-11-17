class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards) {
      let cardsCopy = []
      for (let i = 0; i < 24; i++) {
        let randIndex = Math.floor(Math.random() * this.cards.length)
        let removedCard = this.cards.splice(randIndex,1)
        cardsCopy.push(removedCard)
        }
        this.cards = cardsCopy
      }
    return this.cards
}


  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 == card2) {
      this.pairsGuessed++
      return true
    }
    else {
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed == 12) {
      return  true
    }
    else {
      return false
    }
  }
}

import displayScore from './DisplayScores.js';

class Score {
  constructor() {
    this.scoreList = document.querySelector('.list-items');
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3qWxqEPmfgDZUgyvSL6w/scores/';
  }

  render = () => {
    displayScore(this.scoreList, this.url);
  };
}
export default Score;
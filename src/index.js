import './styles.css';
import Score from '../modules/ScoreBoard.js';
import sendScore from '../modules/sendScores.js';

const Form = document.getElementById('form');
const refresh = document.getElementById('refresh');
const score = new Score();
score.render();
refresh.addEventListener('click', () => {
  window.location.reload();
});
Form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendScore(score.url, score.render);
});

import getScores from './getScoresData.js';

const displayScore = async (scoreList, url) => {
  const data = await getScores(url);
  scoreList.innerHTML = '';
  data.result.forEach((item) => {
    const scoreItems = `  <li><label>${item.user} : ${item.score}</label></li>`;
    scoreList.innerHTML += scoreItems;
  });
};
export default displayScore;
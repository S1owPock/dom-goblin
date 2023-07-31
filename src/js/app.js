function randomise(value) {
  return Math.floor(Math.random() * (value + 1));
}
  
const startGame = () => {
  const hole = document.getElementsByClassName('hole');
  const img = '<img src="./img/goblin.png">';
  const max = hole.length - 1;
  let index;
  let last;
  setInterval(() => {
    index = randomise(max);
    if (index === last) {
      index += 1;
      if (index > max) {
        index = 0;
      }
    }
    hole.item(index).innerHTML = img;
    hole.item(last).innerHTML = ' ';
    last = index;
  }, 1000);
};
  
startGame();

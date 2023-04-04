var word = '',
  wordGuess = [],
  wrongGuess = [],
  guessBomb = 0,
  winCount = 1,
  guess = '',
  dif = 0;
function chooseDif1() {
  dif = 1;
  document.getElementById('startButton').style.display = 'block';
  document.getElementById('chooseDifficulty').style.display = 'none';
}
function chooseDif2() {
  dif = 2;
  document.getElementById('startButton').style.display = 'block';
  document.getElementById('chooseDifficulty').style.display = 'none';
}
function chooseDif3() {
  dif = 3;
  document.getElementById('startButton').style.display = 'block';
  document.getElementById('chooseDifficulty').style.display = 'none';
}
function wordw() {
  var randomWords = [
    'humor',
    'miniature',
    'amusing',
    'creepy',
    'fact',
    'risk',
    'verse',
    'land',
    'lumpy',
    'holiday',
    'glorious',
    'weigh',
    'brake',
    'pretty',
    'grin',
    'capricious',
    'misty',
    'ignore',
    'certain',
    'sloppy',
    'dress',
    'true',
    'zonked',
    'observation',
    'action',
    'various',
    'want',
    'direful',
    'suck',
    'dress',
    'scarecrow',
    'judge',
    'madly',
    'quizzical',
    'consist',
    'fierce',
    'love',
    'arrest',
    'serve',
    'fit',
    'hug',
    'tan',
    'curve',
    'eatable',
    'tub',
    'race',
    'innocent',
    'open',
    'preach',
    'steady',
    'acoustics',
    'lock',
    'field',
    'arrange',
    'rifle',
    'learned',
    'toe',
    'flow',
    'competition',
    'oatmeal',
    'match',
    'male',
    'measure',
    'loaf',
    'smile',
    'wrestle',
    'dull',
    'food',
    'locket',
    'bell',
    'beg',
    'strengthen',
    'responsible',
    'enchanting',
    'loutish',
    'switch',
    'idea',
    'nine',
    'squeamish',
    'pig',
    'bat',
    'dear',
    'trains',
    'owe',
    'frogs',
    'assorted',
    'lonely',
    'hurry',
    'natural',
    'sun',
    'snow',
    'obnoxious',
    'broken',
    'friend',
    'bright',
    'cake',
    'sour',
    'permit',
    'economic',
    'lovely',
    'quick',
    'van',
    'tempt',
    'apparel',
    'decay',
    'business',
    'adjustment',
    'blushing',
    'makeshift',
    'slippery',
    'load',
    'winter',
    'exist',
    'tongue',
    'country',
    'roll',
    'fast',
    'moor',
    'possess',
    'pat',
    'pass',
    'books',
    'impartial',
    'hospitable',
    'dust',
    'naughty',
    'tacky',
    'produce',
    'committee',
    'fuzzy',
    'judicious',
    'nebulous',
    'stick',
    'ear',
    'copy',
    'friendly',
    'press',
    'distinct',
    'vegetable',
    'upset',
    'venomous',
    'statement',
    'sulky',
    'spell',
    'square',
    'taste',
    'great',
    'thumb',
    'adjoining',
    'chilly',
    'test',
    'ancient',
    'green',
    'badge',
    'work',
    'repeat',
    'free',
    'elderly',
    'doctor',
    'difficult',
    'grubby',
    'approval',
    'turn',
    'vivacious',
    'thundering',
    'cherries',
    'rest',
    'plan',
    'crime',
    'sticks',
    'wealthy',
    'phone',
    'suspend',
    'gullible',
    'fence',
    'note',
    'wall',
    'interest',
    'coil',
    'jump',
    'enchanted',
    'funny',
    'racial',
    'greasy',
    'polish',
    'elbow',
    'smart',
    'bore',
    'crowd',
    'glistening',
    'oval',
    'eggs',
    'nauseating',
    'detailed',
    'veil',
    'coal',
  ];
  return randomWords[Math.floor(Math.random() * 70)];
}
function wordStart() {
  for (i = 0; i < word.length; i++) wordGuess.push(' _ ');
}
function winCountFunc() {
  var num = 0;
  var lettUsed = '';
  var count = word.length;
  while (count > 0) {
    if (lettUsed.includes(word[count - 1])) {
    } else {
      num += 1;
      lettUsed += word[count - 1];
    }
    count -= 1;
  }
  return num;
}
function start() {
  word = wordw();
  winCount = winCountFunc();
  if (dif == 1) guessBomb = word.length + 5;
  else if (dif == 2) guessBomb = word.length;
  else if (dif == 3) {
    if (word.length % 2 == 0) guessBomb = word.length / 2;
    else guessBomb = (word.length - 1) / 2;
  }
  console.log(word);
  document.getElementById('mainGame').style.display = 'block';
  document.getElementById('startButton').style.display = 'none';
  document.getElementById('question').innerHTML = 'Enter your first guess';
  wordStart();
  document.getElementById('RRguess').style.display = 'block';
  document.getElementById('rightGuess').innerHTML =
    'word progress: ' + wordGuess;
  document.getElementById('wrongGuess').innerHTML =
    'Wrong guesses: ' + wrongGuess;
  document.getElementById('guessesLeft').innerHTML =
    'Guesses remaining: ' + guessBomb;
}
function enterGuess() {
  var lett = document.getElementById('guess').value;
  document.getElementById('guess').value = '';
  if (lett.length === 1) {
    if (word.includes(lett) == true) NewCW(lett);
    else if (!wrongGuess.includes(lett)) {
      console.log('hi');
      wrongGuess.push(lett);
      guessBomb -= 1;
    }
  } else if (lett.length < 1) {
  } else guessBomb -= 1;
  if (guessBomb <= 0) gameLose();
  if (winCount <= 0) gameWin();
  document.getElementById('rightGuess').innerHTML =
    'word progress: ' + wordGuess;
  document.getElementById('wrongGuess').innerHTML =
    'Wrong guesses: ' + wrongGuess;
  document.getElementById('guessesLeft').innerHTML =
    'Guesses remaining: ' + guessBomb;
}
function NewCW(letter) {
  var count = 0;
  winCount -= 1;
  while (count <= word.length - 1)
    if (letter === word[count]) {
      wordGuess[count] = letter;
      count += 1;
    } else count += 1;
}
function gameLose() {
  document.getElementById('mainGame').style.display = 'none';
  document.getElementById('RRguess').style.display = 'none';
  document.getElementById('youLose').style.display = 'block';
  document.getElementById('correctWordWas').innerHTML =
    'The correct word was ' + word;
}
function gameWin() {
  document.getElementById('mainGame').style.display = 'none';
  document.getElementById('RRguess').style.display = 'none';
  document.getElementById('youWin').style.display = 'block';
}
function restart() {
  document.getElementById('mainGame').style.display = 'none';
  document.getElementById('RRguess').style.display = 'none';
  document.getElementById('youLose').style.display = 'none';
  document.getElementById('youWin').style.display = 'none';
  document.getElementById('chooseDifficulty').style.display = 'block';
  word = '';
  wordGuess = [];
  wrongGuess = [];
  guessBomb = 0;
  winCount = 1;
  guess = '';
  dif = 0;
}

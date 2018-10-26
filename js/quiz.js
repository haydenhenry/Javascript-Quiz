var philosophyQuiz = [
  ['IMMANUEL KANT', 'Experience without theory is blind, but theory without experience is mere intellectual play'],
  ['LUDWIG WITTGENSTEIN', 'The limits of my language are the limits of my mind. All I know is what I have words for.'],
  ['WILLIAM SHAKESPEARE', 'What a piece of work is a man, how noble in reason, how infinite in faculties, in form and moving how express and admirable, in action how like an angel, in apprehension how like a god!']
];
let correctAnswers = 0;

for (var i = 0; i < philosophyQuiz.length; i += 1) {
  let answer = prompt('Who was it that said "' + philosophyQuiz[i][1] + '"?');
  if ( answer.toUpperCase() === philosophyQuiz[i][0]) {
    alert('Correct!');
    correctAnswers += 1;
  } else {
    alert('Sorry, wrong answer.')
  }
}

let score = '<p>You got ' + correctAnswers + ' out of 3 answers correct.</p>';

function print(message) {
  document.write(message);
}

print(score);

'use strict';

const secretFunc = function() {
  let digits = 4;
  let result = '';
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  while (digits--) {
    const j = Math.floor(Math.random() * arr.length);

    result += arr[j];
    arr.splice(j, 1);
  }

  return result;
};

const secret = secretFunc();
let guess;

document.getElementById('guess').oninput = function() {
  guess = document.getElementById('guess').value;
};

const getHint = function() {
  let a = 0;
  let b = 0;
  const x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      a++;
    } else {
      if (x[+secret[i]] < 0) {
        b++;
      }

      if (x[+guess[i]] > 0) {
        b++;
      }
      x[+secret[i]]++;
      x[+guess[i]]--;
    }
  }

  return `відгадано ${a} биків та ${b} корів`;
};

let count = 0;

document.getElementById('button').onclick = function() {
  count++;

  document.getElementById('result').insertAdjacentHTML(
    'beforeend',
    `<p>Спроба №${count}: введено ${guess}, ${getHint(secret, guess)}</p>`
  );

  if (guess === secret) {
    document.getElementById('result').insertAdjacentHTML(
      'beforeend',
      `<p>Вітаю! Число ${guess} вірне! Ви витратили ${count} спроб</p>
      <button><a href="">Спробувати ще</a></button>`
    );
  }
};

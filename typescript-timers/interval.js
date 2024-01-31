let value = document.querySelector('.countdown-display');

function timer() {
  let currentValue = value.textContent;
  currentValue--;
  value.innerHTML = currentValue;

  if (currentValue === 0) {
    value.innerHTML = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(timer, 1000);

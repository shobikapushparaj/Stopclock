let minutes = 0;
      let seconds = 0;
      let tens = 0;
      let timer = document.querySelector('#timer');
      let Interval;

      function start() {
        clearInterval(Interval);
        Interval = setInterval(() => {
          tens++;
          if (tens <= 9) {
            timer.textContent = '0' + minutes + ':0' + seconds + ':0' + tens;
          }
          if (tens > 9) {
            timer.textContent = '0' + minutes + ':' + seconds + ':' + tens;
          }
          if (tens > 99) {
            seconds++;
            tens = 0;
            if (seconds <= 9) {
              timer.textContent = '0' + minutes + ':0' + seconds + ':0' + tens;
            }
            if (seconds > 9) {
              timer.textContent = '0' + minutes + ':' + seconds + ':' + tens;
            }
          }
          if (seconds > 59) {
            minutes++;
            seconds = 0;
            tens = 0;
            timer.textContent = minutes + ':0' + seconds + ':0' + tens;
          }
          if (minutes > 99) {
            clearInterval(Interval);
          }
        }, 10);
      }

      function stop() {
        clearInterval(Interval);
      }

      function reset() {
        clearInterval(Interval);
        minutes = 0;
        seconds = 0;
        tens = 0;
        timer.textContent = '00:00:00';
      }
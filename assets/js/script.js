
  let timer;
  const COUNTER_KEY = 'my-counter';

  function countDown(i, callback) {
  timer = setInterval(function() {

      hours = parseInt(i / 3600, 10);
      minutes = parseInt((i % 3600) / 60, 10);
      seconds = parseInt(i % 60, 10);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      document.getElementById("counter").innerHTML = "<div class='count-item'><div class='number'>" + hours + "</div><p class='hint'>HOURS</p></div> <div class='count-item'><div class='number'>" + minutes + "</div><p class='hint'>MINUTES</p></div>    <div class='count-item'><div class='number'>" + seconds + "</div><p class='hint'>SECONDS</p></div>";

      if ((i--) > 0) {
      window.sessionStorage.setItem(COUNTER_KEY, i);
      } else {
      window.sessionStorage.removeItem(COUNTER_KEY);
      clearInterval(timer);
      callback();
      }
  }, 1000);
  }

  window.onload = function() {
      let countDownTime = window.sessionStorage.getItem(COUNTER_KEY) || 259200;
      countDown(countDownTime, function() {
          // alert("Show modal");
      });
  };
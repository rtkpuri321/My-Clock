function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  const sechand = document.querySelector(".sec-hand");
      const minhand = document.querySelector(".min-hand");
      const hourhand = document.querySelector(".hour-hand");

      function setdate() {
        const now = new Date();
        const second = now.getSeconds();
        const seconddeg = (second / 60) * 360 + 90;
        sechand.style.transform = `rotate(${seconddeg}deg)`;

        const min = now.getMinutes();
        const mindeg = (min / 60) * 360 + 90;
        minhand.style.transform = `rotate(${mindeg}deg)`;

        const hour = now.getHours();
        const hourdeg = (hour / 12) * 360 + 90;
        hourhand.style.transform = `rotate(${hourdeg}deg)`;
      }

      setInterval(setdate, 1000);

      setdate();
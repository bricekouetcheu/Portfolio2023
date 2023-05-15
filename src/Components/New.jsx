import React, { useEffect } from "react";


function animateSequence() {
  var a = document.getElementsByClassName("sequence");
  for (var i = 0; i < a.length; i++) {
    var $this = a[i];
    var letter = $this.innerHTML;
    letter = letter.trim();
    var str = "";
    var delay = 100;
    for (var l = 0; l < letter.length; l++) {
      if (letter[l] !== " ") {
        str +=
          '<span style="animation-delay:' +
          delay +
          'ms; -moz-animation-delay:' +
          delay +
          'ms; -webkit-animation-delay:' +
          delay +
          'ms; ">' +
          letter[l] +
          "</span>";
        delay += 150;
      } else str += letter[l];
    }
    $this.innerHTML = str;
  }
}

function animateRandom() {
  var a = document.getElementsByClassName("random");
  for (var i = 0; i < a.length; i++) {
    var $this = a[i];
    var letter = $this.innerHTML;
    letter = letter.trim();
    var delay = 70;
    var delayArray = new Array();
    var randLetter = new Array();
    for (var j = 0; j < letter.length; j++) {
      while (1) {
        var random = getRandomInt(0, letter.length - 1);
        if (delayArray.indexOf(random) === -1) break;
      }
      delayArray[j] = random;
    }
    for (var l = 0; l < delayArray.length; l++) {
      var str = "";
      var index = delayArray[l];
      if (letter[index] !== " ") {
        str =
          '<span style="animation-delay:' +
          delay +
          'ms; -moz-animation-delay:' +
          delay +
          'ms; -webkit-animation-delay:' +
          delay +
          'ms; ">' +
          letter[index] +
          "</span>";
        randLetter[index] = str;
      } else randLetter[index] = letter[index];
      delay += 80;
    }
    randLetter = randLetter.join("");
    $this.innerHTML = randLetter;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function New() {
  useEffect(() => {
    animateSequence();
    animateRandom();
  }, []);

  return (
    <div className="animation-state">
      <h1 className="cssanimation sequence leBlurInRight">cssanimation</h1>
      {/* <h1 className="cssanimation leBlurInRight random">cssanimation</h1>
      please uncomment if you want to see random version */}
    </div>
  );
}

export default New;
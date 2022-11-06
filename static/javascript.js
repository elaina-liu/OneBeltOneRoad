let steps;


// ---------- DICE START HERE ----------
let images = ["static/img/dice_1.png", "static/img/dice_2.png", "static/img/dice_3.png", "static/img/dice_4.png", "static/img/dice_5.png", "static/img/dice_6.png"];
let dice = document.querySelectorAll("img[class=die]");

function roll(){
  dice.forEach(function(die){
    die.classList.add("shake");
  });
  setTimeout(function(){
    dice.forEach(function(die){
      die.classList.remove("shake");
    });
    let dieOneValue = Math.floor(Math.random() * 6);
    // let dieTwoValue = Math.floor(Math.random() * 6);

    steps = dieOneValue + 1;
    console.log(steps)

    // console.log(dieOneValue+1, dieTwoValue+1);
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    // document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
  },
  1000
  );
}

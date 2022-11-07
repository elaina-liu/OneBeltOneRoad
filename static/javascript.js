$(document).ready(function() {
    var socket = io.connect("http://localhost:5000");
    let socket_id = Math.floor(Math.random() * 100);
    let steps = 0;
    socket.on('connect', function() {
      // console.log(socket_id)
      socket.send(socket_id.toString() + ": User connected!");
    });

    // ---------- DICE START HERE ----------
    $(".dice-button").click(function (){
        steps = roll();
        setTimeout(function(){
            console.log("I am here");
            console.log("this roll: " + steps);
            socket.send(JSON.stringify({'user':  socket_id.toString(), 'step': steps.toString()}));
            // socket.send("User" + socket_id.toString() + ": " + steps.toString());
        }, 1500);
    });

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
        // console.log(dieOneValue+1, dieTwoValue+1);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        // document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
      },
      1000
      );
    }
})






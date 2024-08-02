var choose = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

var player1 = Math.floor(Math.random() * 6);
var player2 = Math.floor(Math.random() * 6);
if(player1===player2){
    document.querySelector("body .change").innerHTML = "🚩 The Match is Tied";
    document.querySelector("body .dice1 img").setAttribute("src",choose[player1]);
    document.querySelector("body .dice2 img").setAttribute("src",choose[player1]);
    document.querySelector("body .dice").classList.add("marg");
}else if(player1>player2){
    document.querySelector("body .change").innerHTML = "🚩 Player1 Won The Match";
    document.querySelector("body .dice1 img").setAttribute("src",choose[player1]);
    document.querySelector("body .dice2 img").setAttribute("src",choose[player2]);
    document.querySelector("body .dice").classList.remove("marg");
}else{
    document.querySelector("body .change").innerHTML = "🚩 Player2 Won The Match";
    document.querySelector("body .dice1 img").setAttribute("src",choose[player1]);
    document.querySelector("body .dice2 img").setAttribute("src",choose[player2]);
    document.querySelector("body .dice").classList.remove("marg");
}
// $(document).ready(function(){
//     console.log($(h1).css("font"));
// });

$("h1").css("color","blue");
$("h1");    // selecting one 
$("button"); // selecting all

// document.querySelector("h1").style.backgroundColor = "red";

console.log($('h1').css("font"));

$("h1").addClass("big-tittle margin-50");
$("h1").removeClass("big-tittle");
$("h1").hasClass("margint-50"); // gives boolean present or not

$("h1").text("le naya page");
$("button").html("<em>heylo</em>"); // it will add html

$("h1").attr("src");
console.log($("a").attr("href","https:/www.yahoo.com"));

$("button").attr("class");


$("h1").click(function() { 
    $("h1").css("color", "black")
});


// document.querySelectorAll("button").forEach((element, index) => {
//     element.addEventListener("click", () => {
//         element.style.color = "white";
//     });
// });


$("button").click(function(){
    $("button").css("color","purple")
});


//<h1> elements do not naturally receive focus
// $("h1").keypress(function(e){
//     $("h1").text(e.key);
// });

$(document).keypress(function(e){
    $("h1").text(e.key)
});

//fist parameter is eventlistener and second is work
$("h1").on("mouseover",function(){
    $("h1").text("sfdgsfafd");
});

// adding element using before
$("h1").before("<button> new </button>");  
$("h1").after("<button> new </button>");   // we can use prepend and append also

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({margin:"10%"}); // slideToggle(), slideDown(), slideUp(), fadeOut() ,fadein(), fadetoggle(), toggle(), hide() 
});

$("button").click(function(){
    $("button").animate({  // it primarily supports numeric CSS properties.
        opacity: 0.5
        // color: red 
    });
});
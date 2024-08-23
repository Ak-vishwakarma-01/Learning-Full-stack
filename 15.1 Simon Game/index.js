let x = [];
let classes = ["red","green","blue","yellow"];
let count = -1;
document.addEventListener("click",function(e){
    if(x.length===0){
        var randclass = classes[Math.floor(Math.random()*4)];
        x.push(randclass);
        $("."+randclass).fadeOut().fadeIn();
        $(".tittle").text("The game is started")
        $(".tittle").css("margin-left","38%")
        count++;
    }else{
        var cla = e.target.getAttribute("class");
        if(x[count]===cla){
            let len = x.length;
            for(let i=0;i<len;i++ ){
                randclass = classes[Math.floor(Math.random()*4)];
                x.push(randclass);
                $(randclass).fadeOut().fadeIn();
                setTimeout(function(){},100);
            }
            count++;
        }else{
            x = 
            var randclass = classes[Math.floor(Math.random()*4)];
            x.push(randclass);
            $("."+randclass).fadeOut().fadeIn();
            $(".tittle").text("The game is started")
            $(".tittle").css("margin-left","38%")
            count=-1;
        }
    }
    
}); 
//**************************** 16 EVENTS **************************************


// /*
//  HTML:
    
//     <button id="click-me">Click here</button>
//     <button id="hover-me">Move the cursor over here</button>
//     <button id="leave-me">Move the cursor out of here</button>
// */





// // this is for button 1;
// document.getElementById("click-me").onclick = function() {
//     alert('You clicked the button');                                  // after completing this action these 3 will just give an pop up thing.
// };                                                                                   

// // this is for button 2;
// document.getElementById("hover-me").onmouseover = function(){
//     alert("you moved the cursor over here")
// };

// // third one

// document.getElementById("leave-me").onmouseleave = function(){
//     alert("you mouved out the cursor from here")
// };








// document.onkeydown = function() {   // it will give an elert when i press a key in my keyboard
//     alert('You pressed a key');
// };


// document.onkeydown = function(event) {   
//     console.log(event);  //now by this in console we can see which key I have pressed and it will shwo in ascii nu and the key
//     console.log(event.keyCode) // this line will print the only code(ascii value )
// };

// document.onkeydown = function(event){
//     if(event.keyCode==65){
//         console.log("yout pressssd button  a ");
//     }else{
//         console.log("You pressed another button");
//     }
// }




// //  html part             <button onclick="show_alert()">Click here</button>  here in this is fucintion not id 

// function show_alert(){
//     alert("you clicked the button ") // now we are doing this all the thing by using direct function
// }  







/******************************************************* lesoon 17 ******************************************** */
// <button id="color_button">Click here to change color and move it to the right</button>

// document.getElementById("color_button").onclick = function() {
//     document.getElementById("color_button").style['background-color'] = "purple"
//     document.getElementById("color_button").style.transform = "translateX(100px)"
// };
             


// document.getElementById("color_button").onclick = function() {
//     this.style['background-color'] = "purple"                     // the elemetn that receiving the event can be called inside the function by this  
//     this.style.transform = "translateX(100px)"
// };

// var button = document.getElementById("color_button")

// button.onclick = function(){
//     this.style['backgroundColor'] = 'purple'
//     this.style.transform  =translate
// } 


// button.onmouseover = function(){
//     this.style['backgroundColor'] = 'purple'
//     this.style.transform  ='translate(100px)'
// } 






//********************** lesson  18 more getelementby method  */

/* <div class="example">Element #1</div>
<div class="example">Element #2</div>
<div class="example">Element #3</div> */



// var element = document.getElementsByClassName('example')
// console.log(element)       // The console will show an array: [ {...}, {...}, {...} ] , means print all the text which have class name "example"
// console.log(element[0])  // it will print the first element of the array 
// element[0].innerHTML = "Here we are changing the text of first elemtn of this class array "
      

// var tagpara = document.getElementsByTagName('P')
// tagpara[4].innerHTML="this is pragraph one but i am changing to this text"
// console.log(tagpara)







/**************************lessong 19 loops */
// for loop in js is same as in other programming language but ther is one extra for in loop it is as same as for each in java and for auto in c++


// var ob ={
//     "dasfgtyre" : ['dsf',"fsrg"],  // if i use this bracket then it will vlaue of that objects 
//     "sdagserds"   :"fdsgs",
//     'dsfdhsd': {"sdagf":"asdgaag"}  // if use curly bracket then it will become object
// }
// for(var le in ob){
//     console.log(le[0] +" :   " +ob[le]+"\n");  // inside for in loop we can't use ob.le becuse it is ontime created variable 
// }    // for in does't print the vlaue only key and it show the key only 




/* <div class="example">Element 1</div>
<div class="example">Element 2</div>
<div class="example">Element 3</div> */

// var elements = document.getElementsByClassName("example");   

//     for (var a=0;a<elements.length;a++) {
//         elements[a].style.color = "orange";    // we can't use for in loop because we have to give the index of classes
//         elements[a].style['font-weight'] = "bold";
//     }

// document.getElementsByTagName('p').style.color = "orange"   //this is also an erro





/***************************** 20 while loop and do while loop *************************88*/
//**************************   21  conditional ***************************************** */

// if else , ternary if else 

// var name = ""
// if(name){
//     console.log("name has something which is usefull")
// }else{
//     console.log("name is empty")
// }      // this if else ladder only works in js python and php


/************************************* lessong 21 nesting conditional ******************************* */
var employees = [
        
    {
        'name': 'Charles Silva',
        'age': 45,
        'children': ['Andrew Silva', 'Maria Silva']
        
    },

    {
        'name': 'Elizabeth Green',
        'age': 32,
        'children': ['Peter Green']
        
    },

    {
        'name': 'George Banks',
        'age': 39,
        'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
        
    }

];

for (var a = 0; a < employees.length; a++) {
    var childrenList = employees[a].children;
    console.log(childrenList)
    for (var b = 0; b < childrenList.length; b++) {
        var child = childrenList[b];
        document.getElementById("children").innerHTML += " <>" + child + "<><br>"; 
        // we can use br tag to make readable bcos it is goingo to innergmtl so it will support there
    }
}
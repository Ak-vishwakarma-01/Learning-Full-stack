// alert("Testing the allert: ") //without allowing it we can't continui with the borwser
// console.log("this will show inside the console")





// lession nu = 4 working with dom
//*********************************************************************************************************************************************
// console.log(document.getElementById("blue_box").innerHTML); //it will print the content from blue box in the console
// document.getElementById("blue_box").innerHTML = "<h1>Here we are changing the content of the blue box from 04</h1>";
// console.log(document.getElementById("blue_box").innerHTML);



// lession nu = 5 variables
//*********************************************************************************************************************************************

var user_name = "Ankit"   //inside the console we don't need to write the var 
// console.log(user_name);

// document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name +"!" ;


// lession nu = 6 string
//*********************************************************************************************************************************************

console.log(typeof user_name); //it will print the datatype of the variable  in the console of borowser we can dirctly write typeof user_name 

/* INSIE THE CONSOLE 
typeof(user_name)
'string'

typeof user_name
'string'
 
*/

// for string we can use both 

var client_name = "hehe";

var combine = user_name +" " +client_name;

console.log(combine);

console.log(user_name.length+" "+user_name[1]); // it will print the lenght and n 
 
/*   IN THE CONSOLE AFTER INSPECT
 "fsdghf" +"sgdhfsdgf"
'fsdghfsgdhfsdgf'

'asgdfdgfsgd'
'asgdfdgfsgd'
'sfdfdsgfdsgfg' + "fsdgfsdghgfd"
'sfdfdsgfdsgfgfsdgfsdghgfd'

url = "https://www.udemy.com";
url 
'https://www.udemy.com'
url.replace("https://","");
'www.udemy.com'

*/
var url = "https://www.udemy.com";
url = url.replace("https://","");
console.log(url);


// lession nu = 7 number
//*********************************************************************************************************************************************

var num1 = 12234
var num2 = 21345243.4325
console.log(num1 + num2)


// num2.toFixed(3)
// '21345243.433'

var str1  ="12234"
var str2 = '234234'

console.log(parseInt(str1) + parseInt(str2))


// lession nu = 8 booleans
//*********************************************************************************************************************************************

console.log(num1 == str1) // true bcos It will just check the value
console.log(num1 === str1)  //false bcos It will also check datatype
console.log("10" !== 10)  //true 


// lession nu = 9 null and undefined
//*********************************************************************************************************************************************

console.log(str1[45]) //undefined
var temp = 345
temp = null
console.log(typeof(null)) //object = which could be misleading


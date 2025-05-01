// // #1
// console.log("this is 2ex1");

// // #2

// var firstname = "Ankit"
// var lastname = "Kumar"
// var dob = 2001;
// var current_dob = 2020;
// var age = current_dob - dob

// var message = "Hi, my name is "+firstname+" "+lastname+", I'm" +age+ "years old and I'm learning Javascript"
// document.getElementById("student_message").innerHTML = "Hi, my name is "+firstname+" "+lastname+", I'm" +age+ "years old and I'm learning Javascript"

// // #3

// var num1 = parseInt(document.getElementById("num_1").innerHTML);
// var num2 = parseInt(document.getElementById("num_2").innerHTML);
// var average = (num1 + num2)/2
// console.log(average)

// document.getElementById("result").innerHTML = "result is " + average.toFixed(2)

// // #4

// var phone1 = "988866552";
// var phone2 = "99087612366";
// var phone3 = 876543123;        // we cannot use length with number
// phone3 = phone3.toString()
// console.log(phone1.length == 9)
// console.log(phone2.length == 9)
// console.log(phone3.length == 9)  

// #5 

console.log(Math.pow(32,6))
console.log(32**6)

// 11 fuctions
function ak(){
    var name = "hehehehj";
    var nd2 = "hehehlelel";
    console.log(name+"   "+ nd2);
}

ak();

function sut( a, b){
    var name = "hehehehj";
    var nd2 = "hehehlelel";
    console.log(name+"   "+ nd2);
    return a+b;
}
console.log(sut(3245,2345));
document.getElementById("sum_result").innerHTML  = sut(234,2345);
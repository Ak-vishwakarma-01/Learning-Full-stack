const fs = require('node:fs');

fs.writeFile("message.txt","le bhaiye ho gaya create ye padh lena",(err)=>{
    if(err) throw err;
    console.log("nhi aya error");
});

fs.readFile("message.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data+"  \n uper jo likha hai whi padha hu" );
});



const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };

// for (const item of data.items) {
//     console.log(item);
// }

data.items.forEach(element => {
    console.log(element)
});
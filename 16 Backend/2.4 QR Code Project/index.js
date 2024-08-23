/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
/*
Migrating from CommonJS to ESM:
Replace require statements with import.
Replace module.exports with export or export default.
Use dynamic import() for async loading.
Use import.meta.url for file paths.
*/

import inquirer from 'inquirer';
// we can't use require with type:'module'
import { writeFile } from 'fs/promises';
import { createWriteStream } from 'fs';
import qr from 'qr-image';

const inputs = {
    type: 'input',
    name: 'userInput',
    message: 'Please enter your input:',
  };

  inquirer.prompt([inputs]).then((answer) =>{
    const qrcode = answer.userInput;
    textCreat(qrcode);
    qrCreate(qrcode);
 });

// await is only used with async function

async function textCreat(inputText){
    /*
    writeFile("message.txt", inputText,(err)=>{
            console.log("this is the error i am getting "+err);
    });
    */
    try {
        await writeFile("./message.txt", inputText);
    } catch (err) {
        console.error("Error writing file:", err);
    }
}

function qrCreate(inputText) {
    var qr_svg = qr.image(inputText);
    qr_svg.pipe(createWriteStream("./qr_img.png"));
}

// process.cwd() it is used to check current working dirctory
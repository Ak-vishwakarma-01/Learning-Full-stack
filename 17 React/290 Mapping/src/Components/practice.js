import emojipedia from "./Emojipedia";


var lelo = emojipedia.map(function(x){
    return x.meaning.substring(0,101);
});

// console.log(lelo);

export default lelo;
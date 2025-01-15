// Hello there -> HeLlO tHeRe
function sarcasticCase(str){
    let isCapitalLetter = true;
    let sarcasticMessage = [];

   for(let char of str){
    if(char !== " "){ 
        if(isCapitalLetter){
            const letter = char.toUpperCase();
            sarcasticMessage = [...sarcasticMessage, letter];
            isCapitalLetter = false;
        }else{
            const letter = char.toLowerCase();
            sarcasticMessage = [...sarcasticMessage, letter];
            isCapitalLetter = true;
        } 
    } else{
        sarcasticMessage = [...sarcasticMessage, " "]
    }  
    
   }

   // console.log(sarcasticMessage.join(""));
   return sarcasticMessage.join("");
}

console.log(sarcasticCase('Hello There eroror'));


// according to tutorila
function sarcasticCase2(str){
    let newString = "";
    for(let i=0; i < str.length; i++){
        // if(i % 2 === 0 ){ // even number
        //     newString = newString + str[i].toUpperCase();
        // }else{
        //     newString = newString + str[i].toLowerCase();
        // }

        newString = i % 2 ? newString + str[i].toUpperCase() : newString + str[i].toLowerCase();
    }

    return newString;
}

console.log(sarcasticCase2("hello man how are"));
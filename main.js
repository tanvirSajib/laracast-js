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
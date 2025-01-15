
function noSpace(str){
    // let newString = "";
    // for(let i=0; i< str.length; i++){
    //     if(str[i] !== " "){
    //         newString = newString + str[i];
    //     }
      
    // }
    // return newString;
    return str.split(" ").join("");
}

console.log(noSpace("Hello There"));
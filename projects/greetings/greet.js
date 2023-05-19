//reference the textarea
const text = document.querySelector(".textBox");
//reference the button
const greetBtn = document.querySelector(".button");
// refrence the radio button
const selectLanguage = document.querySelector(".languageRadio");



function greet(name){
    var enterName = text.value
   
    if(enterName === "isixhosa"){
        return "Molo" + name
        
    }else if(enterName === "english"){
        return "Hello" + name

    }else{"select a language"}
    
}
    greetBtn.addEventListener("click", greet)


   
    



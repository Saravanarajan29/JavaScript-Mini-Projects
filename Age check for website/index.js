const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick=function(){

    age = myText.value;
    // age = Number(age);

    if(age >= 100){
        resultElement.textContent ="you are too old to enter this site";
    }
    else if(age == 0){
        resultElement.textContent = `you were just born and not allowed to enter the site`;
    }
    else if(age >= 18){
        resultElement.textContent = `you are old enough to enter the site`;
    }
    else if(age < 0){
        resultElement.textContent = `your age can't below 0`;
    }
    else{
        resultElement.textContent = `you must be 18+ to enter this site`;
    }

}
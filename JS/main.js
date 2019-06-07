function welcomeUser(){


    var name = prompt("Enter your name:");
    alert("Welcome! "+ name);

}
welcomeUser()




function biggerNum(){

 var num1=parseInt(prompt("Enter first number"));
 var num2=parseInt(prompt("Enter second number"));

    if (num1>num2){
        console.log(num1+" is the bigger number");
    }
    else if(num2>num1){
        console.log(num2+" is the bigger number");
    }
    else if(num1==num2){
        console.log("The numbers are the same");
    }
    else{
        console.log("You didn't enter two numbers");
    }
}
biggerNum()






function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}













function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed!"; 
  }
    








function encryptMsg(){
  var plainText = prompt("Enter Your Message");
  
  for(var i=0; i<plainText.length; i=i+2){
    temp = plainText[i];
    plainText[i] = plainText[i+1];
    plainText[i+1] = temp;
    cipherText =plainText[i] + plainText[i+1];
    console.log(cipherText.toLowerCase);
    
  }
}
encryptMsg()







var btns = document.querySelectorAll(".buttons button");
var bear = document.getElementByClassName("bear")[0];

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", manageBearClasses);
}


function manageBearClasses() {
  if (this.getAttribute("data-add")) {  
    bear.classList.add(this.getAttribute("data-add"));
  }

  if (this.getAttribute("data-remove")) {  
    bear.classList.remove(this.getAttribute("data-remove"));
  }
}
function welcomeUser(){


    var name = prompt("Enter your name:");
    alert("Welcome! "+ name);

}




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
  
  for(var i=0; i<plainText.length; i=i+2;){
    temp = plainText[i];
    plainText[i] = plainText[i+1];
    plainText[i+1] = temp;
    cypherText = cypherText + plainText[i] + plainText[i+1];
    console.log(cypherText());
    
  }
}
encryptMsg()






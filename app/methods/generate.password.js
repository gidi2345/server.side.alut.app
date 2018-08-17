/* File Name:./app/methods/generate.password.js*/



function  generateTempPassword()
{
  var MAX_PASSWORD_LENGTH =8; 
  var generatedPassword="";
  var chooseRandomCharacter=[];

  


for(let i=0;i<MAX_PASSWORD_LENGTH;++i)
{
  var number = Math.floor((Math.random()*8) + 49); //1-9
  var lowerCase = Math.floor((Math.random()*25) + 65);//A-Z
  var UpperCase = Math.floor((Math.random()*25) + 97);//a-z
  
  chooseRandomCharacter[0]=number; 
  chooseRandomCharacter[1]=lowerCase;
  chooseRandomCharacter[2]=UpperCase;

  var rand =  Math.floor((Math.random()*3) + 0);//choose random between 1-9 a-z A-Z evert time

  generatedPassword =generatedPassword.concat(String.fromCharCode(chooseRandomCharacter[rand]));
   
}

return generatedPassword.toString();

}

module.exports.generateTempPassword = generateTempPassword;




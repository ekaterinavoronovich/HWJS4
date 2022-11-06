
let UserName = prompt("Please, enter your name");

   function CheckUserName (str){
       if (str.length === 0){
        return UserName ='User';
       }
   }
CheckUserName (UserName);

 const Value =['rock', 'scissors', 'paper'];

 let ValueUser ="";

 function  CheckValueUser (){
    ValueUser = prompt('Rock, Scissors, Paper... Please make your move','');
     if ( ValueUser === null ) {
     alert('You aborted this game. To start new game just refresh the page.');
     window.stop();
     }
     if (Value.indexOf(ValueUser.toLowerCase()) != -1){ 
     return;
    }
    CheckValueUser();
    }

  let ValueComputer ="";
  function  GetValueComputer () {
  ValueComputer= Value[Math.floor(Math.random()* Value.length)];
    alert (`Computer move is: ${ValueComputer}`);
  }

 let resultUser = 0; 
 let resultComputer=0;

 function CompareValue () {
if (ValueUser == ValueComputer){ 
   return;
}
if (ValueUser == 'rock' && ValueComputer == 'scissors'){
  resultUser = resultUser + 1;
}
if (ValueUser == 'rock' && ValueComputer == 'paper'){
     resultComputer =resultComputer+ 1;
   
}
if (ValueUser == 'scissors' && ValueComputer == 'rock'){
     resultComputer =resultComputer+ 1;
   
}
if (ValueUser == 'scissors' && ValueComputer == 'paper'){
  resultUser =resultUser + 1;
  
}
if (ValueUser == 'paper' && ValueComputer == 'rock'){
  resultUser = resultUser+ 1;
}
if (ValueUser == 'paper' && ValueComputer == 'scissors'){
   resultComputer = resultComputer+ 1;
 }
 }
  function WinGame(){
  if (resultComputer > resultUser) {
    alert(`Sorry. You lost this game. Count - You: ${resultUser} : Computer ${resultComputer}`);
  } 
  else { alert (`Congratulations. You won this game. Count - You: ${resultUser} : Computer ${resultComputer}`);
  }
 }

 function Game () {
 while ( resultUser !=3 && resultComputer !=3){
  CheckValueUser ();
  GetValueComputer();
  CompareValue ();
  alert (`Current count is ${UserName} : ${resultUser} : Computer ${resultComputer}`);
}  WinGame();
 if (confirm(`Do you want to start new game?`)){
  resultComputer = 0;
  resultUser =0;
  Game();
 }
 }
 
Game();


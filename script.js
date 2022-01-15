let playerchoice;
let computernumber=Math.round(Math.random()*2);
let computerscore=0;
let personscore=0;
let computerchoice;
let playernumber;

function RockClick(){
    playernumber=0;
    playerchoice="Rock";
    document.getElementById("personchoice").innerHTML=playerchoice;
    if(computernumber==0){
        computerchoice="Rock";
        document.getElementById("computerchoice").innerHTML=computerchoice;
    }
    
    if(computernumber==1){
        computerchoice="Paper";
        document.getElementById("computerchoice").innerHTML=computerchoice;
    }
    
    if(computernumber==2){
        computerchoice="Scissor";
        document.getElementById("computerchoice").innerHTML=computerchoice;
    }
    if(computernumber==playernumber){
        window.alert("It is a tie. Play again.")
    }
    if(computernumber==0 && playernumber==2){
        window.alert("You have won this round.")
        personscore++;
        document.getElementById("personscore").innerHTML=personscore;
    }
    if(computernumber==0 && playernumber==1){
      window.alert("You have won this round.")
      personscore++;
      document.getElementById("personscore").innerHTML=personscore;
    } 
  if(computernumber==1 && playernumber==2){
      window.alert("You have won this round.")
      personscore++;
      document.getElementById("personscore").innerHTML=personscore;
  }
  if(computernumber==2 && playernumber==0){
      window.alert("The computer has won this round.")
      computerscore++;
      document.getElementById("computerscore").innerHTML=computerscore;
  }
  if(computernumber==1 && playernumber==0){
      window.alert("The computer has won this round.")
      computerscore++;
      document.getElementById("computerscore").innerHTML=computerscore;
  }
if(computernumber==2 && playernumber==1){
      window.alert("The computer has won this round.")
      computerscore++;
      document.getElementById("computerscore").innerHTML=computerscore;
  }
}
function ScissorClick(){
    playernumber=2;
    playerchoice="Scissor";
    document.getElementById("personchoice").innerHTML=playerchoice;
    if(computernumber==0){
        computerchoice="Rock";
        document.getElementById("computerchoice").innerHTML=computerchoice;
    }
    
    if(computernumber==1){
        computerchoice="Paper";
        document.getElementById("computerchoice").innerHTML=computerchoice;
    }
    
    if(computernumber==2){
        computerchoice="Scissor";
        document.getElementById("computerchoice").innerHTML=computerchoice;
    }
    if(computernumber==playernumber){
        window.alert("It is a tie. Play again.")
    }
    if(computernumber==0 && playernumber==2){
        window.alert("You have won this round.")
        personscore++;
        document.getElementById("personscore").innerHTML=personscore;
    }
    if(computernumber==0 && playernumber==1){
      window.alert("You have won this round.")
      personscore++;
      document.getElementById("personscore").innerHTML=personscore;
    } 
  if(computernumber==1 && playernumber==2){
      window.alert("You have won this round.")
      personscore++;
      document.getElementById("personscore").innerHTML=personscore;
  }
  if(computernumber==2 && playernumber==0){
      window.alert("The computer has won this round.")
      computerscore++;
      document.getElementById("computerscore").innerHTML=computerscore;
  }
  if(computernumber==1 && playernumber==0){
      window.alert("The computer has won this round.")
      computerscore++;
      document.getElementById("computerscore").innerHTML=computerscore;
  }
  if(computernumber==2 && playernumber==1){
      window.alert("The computer has won this round.")
      computerscore++;
      document.getElementById("computerscore").innerHTML=computerscore;
  }   
}
function PaperClick(){
    playernumber=1;
    playerchoice="Paper";
    document.getElementById("personchoice").innerHTML=playerchoice;
    if(computernumber==0){
        computerchoice="Rock";
        document.getElementById("computerchoice").innerHTML=computerchoice;
    }
    
    if(computernumber==1){
        computerchoice="Paper";
        document.getElementById("computerchoice").innerHTML=computerchoice;
    }
    
    if(computernumber==2){
        computerchoice="Scissor";
        document.getElementById("computerchoice").innerHTML=computerchoice;
    }
    if(computernumber==playernumber){
        window.alert("It is a tie. Play again.")
    }
    if(computernumber==0 && playernumber==2){
        window.alert("You have won this round.")
        personscore++;
        document.getElementById("personscore").innerHTML=personscore;
    }
    if(computernumber==0 && playernumber==1){
      window.alert("You have won this round.")
      personscore++;
      document.getElementById("personscore").innerHTML=personscore;
    } 
  if(computernumber==1 && playernumber==2){
      window.alert("You have won this round.")
      personscore++;
      document.getElementById("personscore").innerHTML=personscore;
  }
  if(computernumber==2 && playernumber==0){
      window.alert("The computer has won this round.")
      computerscore++;
      document.getElementById("computerscore").innerHTML=computerscore;
  }
  if(computernumber==1 && playernumber==0){
      window.alert("The computer has won this round.")
      computerscore++;
      document.getElementById("computerscore").innerHTML=computerscore;
  }
  if(computernumber==2 && playernumber==1){
      window.alert("The computer has won this round.")
      computerscore++;
      document.getElementById("computerscore").innerHTML=computerscore;
  }    
}
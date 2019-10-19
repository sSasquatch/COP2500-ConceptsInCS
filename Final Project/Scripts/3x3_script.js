//Controls Start

var bposr=2; // blank position:row
var bposc=2; // blank position:coloumn
     
function keypress() {
  var ieKey = event.keyCode; 
  if (ieKey == 40 && bposr!=0){ //for moving down
    temp= document.getElementById("myTable").rows[bposr-1].cells[bposc].innerHTML;
    document.getElementById("myTable").rows[bposr-1].cells[bposc].innerHTML=document.getElementById("myTable").rows[bposr].cells[bposc].innerHTML;
    document.getElementById("myTable").rows[bposr].cells[bposc].innerHTML=temp;
    document.getElementById("myTable").rows[bposr].cells[bposc].style.backgroundColor='#74afad';
    document.getElementById("myTable").rows[bposr-1].cells[bposc].style.backgroundColor='#ffffff';
    bposr--;
  }
        
  else if (ieKey == 38 && bposr!=2){ //for moving up
    temp= document.getElementById("myTable").rows[bposr+1].cells[bposc].innerHTML;
    document.getElementById("myTable").rows[bposr+1].cells[bposc].innerHTML=document.getElementById("myTable").rows[bposr].cells[bposc].innerHTML;
    document.getElementById("myTable").rows[bposr].cells[bposc].innerHTML=temp;
    document.getElementById("myTable").rows[bposr].cells[bposc].style.backgroundColor='#74afad';
    document.getElementById("myTable").rows[bposr+1].cells[bposc].style.backgroundColor='#ffffff';
    bposr++;
  }

  else if (ieKey == 37 && bposc!=2){  //for moving right
    temp= document.getElementById("myTable").rows[bposr].cells[bposc+1].innerHTML;
    document.getElementById("myTable").rows[bposr].cells[bposc+1].innerHTML=document.getElementById("myTable").rows[bposr].cells[bposc].innerHTML;
    document.getElementById("myTable").rows[bposr].cells[bposc].innerHTML=temp;
    document.getElementById("myTable").rows[bposr].cells[bposc].style.backgroundColor='#74afad';
    document.getElementById("myTable").rows[bposr].cells[bposc+1].style.backgroundColor='#ffffff';
    bposc++;
  }
        
  else if (ieKey == 39 && bposc!=0){  //for moving left
    temp= document.getElementById("myTable").rows[bposr].cells[bposc-1].innerHTML;
    document.getElementById("myTable").rows[bposr].cells[bposc-1].innerHTML=document.getElementById("myTable").rows[bposr].cells[bposc].innerHTML;
    document.getElementById("myTable").rows[bposr].cells[bposc].innerHTML=temp;
    document.getElementById("myTable").rows[bposr].cells[bposc].style.backgroundColor='#74afad';
    document.getElementById("myTable").rows[bposr].cells[bposc-1].style.backgroundColor='#ffffff';
    bposc--;
  }
}

function start(){
  document.onkeydown = keypress;
}

//Controls End
//Timer Start

var seconds=0;
var minutes=0;
var hours=0;
var myTimer = setInterval(myClock, 1000);

function myClock(){
  document.getElementById("timer").innerHTML = "<b>Time: </b>" + hours + ":" + minutes + ":" + seconds++;
  if(seconds==60){
    seconds=0;
    minutes++;
    if(minutes==60){
      minutes=0;
      hours++;
    }
  }
}

//Timer End
//Completion Check Start

window.onkeypress=function checkOrder(){
  var a=[1,2,3,4,5,6,7,8];
  var match=0;
  for(i=0; i<4; i++){
    for(j=0; j<4; j++){
      if(document.getElementById("myTable").rows[i].cells[j].innerHTML==a[i*4+j]){
        match++;
      }
      if(match==15){
        alert("Congratulations! Your time was " + myTimer);
        clearInterval(myTimer);
      }
    }
  }
}

//Completion Check End
//Player Name Start

function changeText(){
  var name=document.getElementById("player_name").name.value;
  var nameText="<b>Player: </b>" + name;
  document.getElementById("name").innerHTML = nameText;
}

//Player Name End
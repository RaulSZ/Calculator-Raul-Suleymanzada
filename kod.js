function numberKey(key){

var display=document.getElementById('display');

var displayText=display.innerHTML;
 
if(displayText.length>20){

}else{

displayText+=key;

display.innerHTML=displayText;

}

}

function cler(){

document.getElementById('display').innerHTML="";

}

function calculate(){

var display=document.getElementById('display');

var displayText=display.innerHTML;

var result=eval(displayText);

display.innerHTML=displayText+' = '+result;

}

function deleteItem(){

var display=document.getElementById('display');

var displayText=display.innerHTML;

var l=displayText.length;

var result=displayText.substr(0,l-1);

display.innerHTML=result;

}
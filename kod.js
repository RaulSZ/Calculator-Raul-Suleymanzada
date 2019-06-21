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

var resultn;

function saveN(){

var display=document.getElementById('display');

var displayText=display.innerHTML;

var array=displayText.split("= ");


var result=array[1];

resultn=result;

}

function returnN(){

var display=document.getElementById('display');

var displayText=display.innerHTML;

var result=displayText+resultn;

display.innerHTML=result;

}

function squareRoot(){

var display=document.getElementById('display');

var displayText=display.innerHTML;

var s=Math.sqrt(displayText);

display.innerHTML=s;

}


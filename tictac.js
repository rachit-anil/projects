var player=1;
var cross=0;
var egg=0;
var arr=[];
var win=0;
function init(){
	console.log("fuck off");
}

function random1(){
var random=Math.round(Math.random()*10);
if(random==0){
	random+=1
}

else if(random==10){
	random-=1;
}
;
var bttn="btn"+random;
console.log(bttn);
dorandom(bttn);
}

function clickbtn(btn){
	if(player==1){
		document.getElementById(btn).value="X";
		document.getElementById(btn).disabled="disabled";
        player-=1;	
        winner();
        if(win==0){
        random1();
    }
	}
	
	else{
		document.getElementById(btn).value="O";
		document.getElementById(btn).disabled="disabled";	
		player+=1;
		winner();
		if(win==0){
		random1();
	}
}

}

function winner(){
	if( document.getElementById("btn1").value=="X"&&
		document.getElementById("btn5").value=="X"&&
		document.getElementById("btn9").value=="X"||

        document.getElementById("btn3").value=="X"&&
		document.getElementById("btn5").value=="X"&&
		document.getElementById("btn7").value=="X"||



		document.getElementById("btn1").value=="X"&&
		document.getElementById("btn2").value=="X"&&
		document.getElementById("btn3").value=="X"||


		document.getElementById("btn4").value=="X"&&
		document.getElementById("btn5").value=="X"&&
		document.getElementById("btn6").value=="X"||

		document.getElementById("btn7").value=="X"&&
		document.getElementById("btn8").value=="X"&&
		document.getElementById("btn9").value=="X"||


		document.getElementById("btn1").value=="X"&&
		document.getElementById("btn4").value=="X"&&
		document.getElementById("btn7").value=="X"||

        document.getElementById("btn2").value=="X"&&
		document.getElementById("btn5").value=="X"&&
		document.getElementById("btn8").value=="X"||


		document.getElementById("btn3").value=="X"&&
		document.getElementById("btn6").value=="X"&&
		document.getElementById("btn9").value=="X"
		
		


	){
	win++;
	alert("winner X is here ");
	
	cross++;
	reset1();
	

	}
	else if(
		document.getElementById("btn1").value=="O"&&
		document.getElementById("btn2").value=="O"&&
		document.getElementById("btn3").value=="O"||

        document.getElementById("btn4").value=="O"&&
		document.getElementById("btn5").value=="O"&&
		document.getElementById("btn6").value=="O"||



		document.getElementById("btn7").value=="O"&&
		document.getElementById("btn8").value=="O"&&
		document.getElementById("btn9").value=="O"||


		document.getElementById("btn1").value=="O"&&
		document.getElementById("btn5").value=="O"&&
		document.getElementById("btn9").value=="O"||

		document.getElementById("btn3").value=="O"&&
		document.getElementById("btn5").value=="O"&&
		document.getElementById("btn7").value=="O"||


		document.getElementById("btn1").value=="O"&&
		document.getElementById("btn4").value=="O"&&
		document.getElementById("btn7").value=="O"||

        document.getElementById("btn2").value=="O"&&
		document.getElementById("btn5").value=="O"&&
		document.getElementById("btn8").value=="O"||


		document.getElementById("btn3").value=="O"&&
		document.getElementById("btn6").value=="O"&&
		document.getElementById("btn9").value=="O"){
	win++;
	reset1();
	alert("winner O is here ");
	egg++;
	


	}
	
	else if(document.getElementById("btn1").value!=" "&&
		document.getElementById("btn2").value!=" "&&
		document.getElementById("btn3").value!=" "&&
		document.getElementById("btn4").value!=" "&&
		document.getElementById("btn5").value!=" "&&
		document.getElementById("btn6").value!=" "&&
		document.getElementById("btn7").value!=" "&&
		document.getElementById("btn8").value!=" "&&
		document.getElementById("btn9").value!=" ")
	{
		win++;
		alert("Match draw");
		reset();
		

	}
}

function reset1(){
	win=0;
document.getElementById("btn1").value=" ";
document.getElementById("btn2").value=" ";
document.getElementById("btn3").value=" ";
document.getElementById("btn4").value=" ";
document.getElementById("btn5").value=" ";
document.getElementById("btn6").value=" ";
document.getElementById("btn7").value=" ";
document.getElementById("btn8").value=" ";
document.getElementById("btn9").value=" ";
document.getElementById("btn1").disabled="";
document.getElementById("btn2").disabled="";
document.getElementById("btn3").disabled="";
document.getElementById("btn4").disabled="";
document.getElementById("btn5").disabled="";
document.getElementById("btn6").disabled="";
document.getElementById("btn7").disabled="";
document.getElementById("btn8").disabled="";
document.getElementById("btn9").disabled="";
document.getElementById("body1").innerHTML="<tr><td>"+cross+"</td><td>"+egg+"</td></tr>";
init();
}
function dorandom(arg){
	console.log(arg);
	console.log(player);
	if(document.getElementById(arg).value==" " && player=="1"){

          document.getElementById(arg).value="X";
          document.getElementById(arg).disabled="disabled";
	}
	else if(document.getElementById(arg).value==" "&&player=="0"){

             document.getElementById(arg).value="O";
             document.getElementById(arg).disabled="disabled";
	}
	else if(win!=0){

		reset1();
	}
	else{
		random1();
	}

}

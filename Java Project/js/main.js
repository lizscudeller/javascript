//alert("hello! Welcome to my website"); //pop up message

//console.log("Hello Im console message"); //message inside F12 console

//var	user = prompt ("What is your name?"); //declare variable

//alert ("Hello " + user);


//function Hello(){
//var	user = prompt ("What is your name?"); //declare variable
//document.getElementById('here').innerHTML = 
//"Hello " + user + " Welcome to my website"; //put message inside de html, not in prompt

//}


//function Fuck(){
//var	user = prompt ("What is your name?"); //declare variable
//document.getElementById('here').innerHTML = 
//"Fuck you, " + user + ". I don't like you!"; //put message inside de html, not in prompt

//}

// --------------- sum numbers
function Sum(){ 


	var numb1 = parseInt(document.getElementById("number1").value);
	var numb2 = parseInt(document.getElementById("number2").value);
	var total = numb1 + numb2;

	document.getElementById('total').innerHTML = total;

}
// --------------- average numbers
function Average(){ 


	var grade1 = parseInt(document.getElementById("grade1").value);
	var grade2 = parseInt(document.getElementById("grade2").value);
	var grade3 = parseInt(document.getElementById("grade3").value);
	var grades = grade1 + grade2 + grade3;
	var result = grades/3;

	document.getElementById('totalaverage').innerHTML = "Your Average is " + result;

	if (result < 6) {
	document.getElementById("status").innerHTML = "You Failed";
	} 
	else	{
	document.getElementById("status").innerHTML = "Approved";
	}

}
// --------------- Rain
function Rain() {

	var rain = prompt("Is it rainning? Yes:1, No:0");
	if (rain==0) {
		console.log("Don't take your umbrella!");
	}
	else{
		console.log("Take your umbrella");
	}
}
// --------------- sub numbers
function Sub(){ 


	var sub1 = parseInt(document.getElementById("sub1").value);
	var sub2 = parseInt(document.getElementById("sub2").value);
	var subtotal = sub1 - sub2;

	document.getElementById('subtotal').innerHTML = subtotal;

}

// --------------- sub numbers
function Mult(){ 


	var mult1 = parseInt(document.getElementById("mult1").value);
	var mult2 = parseInt(document.getElementById("mult2").value);
	var multtotal = mult1 * mult2;

	document.getElementById('multtotal').innerHTML = multtotal;

}


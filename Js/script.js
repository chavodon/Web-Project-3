function reset(){
	alert('dfd');
	document.getElementById("productView").reset();
}
function shipping(){
	var contactname = document.getElementById("cusName").value;
	var companyname = document.getElementById("compName").value;
	var address = document.getElementById("address").value;
	var email = document.getElementById("email").value;
	var phonenum = document.getElementById("number").value;
	localStorage.setItem("address",address);
	localStorage.setItem("companyname",companyname);
	localStorage.setItem("contactname",contactname);
	localStorage.setItem("email",email);
	localStorage.setItem("phonenum",phonenum);
}
function products(){
	var prod1 = document.getElementById("prod1").value;
	var prod2 = document.getElementById("prod2").value;
	var prod3 = document.getElementById("prod3").value;
	var prod4 = document.getElementById("prod4").value;
	var prod5 = document.getElementById("prod5").value;
	var prod6 = document.getElementById("prod6").value;
	localStorage.setItem("prod1",prod1);
	localStorage.setItem("prod2",prod2);
	localStorage.setItem("prod3",prod3);
	localStorage.setItem("prod4",prod4);
	localStorage.setItem("prod5",prod5);
	localStorage.setItem("prod6",prod6);
}
function pass(){
	var today = new Date();
	var address = localStorage.getItem("address");
	document.getElementById("billInfo").value = address; 
	document.getElementById("todayDate").value = today;
	prod1val = localStorage.getItem("prod1");
	prod2val = localStorage.getItem("prod2");
	prod3val = localStorage.getItem("prod3");
	prod4val = localStorage.getItem("prod4");
	prod5val = localStorage.getItem("prod5");
	prod6val = localStorage.getItem("prod6");
	document.getElementById("Q1").value = prod1val;
	document.getElementById("Q2").value = prod2val;
	document.getElementById("Q3").value = prod3val;
	document.getElementById("Q4").value = prod4val;
	document.getElementById("Q5").value = prod5val;
	document.getElementById("Q6").value = prod6val; 
	document.getElementById("A1").value = document.getElementById("U1").value* prod1val;
	document.getElementById("A2").value = document.getElementById("U2").value* prod2val;
	document.getElementById("A3").value = document.getElementById("U3").value* prod3val;
	document.getElementById("A4").value = document.getElementById("U4").value* prod4val;
	document.getElementById("A5").value = document.getElementById("U5").value* prod5val;
	document.getElementById("A6").value = document.getElementById("U6").value* prod6val;
	var subtotal = 0;
	sum = parseInt(document.getElementById("A1").value) + parseInt(document.getElementById("A2").value) + parseInt(document.getElementById("A3").value) + parseInt(document.getElementById("A4").value) + parseInt(document.getElementById("A5").value) + parseInt(document.getElementById("A6").value); 
	document.getElementById("subtotal").value = sum;
	tax = parseInt(sum) * 0.165;
	document.getElementById("tax").value = tax.toFixed(2);
	document.getElementById("total").value = parseFloat(document.getElementById("tax").value) + parseFloat(sum);
}

function mail(){
	var email = localStorage.getItem("email");
	location_of_button = document.getElementById("emailit");
	location_of_button.href = "mailto:"+email+"?cc=Chirus@Chirus.com&subject=Performa Invoice&body=You have requested the services of Chirus";
}
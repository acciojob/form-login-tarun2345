function getFormvalue() {
    //Write your code here
	let submit = document.getElementById("submit");
	submit.addEventListener("click",sub)
	let fname = document.getElementById("f");
	let lname = document.getElementById("l");
	function sub() {
		alert(fname.value+" "+lname.value);
	}
}

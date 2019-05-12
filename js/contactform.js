function validateForm(){
  var x = document.forms["conForm"]["fName"].value.length;
  var xv = document.forms["conForm"]["fName"].value;
  var y = document.forms["conForm"]["lName"].value.length;
  var yv = document.forms["conForm"]["lName"].value;
  var e = document.forms["conForm"]["eMail"].value;
  var at = e.indexOf("@");
  var dot = e.lastIndexOf(".");
  if (x < 3 && x > 0){
    alert ("First Name must be atleast 3 Letters");
    return false;
  }
  if (xv == ""){
    alert ("First Name cannot be empty");
    return false;
  }
  if (y < 5 && y > 0){
    alert ("Last Name must be atleast 5 Letters");
    return false;
  }
  if (yv == ""){
    alert ("Last Name cannot be empty");
    return false;
  }
  if (at < 1 || dot < at + 2 || dot + 2 >= e.length) {
    alert("Not a valid e-mail address");
    return false;
  }
  if (!document.getElementById('userAgree').checked){
    alert ("You must accept the Terms and Conditions");
    return false;
  }
}

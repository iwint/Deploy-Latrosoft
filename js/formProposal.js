var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
  
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
 
  fixStepIndicator(n)
}

function nextPrev(n) {

  var x = document.getElementsByClassName("tab");
  
  if (n == 1 && !validateForm()) return false;
  
  x[currentTab].style.display = "none";
 
  currentTab = currentTab + n;
 
  if (currentTab >= x.length) {
   


    var fname = document.getElementById('fname').value;
    var sname = document.getElementById('sname').value;
    var fullName = fname + " " + sname;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var projectType = document.getElementById('ptype').value;
    var cost = document.getElementById('cost').value;
    var dis = document.getElementById('dis').value;





    document.getElementById("regForm").addEventListener("onclick", sendMessage(fullName, phone, email, dis, cost, projectType));

    return false;
  }
  
  showTab(currentTab);
}

function validateForm() {
  
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  
  for (i = 0; i < y.length; i++) {
    
    if (y[i].value == "") {
     
      y[i].className += " invalid";
     
      valid = false;
    }
  }
  
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
  
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  
  x[n].className += " active";
}
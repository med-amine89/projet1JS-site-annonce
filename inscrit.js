/*function f_valid() {
   var users = JSON.parse(localStorage.getItem('users')) || [];

   var Email = document.getElementById('Email').value;
   var Password = document.getElementById ('Password').value;

   var user = users.find(eachuser => eachuser.userEmail === Email && eachuser.Password === Password);
   
   if (user != undefined) {
     /*localStorage.setItem('current_user', JSON.stringify(user));
       window.location.href ="home.html";
   }else {
       alert('undefined');
   }
 }*/
function inscrit() {

  var users = JSON.parse(localStorage.getItem('users')) || [];

  var Email = document.getElementById('Email').value;
  var Password = document.getElementById('Password').value;

  var user = {
    "Email": Email,
    "Password": Password
  };

  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

}

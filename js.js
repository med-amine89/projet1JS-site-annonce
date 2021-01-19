
function valid() {
  var users = JSON.parse(localStorage.getItem('users')); // || []

  if (users === null) {
    users = [];
  }


  var Email = document.getElementById('Email').value;
  var Password = document.getElementById('Password').value;


  var current_visit = users.find(user => user.Email === Email && user.Password === Password);


  // console.log(current_visit);
  // console.log(Email);
  // console.log(Password);

  // function trouver(personne){
  //   return personne.Email === Email;

  // }
  // var x = users.find(trouver);



  // var y = x.Password;

  if (current_visit !== undefined) {
    var k = JSON.stringify(current_visit);
    localStorage.setItem('current_visit', k);
    window.location.href = "home.html"
  }

  else {
    alert('verifier vos informations');
  }


}


function inscrit() {

  var storedusers = JSON.parse(localStorage.getItem('users')) || [];

  var Email = document.getElementById('Email').value;
  var Password = document.getElementById('Password').value;

  var user = {
    "id": storedusers.length,
    "Email": Email,
    "Password": Password
  };

  storedusers.push(user);
  localStorage.setItem('users', JSON.stringify(storedusers));
  window.location.href = "home.html";

}

function deconnection() {
  window.location.href = "projet1 js.html";
  localStorage.removeItem('current_visit');

}
function load_current_user() {

  var current_visit = JSON.parse(localStorage.getItem('current_visit'));

  if (current_visit === undefined || current_visit === null) {
    window.location.href = "projet1 js.html";
  } else {
    console.log(current_visit);
    console.log(typeof current_visit);
    console.log(current_visit.Email);
    document.getElementById('Email').value = current_visit.Email;
    document.getElementById('Password').value = current_visit.Password;

    // var current_visit = localStorage.getItem('current_visit'));
  }

}


function findIndex() {
  var users = JSON.parse(localStorage.getItem('users')); // || []

  if (users === null) {
    users = [];
  }
  var current_visit = JSON.parse(localStorage.getItem('current_visit'));
  if (current_visit !== undefined || current_visit !== null) {

    var i = users.findIndex(user => user.id === current_visit.id);
    console.log(i);

    var new_email = document.getElementById('Email').value;
    var new_password = document.getElementById('Password').value;

    // current user
    current_visit.Email = new_email;
    current_visit.Password = new_password;
    localStorage.setItem('current_visit', JSON.stringify(current_visit));

    // users update 
    users[i].Email = new_email;
    users[i].Password = new_password;
    localStorage.setItem('users', JSON.stringify(users));
  }
}

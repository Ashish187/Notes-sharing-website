var firebaseConfig = {
    apiKey: "AIzaSyAQYFCgf_I9wYKq0H-sphSxOoU7RJKXvkE",
    authDomain: "notes-a71ec.firebaseapp.com",
    projectId: "notes-a71ec",
    storageBucket: "notes-a71ec.appspot.com",
    messagingSenderId: "644935694272",
    appId: "1:644935694272:web:6381dd058c0d4e1de7fa25"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  document.getElementById('form').addEventListener()
  function save(){
      var name = document.getElementById('name').value;
      var mail = document.getElementById('email').value;
      var password = document.getElementById('pwd').value;

      database.ref('users/' + name).set({
          name: name,
          password: password,
          mail: mail
      })
      
    //   alert('saved')
  }
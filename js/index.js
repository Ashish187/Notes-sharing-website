var firebaseConfig = {
    apiKey: "AIzaSyDwPmAlXe1uj-nyFoyy7tUkS25MPPWD9FU",
    authDomain: "notesregister.firebaseapp.com",
    projectId: "notesregister",
    storageBucket: "notesregister.appspot.com",
    messagingSenderId: "701392455185",
    appId: "1:701392455185:web:f71a5c660c0269c9e793b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  document.getElementById('form').addEventListener()
  function page(){
      var name = document.getElementById('name').value;
      var mail = document.getElementById('email').value;
      var password = document.getElementById('pwd').value;

      database.ref('users/' + name).set({
          name: name,
          mail: mail,
          password: pwd
      })
      
      alert('saved')
  }
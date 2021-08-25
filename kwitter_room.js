
var firebaseConfig = {
      apiKey: "AIzaSyBvMOlSaXwKpy6BEc6T97clEOmHOZavBKs",
      authDomain: "kwitter-880ed.firebaseapp.com",
      projectId: "kwitter-880ed",
      storageBucket: "kwitter-880ed.appspot.com",
      messagingSenderId: "463158699127",
      appId: "1:463158699127:web:a7edb5d1bdded0e8811272"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

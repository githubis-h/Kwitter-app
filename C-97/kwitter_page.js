var firebaseConfig = {
      apiKey: "AIzaSyDtUHQS-nS8s05x5QKbBedeQMMkxMXHVh0",
      authDomain: "kwitter-db82c.firebaseapp.com",
      databaseURL: "https://kwitter-db82c-default-rtdb.firebaseio.com",
      projectId: "kwitter-db82c",
      storageBucket: "kwitter-db82c.appspot.com",
      messagingSenderId: "208339594791",
      appId: "1:208339594791:web:defc61c098c7ab5736e802",
      measurementId: "G-PR112H0YYG"
};

//ADD YOUR FIREBASE LINKS

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = ("index.html");
}
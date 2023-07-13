
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDs7Q5dLW4KqO5-pL15LFAX5-TTn1DW8P4",
      authDomain: "kwitter2-0-93ce4.firebaseapp.com",
      databaseURL: "https://kwitter2-0-93ce4-default-rtdb.firebaseio.com",
      projectId: "kwitter2-0-93ce4",
      storageBucket: "kwitter2-0-93ce4.appspot.com",
      messagingSenderId: "845582225737",
      appId: "1:845582225737:web:ea9f35fc704eb99edc0a98"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("welcome_user").innerHTML="Welcome "+user_name+"!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='functioname(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function add_Room(){
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose:"adding roomname"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function functioname(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
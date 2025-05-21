function ledOn() {
  var ref = database.ref("led");
  ref.update({ led: 1 })
  console.log("LED 켜짐");
}

function ledOff() {
  var ref = database.ref("led");
  ref.update({ led: 0 })
  console.log("LED 꺼짐");
}

var config = {
  apiKey: "AIzaSyCV5BVKfxxNJb2cpDprjBboFcnF9tBsU_U",
  authDomain: "myweb-4e1aa.firebaseapp.com",
  databaseURL: "https://myweb-4e1aa-default-rtdb.firebaseio.com",
  projectId: "myweb-4e1aa",
  storageBucket: "myweb-4e1aa.firebasestorage.app",
  messagingSenderId: "752714726741",
  appId: "1:752714726741:web:ddb0e966c08d1f3b2143dc"
};

//Firebase 데이터베이스 만들기
firebase.initializeApp(config);
database = firebase.database();

// Firebase 데이터베이스 정보 가져오기
var ref = database.ref("led");
ref.on("value", gotData);

function gotData(data) {
  var val = data.val();

  if (val.led == 0){
    //document.getElementById("ledstatus").innerHTML = "led가 현재 꺼짐";
    document.getElementById("img").src = "led_off.png";}
  else {
    //document.getElementById("ledstatus").innerHTML = "led가 현재 켜짐";
    document.getElementById("img").src = "led_on.png";}

  console.log(val)
}

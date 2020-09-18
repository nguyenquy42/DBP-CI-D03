// Initialize Cloud Firestore through Firebase
var result = document.getElementById("resultName")

const firebaseConfig = {
    apiKey: "AIzaSyDoWzEj5pKsM4d9RrxSoNCqjqgWYMBs-LE",
    authDomain: "learn-mindx.firebaseapp.com",
    databaseURL: "https://learn-mindx.firebaseio.com",
    projectId: "learn-mindx",
    storageBucket: "learn-mindx.appspot.com",
    messagingSenderId: "145607883345",
    appId: "1:145607883345:web:9450ce44f126d04e019670"
  };

firebase.initializeApp(firebaseConfig);
  
  var db = firebase.firestore();
  
//   xong pham config => cho firebase biet

document.getElementById('btn').addEventListener('click',()=>{
    let username = document.getElementById('usernm').value
    let password = document.getElementById('pass').value
    
    
    db.collection("Learn-Mindx").get()
    .then((querySnapshot) => {

        let  user = querySnapshot.docs.map(val=>{
            return val.data()
        })
        return user

    })
    // normali data
    .then(user=>{
        for(let i = 0;i<user.length;i++){
            if(user[i].username == username){
                if(user[i].password == password){
                    alert('Login Successful')
                    return user[i];
                }else{
                    alert('your password is wrong')
                    return null;
                }
            }
        }
        alert('youer username is not exist')
    })

    // checking
    .then((user)=>{
        result.innerHTML += "chào admin " + username

        console.log(user)

    })

    // co infomation ve user
    .catch(er=>{
        console.log(er.message)
    })
    ;

})

function conversation(img,name){
    return 
}
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

// document.getElementById('btn').addEventListener('click',()=>{
//     let username = document.getElementById('usernm').value
//     let password = document.getElementById('pass').value
    
    
//     db.collection("Learn-Mindx").get()
//     .then((querySnapshot) => {
//         let  user = querySnapshot.docs.map(val=>{
//             return{
//                 id: val.id,
//                 ...val.data()
//             }
//         })
//         return user
//     })
//     // normali data
//     .then(user=>{
//         for(let i = 0;i<user.length;i++){
//             if(user[i].username == username){
//                 if(user[i].password == password){
//                     alert('Login Successful')
//                     return user[i];
//                 }else{
//                     alert('your password is wrong')
//                     return null;
//                 }
//             }
//         }
//         alert('youer username is not exist')
//     })

//     // checking
//     .then((user)=>{
//         localStorage.setItem("id", user.id)
//         renderData()
//         // console.log(user)
//     })

//     // co infomation ve user
//     .catch(er=>{
//         console.log(er.message)
//     })
//     ;

// })

// function conversation(img,name){
//     return `<div class="row">
//                 <img src="${img}"   alt="" class="col-4 rounded-circle" width="85" height="85"> 
//                 <div class="col-7 w-100 d-flex align-items-center">
//                     <h2>${name}</h2>
//                 </div>
//             </div>`
// }

// function init(){
//     let cv = document.getElementById('user')
//         for( let i = 0; i < 7; i++){
//             cv.insertAdjacentHTML('beforeend',conversation({img:'img/anh-8-154194174162744712148.jpg',name:'name user'+i}))
//         } 
// }
// init()

document.getElementById("btn").addEventListener("click", () => {
    let username = document.getElementById("usernm").value
    let password = document.getElementById("pass").value
    console.log(username, password)

    db.collection("Learn-Mindx")
        .get()
        .then((querySnapshot) => {
            let users = querySnapshot.docs.map(val => {
                return {
                    id: val.id,
                    ...val.data()
                }
            })
            return users
        })
        //normalize data 
        .then(users => {
            for (let i = 0; i < users.length; i++) {
                if (users[i].username == username) {
                    if (users[i].password == password) {
                        alert("Đăng nhập thành công")
                        return users[i];
                    } else {
                        alert("Sai mật khẩu")
                        return null;
                    }
                }
            }
            alert("Tài khoản không tồn tại")
        })
        // checking
        .then((user) => {
            localStorage.setItem("id", user.id)
            renderData()
            result.innerHTML += "chào admin " + username

        })
        // co infomation ve user
        .catch(er => {
            console.log(er.message)
        })
        ;
})

// function renderData(){
//     db.collection('conversations').doc('nzAKY0ST4kgAPqiwwnEA').get()
//     .then((doc) => {
//         if(doc.exists){
//             return doc.data()
//         }
//     })
//     .then(data=>{
//         let id = localStorage.id
//         let user1Id = data.user1
//         let user2Id = data.user2
//         // console.log(id,user2Id,user1Id)
//         let chat = document.getElementById('chat-erea')
//         let message = data.messages
//         message.forEach(value=>{
//             let temp =
//                 `
//                     <div class="mess ${value.belong == user1Id ? 'ml' : 'mr'}">
//                     <p>${value.content}</p>
//                     </div>
//                 `
//                 chat.insertAdjacentHTML("beforeend", temp)
//         })
//     })
// }

function renderData() {
    document.getElementById("chat-erea").innerHTML=""
    db.collection("conversations").doc("nzAKY0ST4kgAPqiwwnEA").get()
        .then((doc) => {
            if (doc.exists) {
                return doc.data()
            }
        })
        .then(data => {
            let id = localStorage.id
            console.log(id)
            let chat = document.getElementById("chat-erea")
            let messages = data.messages
            messages.forEach(value => {
                let temp =
                    `
                        <div class="mess ${value.belong == id ? "ml" : "mr"}">
                            <p>${value.content}</p>
                        </div>
                    `
                chat.insertAdjacentHTML("beforeend", temp)
            })
        })
}

renderData()

document.getElementById("send").addEventListener("click", () => {
    sendMess()
})
function sendMess() {
    let text = document.getElementById("text")
    if (text.value != "") {
        console.log(text.value)

        db.collection("conversations").doc("nzAKY0ST4kgAPqiwwnEA").update({
            messages: firebase.firestore.FieldValue.arrayUnion({
                belong: localStorage.getItem("id"),
                content:text.value
            })
        })
            .then(() => {
                text.value = ""
                renderData()
                console.log(`Save success`)
            })
    }
}
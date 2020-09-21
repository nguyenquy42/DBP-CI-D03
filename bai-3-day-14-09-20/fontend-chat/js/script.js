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
            result.innerHTML = "chào admin " + username

        })
        // co infomation ve user
        .catch(er => {
            console.log(er.message)
        })
        ;
})

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
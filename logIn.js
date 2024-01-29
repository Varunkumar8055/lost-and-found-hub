import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2ErNtNHBJWMFdakNMB3L76xrmZPsnUqo",
    authDomain: "lostandfoundhub-130d3.firebaseapp.com",
    projectId: "lostandfoundhub-130d3",
    databaseURL: "https://lostandfoundhub-130d3-default-rtdb.firebaseio.com",
    storageBucket: "lostandfoundhub-130d3.appspot.com",
    messagingSenderId: "354485112161",
    appId: "1:354485112161:web:34667ce366fc20421f8920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const loginSubmitBtn = document.getElementById('login-submit-btn');

loginSubmitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    signIn();
});
function signIn() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.id)
            console.log("Login Successful")
            window.location.href = 'index.html';

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            alert(errorMessage)
        });
}

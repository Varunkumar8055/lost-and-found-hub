// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
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
const database = getDatabase(app);

const submitBtn = document.getElementById('submitbtn');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    createAccount();
});


function createAccount() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    const progressBar = document.getElementById('progressBar');
    progressBar.value = 0;

    // Create account using Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User Created")

            progressBar.value = 50;

            // Store email, name, and password in Firebase Realtime Database
            set(ref(database, 'users/' + user.uid), {
                email: email,
                name: name,
                password: password,
                number: number
            });
            progressBar.value = 100;
            console.log("User Created   ...")
            //window.location.href = 'index.html';
            const anchor = document.createElement('a')
            anchor.href = 'index.html'
            anchor.target = '_blank'
            anchor.click()



        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage + errorCode);
        });
}

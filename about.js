import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
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

const logout = document.getElementById('logoutbtn')

logout.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    auth.signOut().then(function () { console.log('Signed Out'); }, function (error) { console.error('Sign Out Error', error); });
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         console.log("Not signout out")
    //     }
    //     else {
    //         console.log("Signed out")
    //     }
    // })
    window.location.href = 'index.html';


});
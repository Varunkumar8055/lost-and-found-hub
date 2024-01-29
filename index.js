// Import the functions you need from the SDKs you need
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
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        const navDiv = document.getElementById('navbar');

        // Array of links
        const links = [
            { text: 'Home', href: 'index.html', id: '' },
            { text: 'About', href: 'about.html', id: '' },
            { text: 'Create Post', href: 'myposts.html', id: '' },
            { text: 'Messages', href: 'messages.html', id: '' },
        ];

        // Create anchor tags and append them to the navigation div
        links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.textContent = link.text;
            anchor.href = link.href;
            anchor.id = link.id;
            anchor.className = 'aclass';

            navDiv.appendChild(anchor);
        });

    } else {
        // User is signed out
        // ...
        const navDiv = document.getElementById('navbar');

        // Array of links
        const links = [
            { text: 'Home', href: 'index.html' },
            { text: 'Sign In', href: 'login.html' },
            { text: 'Sign Up', href: 'signUp.html' }
        ];

        // Create anchor tags and append them to the navigation div
        links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.textContent = link.text;
            anchor.href = link.href;
            anchor.className = 'aclass';

            navDiv.appendChild(anchor);
        });

    }
});
const search = () => {

    const searchbox = document.getElementById("search-item").value.toUpperCase();

    const storeitems = document.getElementById("product-list")

    const product = document.querySelectorAll(".product")

    const pname = storeitems.getElementsByTagName("h2")

    for (var i = 0; i < pname.length; i++) {

        let match = product[i].getElementsByTagName('h2')[0];

        if (match) {

            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {

                product[i].style.display = "";

            } else {

                product[i].style.display = "none";
            }
        }
    }
}

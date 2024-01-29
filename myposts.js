import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, uploadBytes, ref as storageRef, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getDatabase, ref as databaseRef, push, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"
const firebaseConfig = {
    // Your Firebase configuration
    apiKey: "AIzaSyD2ErNtNHBJWMFdakNMB3L76xrmZPsnUqo",
    authDomain: "lostandfoundhub-130d3.firebaseapp.com",
    projectId: "lostandfoundhub-130d3",
    databaseURL: "https://lostandfoundhub-130d3-default-rtdb.firebaseio.com",
    storageBucket: "lostandfoundhub-130d3.appspot.com",
    messagingSenderId: "354485112161",
    appId: "1:354485112161:web:34667ce366fc20421f8920"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const user = auth.currentUser;
// Reference to the Firebase Storage
const storage = getStorage(app);

// Reference to the Firebase Realtime Database
const database = getDatabase(app);

const submitBtn = document.getElementById('submitbtn');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    uploadItem();
});

// Function to upload item data and photo to Firebase
function uploadItem() {
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemPhotoInput = document.getElementById('itemPhoto');
    const itemPlace = document.getElementById('itemPlace');


    if (!itemName || !itemDescription || !itemPhotoInput) {
        console.log('Please fill in all fields.');
        return;
    }

    const itemPhoto = itemPhotoInput.files[0];

    if (!itemPhoto) {
        console.log('Please select a photo.');
        return;
    }

    console.log("Item Name:", itemName);
    console.log("Item Description:", itemDescription);
    console.log("Item Photo:", itemPhoto);

    const postsRef = databaseRef(database, 'posts');
    const newPostRef = push(postsRef);
    const photoRef = storageRef(storage, 'itemPost/' + itemName);

    console.log("New Post Reference:", newPostRef.key);

    uploadBytes(photoRef, itemPhoto)
        .then(() => getDownloadURL(photoRef))
        .then((downloadURL) => {
            console.log("Download URL:", downloadURL);

            const postRef = databaseRef(database, 'posts/' + newPostRef.key);
            update(postRef, {
                itemName: itemName,
                itemDescription: itemDescription,
                photoURL: downloadURL,
                itemPlace: itemPlace
            })
                .then(() => {
                    console.log('Item updated successfully.');
                })
                .catch((error) => {
                    console.error('Error updating database:', error);
                });
        }).then(() => {
            console.log('Item updated successfully.');
            // Reset input values
            document.getElementById('itemName').value = '';
            document.getElementById('itemDescription').value = '';
            document.getElementById('itemPhoto').value = '';
            document.getElementById('itemPlace').value = '';

        })
    alert("Post Successful Published")
        .catch((error) => {
            console.error('Error uploading file:', error);
        });


}

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
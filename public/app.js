// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// web apps Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFJCkkyzLMzem5KhdfTeqz9dRoJFoxz-Y",
    authDomain: "interactiveprogramming-acc6a.firebaseapp.com",
    projectId: "interactiveprogramming-acc6a",
    storageBucket: "interactiveprogramming-acc6a.appspot.com",
    messagingSenderId: "594405269834",
    appId: "1:594405269834:web:ff4280708803266cf3a1b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Function to handle Google sign-in
async function signInWithGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        // The signed-in user info.
        const user = result.user;
        console.log('User signed in: ', user);
        window.location.href = 'main.html'; // Redirect to dashboard or desired page
    } catch (error) {
        console.error('Error during sign-in: ', error.message);
    }
}

// Function to handle form submission and save data to Firestore
async function handleFormSubmit(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await addDoc(collection(db, 'people'), {
            email: email,
            firstname: firstName,
            lastname: lastName,
            password: password
        });
        console.log('Document successfully written!');
        window.location.href = 'main.html'; // Redirect to dashboard or desired page
    } catch (error) {
        console.error('Error writing document: ', error);
    }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.btn-google').addEventListener('click', (event) => {
        event.preventDefault();
        signInWithGoogle();
    });

    document.getElementById('signupForm').addEventListener('submit', handleFormSubmit);
});

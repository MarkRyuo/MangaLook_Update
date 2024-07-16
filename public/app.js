// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Your web app's Firebase configuration
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

// Add event listener to the Google sign-in button
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.btn-google').addEventListener('click', (event) => {
        event.preventDefault();
        signInWithGoogle();
    });
});

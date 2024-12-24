// Firebase configuration (replace with your own Firebase project configuration)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCe9ckwZpSb3fZGpf5oktDrwx7sMPeTG9k",
  authDomain: "tester-496f1.firebaseapp.com",
  projectId: "tester-496f1",
  storageBucket: "tester-496f1.firebasestorage.app",
  messagingSenderId: "507924410588",
  appId: "1:507924410588:web:bcf4e0507f1a6d0d7bc419"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const formTitle = document.getElementById("form-title");
const authButton = document.getElementById("auth-button");
const toggleText = document.getElementById("toggle-text");
const toggleLink = document.getElementById("toggle-link");

let isLogin = true;

// Toggle between Login and Register
toggleLink.addEventListener("click", () => {
    isLogin = !isLogin;
    formTitle.textContent = isLogin ? "Login" : "Register";
    authButton.textContent = isLogin ? "Login" : "Register";
    toggleText.textContent = isLogin
        ? "Don't have an account?"
        : "Already have an account?";
    toggleLink.textContent = isLogin ? "Register" : "Login";
});

// Handle Authentication
authButton.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (isLogin) {
        // Login User
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
            console.log("User:", userCredential.user);
        } catch (error) {
            alert("Login failed: " + error.message);
        }
    } else {
        // Register User
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            alert("Registration successful!");
            console.log("User:", userCredential.user);
        } catch (error) {
            alert("Registration failed: " + error.message);
        }
    }
});

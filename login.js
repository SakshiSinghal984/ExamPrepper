import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import {
  getAuth,
  // signInWithPopup,
  // GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBVtNaYdhWwKTQScofP30Gt0qLYFkrAosc",
    authDomain: "examprepper-c04b8.firebaseapp.com",
    projectId: "examprepper-c04b8",
    storageBucket: "examprepper-c04b8.firebasestorage.app",
    messagingSenderId: "490926880545",
    appId: "1:490926880545:web:3327946715d25b39903060",
    measurementId: "G-H8K0DE9T7S"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

let isSignUp = false;

document.getElementById("toggleLink").addEventListener("click", (e) => {
  e.preventDefault();
  isSignUp = !isSignUp;
  document.getElementById("formTitle").innerText = isSignUp ? "Sign Up" : "Sign In";
  document.getElementById("authBtn").innerHTML = isSignUp
    ? '<i class="fas fa-user-plus"></i> Register'
    : '<i class="fas fa-sign-in-alt"></i> Login';
  document.getElementById("toggleText").innerText = isSignUp
    ? "Already have an account?"
    : "Don't have an account?";
  document.getElementById("toggleLink").innerText = isSignUp ? "Sign In" : "Sign Up";
});

document.getElementById("authForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (isSignUp) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => window.location.href = "/home")
      .catch((error) => alert("Sign up failed: " + error.message));
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => window.location.href = "/home")
      .catch((error) => alert("Login failed: " + error.message));
  }
});

// document.getElementById("googleLoginBtn").addEventListener("click", () => {
//   signInWithPopup(auth, provider)
//     .then(() => window.location.href = "/home")
//     .catch((error) => alert("Google Sign-In failed: " + error.message));
// });
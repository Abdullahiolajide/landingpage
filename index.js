import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBZ1GMzIaA3etDiAWJjvRhbMhz8VdZ0y9c",
    authDomain: "bauntentication.firebaseapp.com",
    projectId: "bauntentication",
    storageBucket: "bauntentication.appspot.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth)




function authCreateNewUserWithEmail() {
    const emailInp = document.querySelector('#email');
    const passwordInp = document.querySelector('#password');
    const email = emailInp.value
    const password = passwordInp.value
    console.log(email, password)


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            window.location.href = 'signin.html'
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("ERROR HAS OCCURED")
            // ..
  });
}
window.authCreateNewUserWithEmail = authCreateNewUserWithEmail
    function authSignInWithEmail() {
        const emailInp = document.querySelector('#semail');
        const passwordInp = document.querySelector('#spassword');
        const email = emailInp.value
        const password = passwordInp.value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.href = 'dsh.html'
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Please check your credentials")
        });
}
window.authSignInWithEmail = authSignInWithEmail


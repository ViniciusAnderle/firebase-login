// script.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCe9ckwZpSb3fZGpf5oktDrwx7sMPeTG9k",
  authDomain: "tester-496f1.firebaseapp.com",
  projectId: "tester-496f1",
  storageBucket: "tester-496f1.firebasestorage.app",
  messagingSenderId: "507924410588",
  appId: "1:507924410588:web:bcf4e0507f1a6d0d7bc419"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Referências dos elementos do formulário
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

// Função de login
loginButton.addEventListener('click', (event) => {
  // Previne o comportamento padrão de refresh da página
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  // Realiza o login com Firebase Authentication
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Sucesso no login, redireciona para outra página (exemplo: logout.html)
      window.location.href = "logout.html";
    })
    .catch((error) => {
      alert("Erro de login: " + error.message);
    });
});

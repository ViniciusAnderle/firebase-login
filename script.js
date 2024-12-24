// script.js
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';

// Configuração do Firebase (use suas credenciais)
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

// Referências dos elementos da página
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const errorMessage = document.getElementById('errorMessage');

// Função de login
loginButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Usuário logado:', user);

      // Após o login, verifica se a senha é a senha padrão
      if (password === 'teste123') {
        // Redireciona para a página de alteração de senha
        window.location.href = 'updatePassword.html';
      } else {
        // Caso contrário, continue com o processo normal
        console.log('Senha não é a senha padrão.');
        window.location.href = 'logout.html';

      }
    })
    .catch((error) => {
      console.error('Erro ao fazer login:', error.message);
      errorMessage.textContent = 'Email ou senha incorretos';
    });
});

// Verifica se o usuário está autenticado ao carregar a página
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Se o usuário estiver logado, a sessão é iniciada e o redirecionamento acontece se necessário
    console.log('Usuário logado:', user);
  } else {
    console.log('Nenhum usuário logado');
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const togglePassword = document.getElementById("togglePassword");
  const password = document.getElementById("password");

  togglePassword.addEventListener("click", () => {
    // Alterna entre 'password' e 'text' para mostrar ou esconder a senha
    const type = password.type === "password" ? "text" : "password";
    password.type = type;

    // Alterna o ícone entre olho fechado e aberto
    this.classList.toggle("fa-eye-slash");
  });
});

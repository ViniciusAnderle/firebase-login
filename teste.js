import { getAuth, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';
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
const statusMessage = document.getElementById('statusMessage');
const logoutButton = document.getElementById('logoutButton');
const loginLink = document.getElementById('loginLink');
const changePasswordPrompt = document.getElementById('changePasswordPrompt');
const goToChangePasswordButton = document.getElementById('goToChangePasswordButton');

// Verifica se o usuário está logado
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Se o usuário estiver logado, mostra a mensagem de logado
    statusMessage.textContent = "Você está logado!";
    logoutButton.style.display = "block";  // Exibe o botão de logout
    loginLink.style.display = "none";  // Esconde o link de login

    // Verifica se a senha do usuário é a senha padrão "teste123"
    if (user.password === 'teste123') {
      // Se a senha for "teste123", mostra o prompt para alterar a senha
      changePasswordPrompt.style.display = "block";
    } else {
      // Caso contrário, não mostra a opção de troca de senha
      changePasswordPrompt.style.display = "none";
    }
  } else {
    // Se o usuário não estiver logado, exibe a mensagem de não logado
    statusMessage.textContent = "Você não está logado.";
    logoutButton.style.display = "none";  // Esconde o botão de logout
    loginLink.style.display = "block";  // Exibe o link de login
    window.location.href = 'index.html';

  }
});

// Função de logout
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('Deslogado com sucesso');
      // Redireciona para a página de login após o logout
      window.location.href = 'index.html';
    })
    .catch((error) => {
      console.error('Erro ao deslogar:', error.message);
    });
});

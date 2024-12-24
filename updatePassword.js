// updatePassword.js
import { getAuth, updatePassword } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';
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
const newPasswordInput = document.getElementById('newPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');
const changePasswordButton = document.getElementById('changePasswordButton');
const errorMessage = document.getElementById('errorMessage');

// Função para alterar a senha
changePasswordButton.addEventListener('click', () => {
  const newPassword = newPasswordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  
  // Valida se as senhas coincidem
  if (newPassword !== confirmPassword) {
    errorMessage.textContent = 'As senhas não coincidem. Tente novamente.';
    return;
  }

  const user = auth.currentUser;

  // Atualiza a senha do usuário
  updatePassword(user, newPassword)
    .then(() => {
      console.log('Senha alterada com sucesso');
      alert('Sua senha foi alterada com sucesso!');
      // Após a alteração, redireciona para a página de login
      window.location.href = 'index.html';
    })
    .catch((error) => {
      console.error('Erro ao alterar a senha:', error.message);
      errorMessage.textContent = 'Ocorreu um erro ao alterar a senha.';
    });
});document.addEventListener("DOMContentLoaded", () => {
    const toggleNewPassword = document.getElementById("toggleNewPassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
    const newPassword = document.getElementById("newPassword");
    const confirmPassword = document.getElementById("confirmPassword");
  
    // Função para alternar a visibilidade da senha
    function togglePasswordVisibility(input, icon) {
      const type = input.type === "password" ? "text" : "password";
      input.type = type;
      icon.classList.toggle("fa-eye-slash"); // Muda o ícone para "olho fechado"
    }
  
    // Evento para alternar a visibilidade da nova senha
    toggleNewPassword.addEventListener("click", () => {
      togglePasswordVisibility(newPassword, toggleNewPassword);
    });
  
    // Evento para alternar a visibilidade da confirmação da nova senha
    toggleConfirmPassword.addEventListener("click", () => {
      togglePasswordVisibility(confirmPassword, toggleConfirmPassword);
    });
  });
  
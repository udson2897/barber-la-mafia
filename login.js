
  // Seleciona o formulário pelo id
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // impede o envio normal do formulário

    // Pega os valores dos inputs
    const email = this.email.value;
    const senha = this.senha.value;

    // Envia os dados para o backend via fetch
    fetch('/login', {  // ajustar essa URL para a do seu backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha }) // envia email e senha no corpo da requisição
    })
    .then(response => response.json()) // espera resposta JSON
    .then(data => {
      if(data.success) {
        alert('Login efetuado com sucesso!');
        // Pode redirecionar para outra página, ex:
        // window.location.href = '/dashboard';
      } else {
        alert('Email ou senha incorretos!');
      }
    })
    .catch(error => {
      alert('Erro ao tentar logar.');
      console.error(error);
    });
  });

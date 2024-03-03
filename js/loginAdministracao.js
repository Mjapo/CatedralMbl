const backendUrl = "https://catedral-mbl-sc.onrender.com"

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Evita o envio padrão do formulário

        // Obter os dados do formulário
        const formData = new FormData(form);

        // Fazer uma requisição para obter o token
        fetch(`${backendUrl}/api/admin/login`, {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha no login. Verifique suas credenciais.');
            }
            return response.text();
        })
        .then(data => {
            // Verificar se a requisição foi bem-sucedida
            if (data) {
                // Armazenar o token no localStorage ou em um cookie (por exemplo)
                localStorage.setItem('token', data);

                // Adicionar o token ao cabeçalho Authorization
                const headers = new Headers();
                headers.append('Authorization', `Bearer ${data}`);

                // Redirecionar para a página desejada
                window.location.href = 'https://catedral-mbl-sc.vercel.app/pages/administracao.html';
            }
        })
        .catch(error => {
            alert('Usuario ou senha incorretos');
        });
    });
});
const backendUrl = "https://catedral-mbl-sc.onrender.com"
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o token de autorização está presente
    const token = localStorage.getItem('token');

    // Se o token estiver presente, fazer uma requisição para validar o token
    if (token) {
        fetch(`${backendUrl}/api/admin/auth`, {
            method: "POST", // Método usado para fazer a requisição
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // Adapte o cabeçalho conforme necessário
                'Authorization': `Bearer ${token}`, // Adiciona o token ao cabeçalho Authorization
            },
        })
        .then(response => {
            if (response.ok) {
                // Token válido, continue com o que precisar
                console.log("Token válido");
            } else {
                // Token inválido, redirecionar para a página de login
                console.log("Token inválido");
                window.location.href = 'https://catedral-mbl-front-end.vercel.app/pages/loginAdm.html';
            }
        })
        .catch(error => {
            console.error('Erro durante a requisição:', error);
            window.location.href = 'https://catedral-mbl-front-end.vercel.app/pages/loginAdm.html';
        });
    } else {
        window.location.href = 'https://catedral-mbl-front-end.vercel.app/pages/loginAdm.html';
    }
});
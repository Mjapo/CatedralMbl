const form = document.querySelector("#form_envio");
const btn_aviso = document.getElementById("formulario_aviso")

form.addEventListener('submit', function(event) {
    const token = localStorage.getItem('token');
    event.preventDefault();

    const formData = new FormData(form);
    console.log(token)
    
    if (token) {
        fetch(`${backendUrl}/api/upload`, {
            method: "POST", // Método usado para fazer a requisição
            body: formData,
            headers: {
                'enctype': 'multipart/form-data', // Adapte o cabeçalho conforme necessário
                'Authorization': `Bearer ${token}`, // Adiciona o token ao cabeçalho Authorization
            },
            
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Erro durante a requisição: ${response.status} - ${response.statusText}`);
            }
            
            setTimeout(mostrarMensagem, 1000);

            return response.json(); // ou response.text(), dependendo da resposta da API
        })
    }
})

function mostrarMensagem() {
    btn_aviso.style.display = 'block';
    setTimeout(function() {
        btn_aviso.style.display = 'none';
    }, 2000);
  }
const usuarioCadastrado = "admin";
const senhaCadastrada = "1234";


const botaoAcessar = document.getElementById("botaoAcessar");


botaoAcessar.addEventListener("click", function() {
    
    
    let tentativaUsuario = document.getElementById("email").value;
    let tentativaSenha = document.getElementById("senha").value;

  
    if (tentativaUsuario === usuarioCadastrado && tentativaSenha === senhaCadastrada) { 
        console.log("Login realizado com sucesso!");
        
      
        window.location.href = "sistema.html"; 

    } else { 
        console.log("Senha incorreta!");
        console.log("Tente novamente mais tarde.");
        
        
        alert("Usuário ou senha incorretos!");
    }
});
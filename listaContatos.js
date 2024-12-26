const listaContato = ['Joana', 'Miguel', 'Luis', 'Pedro'];
let encontrouUsuario = false;
let indiceUsuario = 0;

while (!encontrouUsuario && indiceUsuario < listaContato.length) {
    const usuarioAtual = listaContato[indiceUsuario];
    
    if (usuarioAtual.startsWith('P')) {
        encontrouUsuario = true;
        console.log(`Usuário encontrado: ${usuarioAtual}`);
    } 
    
    indiceUsuario++; // Incrementa o índice dentro do loop
}

// Verifica se o usuário não foi encontrado após o loop
if (!encontrouUsuario) {
    console.log("Usuário não encontrado");
}


const listaContato = ['Joana', 'Miguel', 'Luis', 'Pedro'];
let encontrouUsuario = false;

for (let i = 0; i < listaContato.length; i++) {
    if (listaContato[i].startsWith('P')) {
        encontrouUsuario = true;
        console.log(`Usuário encontrado: ${listaContato[i]}`);
        break; 
    }
}

if (!encontrouUsuario) {
    console.log("Usuário não encontrado");
}
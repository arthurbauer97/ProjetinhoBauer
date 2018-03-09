    function addNaLista(){
        let minha_lista = document.getElementById("minha_lista");
        let nova_lista = document.createElement("li"); // cria o elemento
        let pegatexto = document.getElementById("texto"); // pega o conteudo 

        nova_lista.textContent = pegatexto.value;
        minha_lista.appendChild(nova_lista);

        nova_lista.onclick = function(){
            nova_lista.remove(); // remove da lista
        }
    }
    

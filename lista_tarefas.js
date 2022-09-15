const frm = document.querySelector("form");
const dvQuadro = document.getElementById("divQuadro")

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do formulário
    const tarefa = frm.inTarefa.value; // obtem o conteudo digitado
    // console.log("OK")
    
    const h5 = document.createElement("h5"); //criar um elemento h5
    const text = document.createTextNode(tarefa)
    h5.appendChild(text); // define que o texto seja filho de h5
    dvQuadro.appendChild(h5) //define que h5 filho da divQuadro

    frm.inTarefa.value = "";
    frm.inTarefa.focus();
})

frm.btSelecionar.addEventListener("click", () => {
    // console.log("ok")
    const tarefas = document.querySelectorAll("h5")
    if(tarefas.length == 0) {
        alert("não há tarefas a serem selecionadas!")
        return
    }

        let aux = -1
    //percorrer a lista de elementos h5 inseridos na pagina, as tarefas
        for (let i = 0; i < tarefas.length; i++) {
           if (tarefas[i].className == "tarefa-selecionada") {
                tarefas[i].className = "tarefa-normal"
                aux=i 
                break
           }

        if (aux = tarefas.length -1) {
                aux= -1
           }

        }
        tarefas[aux + 1].className ="tarefa-selecionada"
        
})

frm.btRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")
    let aux = -1
    if (aux == -1) {
        alert("selecione uma tarefa para remover")
    }
})

frm.btRetirar.addEventListener("click", () => {

    const tarefas = documentSelectorAll("h5")

    let aux = -1
    //percorre a lista
    tarefas.forEach((tarefas, i) => {
        if (tarefas.className == "tarefa-selecionada") {
            aux = i;
        }
    });
    if (aux == -1) {
        alert("selecione uma tarefa que você já realizou..")
        return 
    }
    //solicitar a confirmação para a remoção
    if (confirm(`você realmente cumpriu a tarefa "${innerText}" e deseja remove-la?`)) {
       dvQuadro.removeChild(tarefas[aux])
    }
})

frm.btGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    if (tarefas.length == 0){
        alert("Não há tarefas a serem salvas")
    }

    let dados = "" //string para acumular os dados

    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";"
    })

    //gravar nome local storage
    localStorage.setItem("tarefasDia", dados.slice(0, -1))

    if (localStorage.getItem("tarefasDia")){
        alert("ok! Tarefas Salvas.")
    }
})

window.addEventListener("load", () => {
    if(localStorage.getItem("tarefasDia")){
        const dados = localStorage.getItem("tarefasDia").split(";")

        dados.forEach(dado => {
            const h5 = document.createElement("h5")
            const texto = document.createTextNode(dado)
            h5.appendChild(texto)
            dvQuadro.appendChild(h5)
        })
    }
})
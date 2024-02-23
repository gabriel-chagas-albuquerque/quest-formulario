const itensFormulario = document.querySelectorAll('.items-form')
const botaoEnviar = document.getElementById('botao-enviar')
const alertaCampoNaoPreenchido = document.querySelectorAll('.campo-obrigatorio')
itensFormulario.forEach(function(item,i) {
    item.addEventListener('change',() => {
        if(item.value !== ""){
        item.classList.add("borda-campo-preenchido")
        alertaCampoNaoPreenchido[i].classList.remove("alerta-campo-nao-preenchido")
        }
})
})
botaoEnviar.addEventListener('click',() => {    
    itensFormulario.forEach(function(item,i){
    if(item.value === ""){
        if(item.classList.contains("borda-campo-preenchido")){
            item.classList.remove("borda-campo-preenchido")
        }
        item.classList.add("borda-campo-nao-preenchido")
        alertaCampoNaoPreenchido[i].classList.add("alerta-campo-nao-preenchido")     
    }     
    })
})
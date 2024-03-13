const itensFormulario = document.querySelectorAll('.items-form')
const botaoEnviar = document.getElementById('botao-enviar')
const alertaCampoNaoPreenchido = document.querySelectorAll('.campo-obrigatorio')

botaoEnviar.addEventListener('click',(e) => {
    e.preventDefault()
    itensFormulario.forEach(function(input,i){
    if(input.value){
        input.classList.add('valido')
        alertaCampoNaoPreenchido[i].classList.remove('mostrar')     
    }else{
        input.classList.remove('valido')
        input.classList.add('erro')
        alertaCampoNaoPreenchido[i].classList.add('mostrar')
        
    }     
    })
})
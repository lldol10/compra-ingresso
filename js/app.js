let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent) 

function comprar(){
    //recuperar os dados
    let tipoDeIngresso = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value) ;

    if(qtd < 0 ){
        alert('numero negativo é invalido')
        return  
    }
    
    //decrementando no total
    if(tipoDeIngresso.value == 'pista'){
      comprarPista(qtd)         
    } else if (tipoDeIngresso.value == 'inferior'){
        comprarInferior(qtd);
    } else {
        comprarSuperior(qtd);
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent) ;

    if(qtd > qtdPista){
        alert('quantidade indisponivel para o tipo pista')
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra com sucesso')
        document.getElementById('qtd').value = ''
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent) ;

    if(qtd > qtdInferior){
        alert('quantidade indisponivel para o tipo Inferior')
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior
        alert('Compra com sucesso')
        document.getElementById('qtd').value = ''
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent) ;

    if(qtd > qtdSuperior){
        alert('quantidade indisponivel para o tipo Superior')
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior
        alert('Compra com sucesso')
        document.getElementById('qtd').value = ''
    }
}
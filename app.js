let texto = '';
let saida ='';
function criptografar() {
document.getElementById("imagem").style.display = "none";
document.getElementById("saidaValores").style.display = "block"
document.getElementById('h1').style.display = "none"
document.getElementById('paragrafo').style.display = "none"
document.getElementById('botaoCopiar').style.display = "block"

texto = document.getElementById('entrada').value;
saida = document.getElementById('saidaValores');

texto = texto.replace(/e/g,'enter');
texto = texto.replace(/i/g,'imes');
texto = texto.replace(/a/g,'ai');
texto = texto.replace(/o/g,'ober');
texto = texto.replace(/u/g,'ufat');

saida.value = texto;


}

function descriptografar() {
    
    texto = document.getElementById('entrada').value;
    saida = document.getElementById('saidaValores');
    
    texto = texto.replace(/enter/g,'e');
    texto = texto.replace(/imes/g,'i');
    texto = texto.replace(/ai/g,'a');
    texto = texto.replace(/ober/g,'o');
    texto = texto.replace(/ufat/g,'u');
    
    saida.value = texto;
    
    
    }

    function copiar() {
        
        
        let inputSaida = document.getElementById("saidaValores");

        // Seleciona o texto dentro do campo de entrada
        inputSaida.select();

        // Copia o texto selecionado para a área de transferência
        document.execCommand("copy");

        
       
    }
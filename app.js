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

const checar = '[@/á/é/ã/õ/A-Z/0-9/]';

if (!texto.match(checar)) {
texto = texto.replace(/e/g,'enter');
texto = texto.replace(/i/g,'imes');
texto = texto.replace(/a/g,'ai');
texto = texto.replace(/o/g,'ober');
texto = texto.replace(/u/g,'ufat');

saida.value = texto;
}else {
    alert("Caracter incorreto.\nNão digite caracteres maiúsculo e nem acentuação");
}

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

        
        inputSaida.select();

        
        document.execCommand("copy");

        alert("Texto copiado com sucesso");
        
       
    }

    
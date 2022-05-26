function btncopiar1() {
    let texto = document.getElementById('textocopiar');
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
    
}
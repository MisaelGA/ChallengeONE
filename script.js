function imprimir(entrada){
    var salida = document.getElementById("salida");
    var salidaED = entrada;
    salida.value = salidaED;
    document.getElementById("imgDer").style.display= "none";
    document.getElementById("text1").style.display= "none";
    document.getElementById("text2").style.display= "none";
}

function encriptar(){
    var palabra = Array.from(document.getElementById("texto").value);

    var i = 0; //Inicializar bucle

    for(i; i<palabra.length; i++){
        switch(palabra[i]){
            case 'a':
                palabra[i] = 'ai';
                break;
            case 'e':
                palabra[i] = 'enter';
                break;
            case 'i':
                palabra[i] = 'imes';
                break;
            case 'o':
                palabra[i] = 'ober';
                break;
            case 'u':
                palabra[i] = 'ufat';
                break;
        }
    }

    var palabraEncriptada = palabra.join('');
    imprimir(palabraEncriptada);
}

function desencriptar(){
    var palabra = document.getElementById("texto").value;

    var claves = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    var desc = ['a', 'e', 'i', 'o', 'u'];

    for(var i = 0; i < claves.length; i++){
        palabra = palabra.replaceAll(claves[i],desc[i]);
    }
    
    imprimir(palabra);
}

function copiarPortapapeles(){

    var contenido = document.querySelector('.textoCopiado').value;
    navigator.clipboard.writeText(contenido); 
} 
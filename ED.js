function encriptar(){
    var palabra = Array.from(document.getElementById("textoEncriptar").value);
    var salida = document.getElementById("salida");

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

    var salidaEncriptada = palabra.join('');
    salida.value = (salidaEncriptada);
    
}
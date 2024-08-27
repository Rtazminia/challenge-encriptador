

   


    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");

    /*Las "llaves" de encriptación que utilizaremos son las siguientes:

    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"*/

    function btnEncriptar(){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }

    function encriptar(stringEncriptada){

        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        /*console.table(matrizCodigo); Esto se utilizó para ver en inspect/console los valores de esta matriz*/
        stringEncriptada = stringEncriptada.toLowerCase();


        for (let i=0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            }
            
        }
        return stringEncriptada;

    }

    function btnDesencriptar(){
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
    }



    function desencriptar(stringDesencriptada){
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringDesencriptada.includes(matrizCodigo[i][1])){
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
            }
        } 
        return stringDesencriptada;
    }




 //Para Rosa del futuro: Investigando en Youtube conseguí un video donde explica paso a paso como
 //hacer que el textarea se pueda redimensionar. Lo hice y me da mucho gusto que 
 // quedó genial. Recuerda que si haces la prueba en el archivo de HTML, este pedazo de código debe de ir dentro de etiquetas script

    const redimensionar = document.querySelector("textarea");
        redimensionar.addEventListener("keyup",e =>{
        redimensionar.style.height = "63px";
        let scHeight = e.target.scrollHeight;
        redimensionar.style.height = `${scHeight}px`;
    });

    
    function btncopiar(){
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
    }

    
    function boton__copiar() {
        var mensajeTextarea = document.querySelector('.mensaje');
    
        mensajeTextarea.select();
        mensajeTextarea.setSelectionRange(0, 99999); 
    
        document.execCommand("copy");
    
        mensajeTextarea.value = "";
    
        
    }
    
    document.querySelector('.copiar').addEventListener('click', boton__copiar);

   


const AreaTexto=document.querySelector(".AreaTexto")
const Resultado=document.querySelector(".Resultado")
const Copia=document.querySelector(".Copiar")
function validarTexto(){
    let textoEscrito = document.querySelector(".AreaTexto").value;
    let validador = textoEscrito.match(/^[a-z]*$/);
   

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}
function encriptar(cadena){
    let mapa=new Map();
    mapa.set("e","enter");
    mapa.set("i","imes");
    mapa.set("a","ai");
    mapa.set("o","ober");
    mapa.set("u","ufat");
    cadena=cadena.toLowerCase()
    mapa.forEach((valor,clave) => {
        if(cadena.includes(clave)){
            cadena = cadena.replaceAll(clave,valor)
        }
    }); 
    return cadena;
}
function desencriptar(cadena){
    let mapa=new Map();
    mapa.set("enter","e");
    mapa.set("imes","i");
    mapa.set("ai","a");
    mapa.set("ober","o");
    mapa.set("ufat","u");
    cadena=cadena.toLowerCase()
    mapa.forEach((valor,clave) => {
        if(cadena.includes(clave)){
            cadena = cadena.replaceAll(clave,valor)
        }
    }); 
    return cadena;
}
function btn_encriptar (){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(AreaTexto.value)
        Resultado.value = textoEncriptado
        Resultado.style.backgroundImage = "none"
        AreaTexto.value = "";
        Copia.style.display = "block"
    
    }
}
function btn_desencriptar (){
    const textoEncriptado = desencriptar(AreaTexto.value)
    Resultado.value = textoEncriptado
    AreaTexto.value = "";
}
function copiar(){
    Resultado.select();
    navigator.clipboard.writeText(Resultado.value)
    Resultado.value="";
    alert("Texto Copiado")
}


const mensaje = document.getElementById('mensaje'); // Obtener el elemento del cuadro de texto por su ID
const regEx = /^[a-z\s]+$/; // Expresión regular que permite solo letras minúsculas sin acentos ni caracteres especiales
const bEncriptar = document.getElementById('Encriptar');   // Obtener el boton por ID
const bDesenncriptar = document.getElementById('Desencriptar');   // Obtener el boton por ID
let textoCodificado = '';
let textoDecodificado = '';

bEncriptar.addEventListener('click', function(evt) {
  evt.preventDefault();
  const mensajeValidado = mensaje.value.trim(); //Elimina los espacios en blanco al principio y al final
  if (mensajeValidado.match(regEx)) {
    encriptar(mensajeValidado);
    mostrarCodificado(textoCodificado);
  } else {
    alert('el valor no es valido');
  }
});

bDesenncriptar.addEventListener('click', function(evt) {
  evt.preventDefault();
  const mensajeValidado = mensaje.value.trim(); //Elimina los espacios en blanco al principio y al final
  if (mensajeValidado.match(regEx)) {
    desencriptar(mensajeValidado);
    mostrarCodificado(textoDecodificado);
  } else {
    alert('el valor no es valido');
  }
});

function encriptar(texto){
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];

        switch(letra){
          case 'a':
            textoCodificado +='ai';
            break;
          case 'e':
            textoCodificado +='enter';
            break;
          case 'i':
            textoCodificado +='imes';
            break; 
          case 'o':
            textoCodificado +='ober';
            break;
          case 'u':
            textoCodificado +='ufat';
            break;
          default:
            textoCodificado += letra;
            break;
        }
      }
    console.log(textoCodificado); // Imprimir cada letra en la consola
}

function desencriptar(texto){
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  console.log(texto);
  textoDecodificado = texto;
  return textoDecodificado;
}

function mostrarCodificado(mensaje){
  const parrafo = document.querySelector('.parrafo');
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;
  parrafo.appendChild(alerta);

  setTimeout(() => {
    alerta.remove()
    textoCodificado = '';
    textoDecodificado = '';
}, 5000);
}
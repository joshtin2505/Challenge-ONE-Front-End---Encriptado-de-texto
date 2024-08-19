function encriptar() {
  let texto = document.getElementById("texto").value;
  let noText = document.getElementById("no-text");
  let criptedTextContainer = document.getElementById("cripted-text-container");
  let criptedText = document.getElementById("cripted-text");
  let copyButton = document.getElementById("copy-cript");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    noText.style.display = "none";
    criptedTextContainer.hidden = false;
    criptedText.textContent = textoCifrado;
    copyButton.addEventListener("click", () => {
      console.log(textoCifrado);
    });
  } else {
    noText.style.display = "block";
    criptedTextContainer.hidden = true;
    criptedText.textContent = "";
    // swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let noText = document.getElementById("no-text");
  let criptedTextContainer = document.getElementById("cripted-text-container");
  let criptedText = document.getElementById("cripted-text");
  let copyButton = document.getElementById("copy-cript");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    noText.style.display = "none";
    criptedTextContainer.hidden = false;
    criptedText.textContent = textoCifrado;
    copyButton.addEventListener("click", () => {
      console.log(textoCifrado);
    });
    // parrafo.textContent = "";
    // muñeco.src = "./img/desencriptado.jpg";
  } else {
    noText.style.display = "block";
    criptedTextContainer.hidden = true;
    criptedText.textContent = "";
    // muñeco.src = "./img/muñeco.png";
    // parrafo.textContent =
    //   "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

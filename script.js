const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("clik",mostraPalavrasChave);

fuction mostraPalavrasChave(){
  const texto=document.querySelector("#entrada-de-texto#).value; 

    cost camporesultado=document.querySelector("#resuntado-palavra"); 

    const palavrasChaves=processaTexto(texto);

    campoResultado.textCotent=palavrasChaves.join(",");
  }

  function processaTexto(texto){ 
    let palavras = texto.split(/\P{L}+/u);

    return palavras;
  }
  
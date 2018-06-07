function cipher(){
  var validText = true;
  var textDescript = ""
  var caracAscii = ""
  do{
      var textCript = prompt('Digite sua frase').toUpperCase();
      if(textCript.trim() == ''){//Verifica se foi digitado alguma coisa no prompt
        alert('Digite uma frase!');
        validText = false;
      }
      else if(textCript.trim() != '' && !isNaN(parseInt(textCript))){//Verifica se o conteudo digitado é Letra.
        alert('Digite apenas letras!');
        validText = false;
      }
      else{

        for(var i = 0; i < textCript.length; i++){//faz uma loop lendo cada um dos caracteres.
          caracAscii = (textCript.charCodeAt(i) - 65 + 33) % 26 + 65;//Localiza o código ASCII do Caracter após calculo da formula.
          textDescript+= String.fromCharCode(caracAscii);//Transforma o código ASCII em Caracter e concatena
        }
        validText = true;
        alert(textDescript);
      }
      //(x - 65 + 33) % 26 + 65
  }while(validText == false);

  return true;
}

function decipher(){
  var validText = true;
  var textDescript = ""
  var caracAscii = ""
  do{
      var textCript = prompt('Digite sua frase').toUpperCase();
      if(textCript.trim() == ''){//Verifica se foi digitado alguma coisa no prompt
        alert('Digite uma frase!');
        validText = false;
      }
      else if(textCript.trim() != '' && !isNaN(parseInt(textCript))){//Verifica se o conteudo digitado é Letra.
        alert('Digite apenas letras!');
        validText = false;
      }
      else{

        for(var i = 0; i < textCript.length; i++){//faz uma loop lendo cada um dos caracteres.
          caracAscii = (textCript.charCodeAt(i) + 65 - 33) % 26 + 65;//Localiza o código ASCII do Caracter após calculo da formula.
          textDescript+= String.fromCharCode(caracAscii);//Transforma o código ASCII em Caracter e concatena
        }
        validText = true;
        alert(textDescript);
      }
      //(x - 65 - 33) % 26 + 65
  }while(validText == false);

  return true;
}

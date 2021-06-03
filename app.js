/**
 * Expressão regular que valida um
 * texto seguindo o padrão:
 * 
 * - Apenas letras
 * - Pode conter espaços
 * 
 * @example ```js
 * INPUT_PATTERN.test('Fe Caroline');
 * => true
 * 
 * INPUT_PATTERN.test('Fe Caroline 123');
 * => false
 * ```
 */
const INPUT_PATTERN = /^[a-zA-Z ]+$/;

const encryptInput = document.getElementById('encrypt-input');
const encryptButton = document.getElementById('encrypt-button');

const decryptInput = document.getElementById('decrypt-input');
const decryptButton = document.getElementById('decrypt-button');

encryptInput.onkeyup = () => {
  // Se o valor seguir o padrão e não estiver vazio,
  // habilita o botão, senão, desabilita.
  if (INPUT_PATTERN.test(encryptInput.value) && encryptInput.value.trim() !== '') {
    encryptButton.disabled = false;
  } else {
    encryptButton.disabled = true;
  }
};

encryptButton.onclick = (event) => {
  // Pra empedir o comportamento
  // padrão do formulário (recarregar
  // a página)
  event.preventDefault();

  // Define o input como caixa alta
  encryptInput.value = encryptInput.value.toUpperCase();

  let encryptedText = "";

  // Para cada caracter no input
  for (const letter of encryptInput.value) {
    //Localiza o código ASCII do Caracter após calculo da formula.
    caracAscii = (letter.charCodeAt(0) - 65 + 33) % 26 + 65;

    //Transforma o código ASCII em Caracter e concatena
    encryptedText += String.fromCharCode(caracAscii);
  }

  decryptInput.value = encryptedText;
  decryptButton.disabled = false;
};

decryptInput.onkeyup = () => {
  // Se o valor seguir o padrão e não estiver vazio,
  // habilita o botão, senão, desabilita.
  if (INPUT_PATTERN.test(decryptInput.value) && decryptInput.value.trim() !== '') {
    decryptButton.disabled = false;
  } else {
    decryptButton.disabled = true;
  }
};

decryptButton.onclick = (event) => {
  event.preventDefault();

  decryptInput.value = decryptInput.value.toUpperCase();

  let decryptedText = "";

  // Para cada caracter no input
  for (const letter of decryptInput.value) {
    // Localiza o código ASCII do Caracter após calculo da formula.
    charAsASCII = (letter.charCodeAt(0) + 65 - 33) % 26 + 65;

    // Transforma o código ASCII em Caracter e concatena
    decryptedText += String.fromCharCode(charAsASCII);
  }

  encryptInput.value = decryptedText;
  encryptButton.disabled = false;
};

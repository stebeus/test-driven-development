export function caesarCipher(string, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let cipher = '';

  for (const char in string) {
    const character = string[char];
    const isLetter = character.match(/[A-Za-z]/g);

    let charCode = string.charCodeAt(char) + key;

    if (character === character.toLowerCase()) {
      if (charCode > 122) charCode -= alphabet.length;
    } else if (charCode > 90) {
      charCode -= alphabet.length;
    }

    cipher += isLetter ? String.fromCharCode(charCode) : character;
  }

  return cipher;
}

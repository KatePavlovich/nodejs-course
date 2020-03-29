const caesarCipher = (str, shift, action) => {
  const alphabetLen = 26;
  if (action === 'decode') return caesarCipher(str, alphabetLen - shift);

  let result = '';

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];

    if (currentLetter.match(/[a-z]/i)) {
      let currentLetterNum = str.charCodeAt(i);

      if (currentLetterNum >= 65 && currentLetterNum <= 90) {
        currentLetter = String.fromCharCode(
          ((currentLetterNum - 65 + shift) % alphabetLen) + 65
        );
      } else if (currentLetterNum >= 97 && currentLetterNum <= 122) {
        currentLetter = String.fromCharCode(
          ((currentLetterNum - 97 + shift) % alphabetLen) + 97
        );
      }
    }

    result += currentLetter;
  }

  return result;
};

exports.cipherStr = caesarCipher;

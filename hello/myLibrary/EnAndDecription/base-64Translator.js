
export function binaryArrayToBase64(binaryArray) {
  // Define the base-64 character set
  const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  let base64Result = '';
  for (let i = 0; i < binaryArray.length; i++) {
      const binaryString = binaryArray[i];

      // Convert the 6-bit binary string to decimal
      const decimalValue = parseInt(binaryString, 2);

      // Map decimal value to base-64 character
      base64Result += base64Chars.charAt(decimalValue);
  }

  return base64Result;
}
export function base64ToBinary(base64String) {
  // Define the base-64 character set
  const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  let binaryResult = [];
  for (let i = 0; i < base64String.length; i++) {
      // Find the index of the current base-64 character
      const char = base64String.charAt(i);
      const charIndex = base64Chars.indexOf(char);
      console.log(charIndex)
      if (charIndex === -1) {
          throw new Error('Invalid base-64 character encountered.');
      }

      // Convert the index to a 6-bit binary string and push to result array
      const binaryString = charIndex.toString(2).padStart(6, '0');
      binaryResult.push(binaryString);
  }

  return binaryResult;
}
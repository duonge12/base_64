export function binaryArrayToAscii(binaryArray) {
    let asciiResult = '';
    for (let i = 0; i < binaryArray.length; i++) {
        // Convert each 8-bit binary string to decimal
        const decimalValue = parseInt(binaryArray[i], 2);
        // Convert decimal value to ASCII character
        const asciiChar = String.fromCharCode(decimalValue);
        // Append the ASCII character to the result
        asciiResult += asciiChar;
    }
    return asciiResult;
}
export function from_Text_To_ASCIIIndex(text){

    let asciiArray = [];
    for (let i = 0; i < text.length; i++) {
        let asciiCode = text.charCodeAt(i); 
        asciiArray.push(asciiCode); 
    }
    return asciiArray   //result look like this [97,98,....]
}
export function asciiIndexToBinaryArray(asciiArray) {
    const binaryArray = [];

    // Iterate through each ASCII index
    for (let i = 0; i < asciiArray.length; i++) {
        const asciiIndex = asciiArray[i];

        // Convert ASCII index to 8-bit binary string
        const binaryString = asciiIndex.toString(2).padStart(8, '0');
        
        // Push binary string to result array
        binaryArray.push(binaryString);
    }

    return binaryArray;
}
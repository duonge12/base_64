import React, { useState, useRef } from 'react';
import { getXBit } from '../myLibrary/EnAndDecription/getXBit';
import { binaryArrayToBase64, base64ToBinary } from '../myLibrary/EnAndDecription/base-64Translator';
import { binaryArrayToAscii, from_Text_To_ASCIIIndex, asciiIndexToBinaryArray } from '../myLibrary/EnAndDecription/asciiTranslator';

const Page = ({ name }) => {
  const [inputText, setInputText] = useState('');
  const [resultText, setResultText] = useState('');
  const [fileBase64, setFileBase64] = useState('');
  const fileInputRef = useRef(null);

  const textEncode = () => {
    const asciIndexArr = from_Text_To_ASCIIIndex(inputText);
    const eightBitArr = asciiIndexToBinaryArray(asciIndexArr);
    const sixBitArr = getXBit(eightBitArr, 6);
    setResultText(binaryArrayToBase64(sixBitArr));
  };

  const textDecode = () => {
    const sixBitArr = base64ToBinary(resultText);
    const eightBitArr = getXBit(sixBitArr, 8);
    setInputText(binaryArrayToAscii(eightBitArr));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileBase64(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {name === 'text' && (
        <>
          <div className='bttn_feature'>
            <button onClick={textEncode}>Chuyển sang base-64</button>
            <button onClick={textDecode}>Dịch base-64</button>
          </div>
          <div className='input_result'>
            <input
              type="text"
              placeholder="Nhập vào đây..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            
            <input
              type="text"
              placeholder="Result"
              value={resultText}
              onChange={(e) => setResultText(e.target.value)}
            />
          </div>
        
          
        </>
      )}

      {name === 'image' && (
        <>
        <div className='input_result'>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <input
              type="text"
              id="base-64"
              placeholder="Result"
              value={fileBase64}
              readOnly
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;


  export function getXBit(XBitarr,YBit){
          
 
    function from_XBinary_To_YBinary(XBitarr,YBit) 
    {
        let YBitarr=[]
        let YBitarr_ele;

        let XBinaryStr = XBitarr.join('');
        let XBinaryStr_length=XBinaryStr.length

        let odd=XBinaryStr_length%YBit;
        let count=Math.floor(XBinaryStr_length/YBit);

        let amountOfPadding=YBit-odd
        if(amountOfPadding==YBit)
        {
            amountOfPadding=0;
        }
        if(amountOfPadding===0)
        {
            for(let i=0;i<count;i++)
            {
                
                    YBitarr_ele= XBinaryStr.slice(0,YBit);
                  
                    YBitarr.push(YBitarr_ele)
                    XBinaryStr=XBinaryStr.substring(YBit)
                    
                    
                
            }
        }
        else
        {
            for(let i=0;i<count;i++)
            {
                
                YBitarr_ele= XBinaryStr.slice(0,YBit);
                
                YBitarr.push(YBitarr_ele)
                XBinaryStr=XBinaryStr.substring(YBit)
            
                
            }
            for(let i=0;i<amountOfPadding;i++)
            {
                XBinaryStr+='0'
                

            }
            
            YBitarr.push(XBinaryStr)
        }
        
        return YBitarr
    }
    let YBitarr=from_XBinary_To_YBinary(XBitarr,YBit)
    
    return YBitarr
    

}
  
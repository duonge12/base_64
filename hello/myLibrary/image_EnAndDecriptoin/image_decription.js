export function getImageFile(inputElement){
    inputElement.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.src = e.target.result;
                baseform.value = e.target.result;
                img.onload = function() {
                    imageTo8BitArray(img, function(a) {
                        console.log(a); // For debugging, log the result
                    });
                };
            };
            reader.readAsDataURL(file);
    
            
        }
    });

}
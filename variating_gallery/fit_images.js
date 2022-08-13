// Fit images on row
function fit_images(){
    const img_elements = document.querySelectorAll('.mixed_gallery img');
    for(let x = 0; x < (img_elements.length); x++){

        let img = new Image();
        let img_elem = img_elements[x]
        img.src = img_elem.getAttribute('src');
        img.onload = function () {
            img_elements[x].setAttribute('style',
                `width:${this.width*200/this.height}px;
                flex-grow:${this.width*200/this.height}`)
        };
    }
}

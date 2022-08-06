function make_gallery(div_id, folder, images){
    let html_gallery = ''
    let img_folder = folder

    if (folder.slice(-1)  != '/'){
        img_folder += '/'
    }

    images.forEach(img =>{
            alt = img.split('.')[0]
            caption = alt.charAt(0).toUpperCase() + alt.slice(1)
            caption = caption.replace(/-|_/g,' '); 
            html_gallery += `
            <figure>
                <img src="${img_folder}${img}" alt="${caption}" title="${caption}">
                <figcaption>${caption} 
                </figcaption>
            </figure>
            `
    });

    document.getElementById(div_id).innerHTML = html_gallery;
    document.getElementById(div_id).setAttribute('class', 'auto_gallery')
}

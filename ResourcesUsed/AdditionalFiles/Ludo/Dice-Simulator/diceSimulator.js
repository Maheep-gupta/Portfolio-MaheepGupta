function rollNow() {
    let randomFace=Math.floor(Math.random() * 6);
    let imagesArray=document.getElementsByClassName('faces');
    for (let index = 0; index < imagesArray.length; index++) {
        const displayNot=imagesArray[index];
        displayNot.classList.remove('faces-display');
        const element = imagesArray[randomFace];
        element.classList.add('faces-display')

        
    }
}

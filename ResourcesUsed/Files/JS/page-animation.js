
document.onreadystatechange = () => {
    document.getElementsByClassName("loadingScreen")[0].classList.remove("Hide")
    if (document.readyState === 'complete') {

        setTimeout(()=>{managingAnimation()},1000)

    }
    
}
function managingAnimation() {
    document.getElementsByClassName("loadingScreen")[0].classList.add("Hide")



    // Moving the Title content 
    // document.getElementsByClassName("title-content")[0].classList.add("slideInLeft")

    document.getElementsByClassName("title-content")[0].classList.add("Hide")

    document.getElementsByTagName('body')[0].classList.add("slideInRight")

    
    // adding a event listener to know when animation performs a different task
    document.getElementsByTagName('body')[0].addEventListener('animationend', () => {
        // after completing the animation unhide the subtitle and performing the animation

        document.getElementsByClassName("title-content")[0].classList.remove("Hide")
        
        document.getElementsByClassName("title-content")[0].classList.add("main-content-bounce")


        document.getElementsByClassName("title-content")[0].addEventListener('animationend',()=>{
            document.getElementsByClassName("subtitle")[0].classList.remove("Hide");
        })

        // Adding intro animation to background 

        setTimeout(()=>{
            document.getElementsByClassName("subtitle")[0].classList.add("slideInLeft")
        }, 200)

      });
}


function coloringLinks(coloringId){
    coloringId.classList.add("visitedLinkShadow");

    coloringId.classList.remove("nav-links");
    
    coloringId.style.color="#C65555";
    coloringId.style.textShadow="0 0 10px #c65555b0";
}
function deColoringLinks(){
    var deColoringArray=document.getElementsByClassName("nav-design");
    for (let index = 0; index < deColoringArray.length; index++) {
        const element = deColoringArray[index];
        var elementId=element.removeAttribute('style');
        // .classList.add("nav-links");
    }
}
function disablingCloseButton(){
    document.getElementsByClassName("navBurgerIconContent")[0].classList.add("Hide");
    document.getElementById("hamburger-icon").style.display="flex";
    document.getElementById("hamburger-icon-close").classList.add("Hide");
}
function aboutMeAnimation(){
    disablingCloseButton();
    window.location.assign("index.html#about-me-section")
    // window.location.assign("./ResourcesUsed/HtmlFiles/aboutMe.html")
    deColoringLinks();

    var coloringId=document.getElementById("about-me-link");

    coloringLinks(coloringId);

    var targetElementForAnimation = document.getElementsByClassName("aboutme-section-animation");

    for (let index = 0; index < targetElementForAnimation.length; index++) {
        const element = targetElementForAnimation[index];
        element.style.animation = 'none';
        element.offsetHeight; /* trigger reflow */
        element.style.animation = null;
    }
    
    
}

function portfolioAnimation(){
    disablingCloseButton();
    window.location.assign("index.html#portfolio-section")
    
    deColoringLinks();
    var coloringId=document.getElementById("portfolio-link");

    coloringLinks(coloringId);

    document.getElementById("portfolio-link").classList.add("visitedLink")
    var targetElementForAnimation = document.getElementsByClassName("portfolio-section-animation");
    for (let index = 0; index < targetElementForAnimation.length; index++) {
        const element = targetElementForAnimation[index];
        element.style.animation = 'none';
        element.offsetHeight; /* trigger reflow */
        element.style.animation = null;
    }
    
    
}
function blogsAnimation(){
    disablingCloseButton();
    window.location.assign("index.html#blog-section")
    deColoringLinks();
    var coloringId=document.getElementById("blog-link");
    coloringLinks(coloringId);
    

    document.getElementById("blog-link").classList.add("visitedLink")
    var targetElementForAnimation = document.getElementsByClassName("blogs-section-animation");
    for (let index = 0; index < targetElementForAnimation.length; index++) {
        const element = targetElementForAnimation[index];
        element.style.animation = 'none';
        element.offsetHeight; /* trigger reflow */
        element.style.animation = null;
    }
    
    
}
function contactAnimation(){
    disablingCloseButton();
    window.location.assign("index.html#contact-section")
    deColoringLinks();
    var coloringId=document.getElementById("contact-link");
    coloringLinks(coloringId)
    document.getElementById("contact-link").classList.add("visitedLink")
    var targetElementForAnimation = document.getElementsByClassName("contact-section-animation");
    for (let index = 0; index < targetElementForAnimation.length; index++) {
        const element = targetElementForAnimation[index];
        element.style.animation = 'none';
        element.offsetHeight; /* trigger reflow */
        element.style.animation = null;
    }
    
    
}
function mainPageAnimation() {
    deColoringLinks();
    window.location.assign("index.html#main-page-intro")
    var targetElementForAnimation = document.getElementsByClassName("section-title-animation");

    for (let index = 0; index < targetElementForAnimation.length; index++) {
        const element = targetElementForAnimation[index];
        element.style.animation = 'none';
        element.offsetHeight; /* trigger reflow */
        element.style.animation = null;
    }

}
function animationOfPageSections() {
    // About Us title
    if (window.pageYOffset > 200) {
        // window.location.assign("aboutMe.html#about-me-section")
        document.getElementsByClassName("intro-bio")[0].classList.add("slideInX-title")    
    }
    // MySkills
    if (window.pageYOffset > 700) {
        document.getElementById("my-skills-section").classList.add("slideInRight")
    }
    // portfolio title
    if (window.pageYOffset > 1520) {
        document.getElementsByClassName("title-portfolio")[0].classList.add("slideInX-title")
    }
    // portfolio projects
    if (window.pageYOffset > 1600) {
        let projectsArray=document.getElementsByClassName("projects");
        setTimeout( ()=>{
            for (let index = 0; index < projectsArray.length; index++) {
                const element = projectsArray[index];
                if (index%2==0) {
                    element.classList.add("slideInRight")
                }
                else{
                    element.classList.add("slideInLeft")
                }        
            }           
        },100);
        
    }
    // Blogs title
    if (window.pageYOffset > 2670) {
        // Blog Cards
        document.getElementsByClassName("title-blog")[0].classList.add("slideInX-title")
    }
    // Blogs Cards
    if (window.pageYOffset > 2700) {
        // Blog Cards
        
        let cardArray=document.getElementsByClassName("card-main");
        // Solution for Media Query for mobile
        setTimeout( ()=>{
            for (let index = 0; index < cardArray.length; index++) {
                const element = cardArray[index];
                if (index%2==0) {
                    element.classList.add("slideInRight")
                }
                else{
                    element.classList.add("slideInLeft")
                }        
            }           
        },100)
        // Solution for Desktop
        setTimeout( ()=>{
            for (let index = 0; index < cardArray.length; index++) {
                const element = cardArray[index];
                if (index%2==0) {
                    element.classList.add("slideInRight")
                }
                else{
                    element.classList.add("slideInLeft")
                }        
            }           
        },100)
    }
    // contact title
    if (window.pageYOffset > 3400) {
        document.getElementsByClassName("title-contact")[0].classList.add("slideInX-title")
    }
    // Contact form
    if (window.pageYOffset > 3480) {
        let projectsArray=document.getElementsByClassName("form-input");
        setTimeout( ()=>{
            for (let index = 0; index < projectsArray.length; index++) {
                const element = projectsArray[index];
                element.classList.add("slideInUp")       
            }           
        },100);
        
    }
    
}
window.onscroll= ()=>{
    // Need to assign the function on the basis of media query
    animationOfPageSections();
}

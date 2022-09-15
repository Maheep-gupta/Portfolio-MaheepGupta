// Hello World
//check for Navigation Timing API support


const pageAccessedByReload = (
    (window.performance.navigation && window.performance.navigation.type === 1) ||
      window.performance
        .getEntriesByType('navigation')
        .map((nav) => nav.type)
        .includes('reload')
);
if (pageAccessedByReload==true){
    window.location.assign("index.html")   
}
function submitForm(){
    let formButton=document.getElementsByName('contact-form')[0];
    formButton.submit();
    formButton.reset();
    alert("Sorry! This form is not working now, But this will be available Very Soon")
}
// Adding animation on hover on main page content Section
function elementHovered(hoveredElement){
    var hoveredEleId=hoveredElement.id
    document.getElementById(hoveredEleId).classList.add("animation-on-hover-main-page")
    document.getElementById(hoveredEleId).style.color = "#ff6666";
    document.getElementById(hoveredEleId).classList.remove("animation-on-hover-out-main-page")
}
function elementOutHovered(hoveredElement){
    var hoveredEleId=hoveredElement.id
    document.getElementById(hoveredEleId).classList.add("animation-on-hover-out-main-page")
    document.getElementById(hoveredEleId).classList.remove("animation-on-hover-main-page")
    document.getElementById(hoveredEleId).style.color = "#fff";
}
function hamburgerActivated() {

    document.getElementById("hamburger-icon").style.display="none";
    document.getElementsByClassName("navBurgerIconContent")[0].classList.remove("Hide");
    document.getElementById("hamburger-icon-close").style.left="0";document.getElementById("hamburger-icon-close").classList.remove("Hide");


}
function hamburgerDeactivate(){
    document.getElementById("hamburger-icon").style.display="flex";
    document.getElementById("hamburger-icon-close").classList.add("Hide");
    document.getElementsByClassName("navBurgerIconContent")[0].classList.add("Hide");
}

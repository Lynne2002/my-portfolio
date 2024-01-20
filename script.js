/* Page loader*/
window.addEventListener("load", () =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    /*-----------------Page loader-------------*/
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".page-loader").style.display="none";

    },900);

});

/* Hamburger menu */
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
//typing animation script
var typed= new Typed(".typing", {
    strings:["Developer", "Backend Developer", "Student", "Frontend Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
    });
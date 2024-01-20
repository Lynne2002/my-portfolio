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
/*-------------------------About Tabs---------------------- */
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("tab-item")&&!e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target= e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

/*-------------------------Skills---------------------- */
const skills_wrap = document.querySelector(".about-skills"),
    skills_bar = document.querySelectorAll(".progress-line");
window.addEventListener("scroll", () => {
    skillsEffect();
})
function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}
function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
}
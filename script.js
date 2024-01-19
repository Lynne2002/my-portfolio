/* Page loader*/
window.addEventListener("load", () =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelecto(".home-section").classList.add("active");
    /*-----------------Page loader-------------*/
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".page-loader").style.display="none";

    },900);

});
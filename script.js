const svgMenu = document.querySelector(".headerMenuSvg")
const menu = document.querySelector(".kontrolPaneli")

svgMenu.addEventListener("click", ()=>{
    if(svgMenu.classList != "headerMenuSvg menuClick"){
        svgMenu.classList.add("menuClick");
        menu.classList.add("open");

    }else{
        svgMenu.classList.remove("menuClick");
        menu.classList.remove("open")
    }
})
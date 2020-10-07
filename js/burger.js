/*debut ajout de bouton dynamique menu burger*/
const burger = document.querySelector(".burger");
burger.addEventListener("click",function (){
    burger.classList.add("active");
})
/*fin ajout de bouton dynamique menu burger*/

/*Debut importation donnee sideBar*/
const burgerContent = document.querySelector(".menuNav");
const sideBarBody = document.querySelector("#burgerSideBar-body");

sideBarBody.innerHTML = burgerContent.innerHTML;
/*Fin importation donnee sideBar*/

/*Debut activation sideBar*/
const overlay = document.querySelector("#burgerOverlay");
const activatedclass = "burgerActivated";
burger.addEventListener("click", function(e){
    e.preventDefault();
    this.parentNode.classList.add(activatedclass);
})

overlay.addEventListener("click", function(e){
    e.preventDefault();
    this.parentNode.classList.remove(activatedclass);
    
    burger.classList.remove("active"); 
    /*ajout de ca pour remettre en position 0 le menu burger*/
});

/*Fin activation sideBar*/




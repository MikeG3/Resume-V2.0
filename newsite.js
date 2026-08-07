/*==================================================
    NEW SITE POPUP
==================================================*/
const popup = document.getElementById("newSitePopup");
const closeButton = document.getElementById("closeNewSitePopup");
const continueButton = document.getElementById("continueOldSite");
const remember = document.getElementById("rememberPopup");

/*==================================================
    SHOW
==================================================*/
window.addEventListener("load", () => {

    if(localStorage.getItem("hideNewPortfolioPopup"))
        return;
    setTimeout(() => {
        popup.classList.remove("popupHidden");
    },800);

});

/*==================================================
    CLOSE
==================================================*/
function closePopup(){

    if(remember.checked){
        localStorage.setItem(
            "hideNewPortfolioPopup",
            "true"
        );

    }
    popup.classList.add("popupHidden");
}

closeButton.addEventListener( "click", closePopup );
continueButton.addEventListener( "click", closePopup );
document.addEventListener("DOMContentLoaded",function(){
    let modal=document.getElementByld("authModal");
    let btn=document.getElementByld("profile-icon");
    let closeBtn=document.querySelector(".close-button");
    btn.onlick=function(){
        modal.style.display="flex";
    };
    closeBtn.onlick=function(){
        modal.style.display="none";
    };
});
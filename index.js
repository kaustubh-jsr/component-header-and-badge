let hideableBadgeBtn = document.getElementById("hidable-badge-btn");

function toggleBadgeVisibility(e){
    let badge = e.target.firstChild;
    if(badge.style.visibility === ""){
        badge.style.visibility = "hidden"
    }else{
        badge.style.visibility = ""
    }
}
hideableBadgeBtn.addEventListener("click",toggleBadgeVisibility);
let buttonact = document.getElementById ("buttonact"); 
var clicks = 0;

buttonact.onclick = () => {console.log("Item has been succcessfully added to your shopping cart"); clicks += 1;
document.getElementById("clicks").innerHTML = clicks; };

let buttonact2 = document.getElementById ("buttonact2"); 

buttonact2.onclick = () => {console.log("All items have been removed from your basket"); clicks = 0; document.getElementById("clicks").innerHTML = clicks;};

var cbdimg = document.getElementById ("cbdimg");

cbdimg.addEventListener("mouseover", function() {
    this.style.opacity = "40%";
})

cbdimg.addEventListener("mouseout", function() {
    this.style.opacity = "100%";
})
let buttonact = document.getElementById ("buttonact"); 
var clicks = 0;

buttonact.onclick = () => {console.log("Item has been succcessfully added to your shopping cart"); clicks += 1;
document.getElementById("clicks").innerHTML = clicks; };


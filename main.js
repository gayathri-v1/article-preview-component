
function share(){
    var x = window.matchMedia("(min-width: 376px)");
    myFunction(x);
    x.addEventListener("change", function() {
        myFunction(x);
});
}

function myFunction(x) {
    if (x.matches) { 
        document.querySelector(".share-triangle").style.display="inline";
    } else {
        document.querySelector(".share-triangle").style.display="block";
        
    }
  }
  
  
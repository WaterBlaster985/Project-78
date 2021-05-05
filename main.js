var familypics = ["Mom.jpg","Neel.png","Nyra.png","Risadi.jpg"];
var names = ["Swapna", "Neel","Nyra","Rishi"];
var x = 0
function next(){
    document.getElementById("pics").src=familypics[x]
    document.getElementById("name").textContent=names[x]
    x++
    if(x==4){
        x=0
    }
}
window.onload = function() {
    let tri = document.getElementById("triangle");
    let xPos=0;
    let yPos=0;
    let up=false;
    console.log(triangle);
    let id = setInterval( (function(){
        if(xPos == 300) {
            clearInterval(id);
        } else {
            xPos++;
            tri.style.left = xPos + "px";
            if(yPos == 40) {
                up=true;
            } if(yPos == 0) {
                up = false;
            }
            up ? yPos-- : yPos++;
            triangle.style.top = yPos + "px";
            console.log(xPos, yPos, triangle.style.left);
        }
    }), 10);
}
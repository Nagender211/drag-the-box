function drag() {
    let dragging = null;
    let mouseX, mouseY;
    let eleX, eleY;
    const boxes = document.querySelectorAll("[draggable]");
    const dragPlaySound=document.getElementById("dragPlaySound");
    const dragPlaySound1=document.getElementById("dragPlaySound1");
    const dragPlaySound2=document.getElementById("dragPlaySound2");
    dragPlaySound.volume=0.0009;

    boxes.forEach(box => {
        box.addEventListener("mousedown", mouseDown);
        box.style.position = 'absolute';
        box.style.top = 0;
        box.style.left = 0;
    });

    function mouseDown(e) {
        e.preventDefault();
        dragging = this;
        mouseX = e.pageX;
        mouseY = e.pageY;

        eleX = dragging.offsetLeft;
        eleY = dragging.offsetTop;

        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
       
      
        
    }

    function mouseMove(e) {
        if (dragging) {
            const DMX = e.pageX - mouseX;
            const DMY = e.pageY - mouseY;
            dragging.style.left = eleX + DMX + "px";
            dragging.style.top = eleY + DMY + "px";
            if (eleX + DMX < windowWidth / 3) {
                dragPlaySound.play();
            } else if (eleX + DMX < (2 * windowWidth) / 3) {
                dragPlaySound1.play();
            } else {
                dragPlaySound1.pasuse();
                dragPlaySound2.play();
            }

            
            const coordDisplay = document.getElementById("coordDisplay");
            const leftDragged=coordDisplay.innerText = `Left: ${eleX + DMX}px`;
            const topDragged=coordDisplay.innerText += `\nTop: ${eleY + DMY}px`;
            dragPlaySound2.play();
            if (DMX > 500) {
                document.body.style.backgroundColor = 'red';
            } else {
                document.body.style.backgroundColor = '';
            }

        }
      
    }

    function mouseUp() {
        dragging = null;
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
        dragPlaySound.play();

        
    }
}

drag();
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

console.log("Window height:", windowHeight);
console.log("Window width:", windowWidth);


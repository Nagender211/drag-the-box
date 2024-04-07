function drag(){
    let dragging = null;
    let mouseX, mouseY;
    let eleX, eleY;
    const boxes = document.querySelectorAll("[draggable]");
    
    boxes.forEach(box => {
        box.addEventListener("mousedown", mouseDown);
        box.style.position = 'absolute'; // Ensure position is set to absolute for proper dragging
        box.style.top = 0;
        box.style.left = 0;
    });

    function mouseDown(e){
        e.preventDefault();
        dragging = this;
        mouseX = e.pageX;
        mouseY = e.pageY;

        eleX = dragging.offsetLeft; // Use offsetLeft to get the initial position
        eleY = dragging.offsetTop; // Use offsetTop to get the initial position

        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
    }

    function mouseMove(e){
        if(dragging){
            const DMX = e.pageX - mouseX;
            const DMY = e.pageY - mouseY;
            dragging.style.left = eleX + DMX + "px";
            dragging.style.top = eleY + DMY + "px";
        }
    }

    function mouseUp(){
        dragging = null;
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
    }
    
}

drag();

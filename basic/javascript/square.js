draw_square();

function draw_square() {
    const canvas_square = document.querySelector("#canvas_square");
    if (canvas_square.getContext) {
        const ctx = canvas_square.getContext("2d");
        //Draws a filled rectangle.
        //fillRect(x, y, width, height) ;
        ctx.fillRect(10, 10, 100, 100);

        //Draws a rectangular outline.
        //strokeRect(x, y, width, height);
        ctx.strokeRect(10, 120, 100, 100);

        //Clears the specified rectangular area, making it fully transparent.
        //clearRect(x, y, width, height);
        ctx.clearRect(10, 20, 100, 100);
    }
}
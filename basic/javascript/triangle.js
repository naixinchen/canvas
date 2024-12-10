draw_triangle();

function draw_triangle() {
    const canvas_triangle = document.querySelector("#canvas_triangle");
    if (canvas_triangle.getContext) {
        const ctx = canvas_triangle.getContext("2d");
        // Filled triangle
        // Creates a new path.
        ctx.beginPath();

        // Moves the pen to the coordinates specified by x and y.
        // moveTo(x, y);
        ctx.moveTo(150, 10); // vertex of triangle

        // Draws a line from the current drawing position to the position specified by x and y.
        // lineTo(x, y);
        ctx.lineTo(75, 140);  // left side of triangle
        ctx.lineTo(225, 140); // bottom side of triangle
        ctx.lineTo(150, 10);  // right side of triangle

        // Draws a solid shape by filling the path's content area
        ctx.fill();



        // Stroked triangle
        ctx.beginPath();
        ctx.moveTo(150, 160); // vertex of triangle
        ctx.lineTo(75, 290);  // left side of triangle
        ctx.lineTo(225, 290); // bottom side of triangle
        ctx.lineTo(150, 160);  // right side of triangle

        //Adds a straight line to the path, going to the start of the current sub-path.
        ctx.closePath();
        //Draws the shape by stroking its outline.
        ctx.stroke();
    }
}
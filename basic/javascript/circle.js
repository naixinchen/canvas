draw_circle();

function draw_circle() {
    const canvas_circle = document.querySelector("#canvas_circle");
    if (canvas_circle.getContext) {
        const ctx = canvas_circle.getContext("2d");

        ctx.beginPath();
        // ctx.moveTo(30,20);
        // Draws an arc which is centered at (x, y) position with radius r 
        // starting at startAngle and ending at endAngle going in the given direction indicated by counterclockwise (defaulting to clockwise).
        // arc(x, y, radius, startAngle, endAngle, counterclockwise);
        ctx.arc(60, 60, 50, 0, 2 * Math.PI, true); //a circle

        // 1/8 arc in the upper right corner
        ctx.moveTo(170, 60);
        ctx.arc(170, 60, 50, 0, - Math.PI / 4, true);
        ctx.lineTo(170, 60);

        // 1/8 arc in the upper right corner
        ctx.moveTo(280, 60);
        ctx.arc(280, 60, 50, - Math.PI / 2, -Math.PI / 4, false);
        ctx.lineTo(280, 60);

        // 1/8 arc in the upper left corner
        ctx.moveTo(390, 60);
        ctx.arc(390, 60, 50, - Math.PI / 2, -3 * Math.PI / 4, true);
        ctx.lineTo(390, 60);


        // 1/8 arc in the upper left corner
        ctx.moveTo(500, 60);
        ctx.arc(500, 60, 50, Math.PI, -3 * Math.PI / 4, false);
        ctx.lineTo(500, 60);


        //------------------------
        ctx.moveTo(110, 170);
        ctx.arc(60, 170, 50, 0, 2 * Math.PI, true);

        // 1/8 arc in the bottom right corner
        ctx.moveTo(170, 170);
        ctx.arc(170, 170, 50, 0, Math.PI / 4, false);
        ctx.lineTo(170, 170);

        // 1/8 arc in the bottom right corner
        ctx.moveTo(280, 170);
        ctx.arc(280, 170, 50, Math.PI / 2, Math.PI / 4, true);
        ctx.lineTo(280, 170);

        // 1/8 arc in the bottom left corner
        ctx.moveTo(390, 170);
        ctx.arc(390, 170, 50, Math.PI / 2, 3 * Math.PI / 4, false);
        ctx.lineTo(390, 170);


        // 1/8 arc in the bottom left corner
        ctx.moveTo(500, 170);
        ctx.arc(500, 170, 50, -Math.PI, 3 * Math.PI / 4, true);
        ctx.lineTo(500, 170);


        //-------------------------------------------
        ctx.moveTo(110, 280);
        ctx.arc(60, 280, 50, 0, 2 * Math.PI, true);

        // 1/4 arc in the upper right corner
        ctx.moveTo(170, 280);
        ctx.arc(170, 280, 50, 0, -Math.PI / 2, true);
        ctx.lineTo(170, 280);

        // 1/4 arc in the upper left corner
        ctx.moveTo(280, 280);
        ctx.arc(280, 280, 50, -Math.PI / 2, Math.PI, true);
        ctx.lineTo(280, 280);

        // 1/4 arc in the upper left corner
        ctx.moveTo(390, 280);
        ctx.arc(390, 280, 50, Math.PI, Math.PI / 2, true);
        ctx.lineTo(390, 280);

        // 1/4 arc in the upper right corner
        ctx.moveTo(500, 280);
        ctx.arc(500, 280, 50, Math.PI / 2, 0, true);
        ctx.lineTo(500, 280);

        //-------------------------------------
        // 1/2 arc in the upper corner
        ctx.moveTo(110, 390);
        ctx.arc(60, 390, 50, 0, Math.PI , true);
        ctx.lineTo(110, 390);

        // 1/2 arc in the bottom corner
        ctx.moveTo(120, 340);
        ctx.arc(170, 340, 50, 0, Math.PI , false);
        ctx.lineTo(170, 340);


        ctx.stroke();
        // ctx.fill()

        // arc(x, y, radius, startAngle, endAngle, counterclockwise);
        // Change the counterclockwise value "true" of the above graphic arc function to "false", or change "false" to "true"
        // you will get the arc of another part of the entire element.
    }
}
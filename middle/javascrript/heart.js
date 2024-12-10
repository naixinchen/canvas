canvas_heart();

function canvas_heart() {
    const canvas_heart = document.querySelector("#canvas_heart");
    if (canvas_heart.getContext) {
        const ctx = canvas_heart.getContext("2d");

        ctx.beginPath();
        ctx.arc(440, 200, 100, Math.PI / 4, -3 * Math.PI / 4, true);
        ctx.arc(300, 200, 100, -Math.PI / 4, 3 * Math.PI / 4, true);
        ctx.lineTo(370, 400);
        ctx.lineTo(511.5, 270);
        ctx.fillStyle = "red";
        ctx.fill();
    }
}
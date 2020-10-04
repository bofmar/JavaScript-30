const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "#BADA55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 100;
context.globalCompositeOperation = "multiply";

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing){
        return; //do nothing if the user is not drawing
    }

    console.log(e);
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.beginPath();
    //start from
    context.moveTo(lastX, lastY);
    //go to
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    //update
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
    if(context.lineWidth >= 100 || context.lineWidth <= 1){
        direction = !direction;
    }
    if(direction){
        context.lineWidth++;
    }
    else{
        context.lineWidth--;
    }
}

canvas.addEventListener("mousemove",draw);

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", ()=> isDrawing = false);
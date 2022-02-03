function preload() { }

function setup() {
    canvas = createCanvas(640, 480)
    canvas.position(400, 350)
    video = createCapture(VIDEO)
    video.hide()
}
function draw() {
        image(video, 0, 0, 640, 480);
        fill("blue")
        stroke("red")
        circle(50,50,80)
        circle(500,50,80)
        circle(50,500,80)
        circle(500,500,80)
        fill("green")
        stroke("grey")
        rect(90,35,370,25)
        rect(35,90,25,370)
        rect(490,90,25,370)
        rect(200,490,370,25)
    }

    function take_snapshot() {
        save("save.png")
    }

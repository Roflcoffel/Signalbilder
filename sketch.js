function setup() {
    createCanvas(1270, 720);
}

function draw() {
    background(240);
    //huvudsignal(300,100,3)
    //försignal(650,300,3)
}

function huvudsignal(x, y, size=1) {
    noStroke()

    let w = 50*size
    let h = 70*size

    fill(color(0,0,0))
    rect(x, y, w, h)
    circle(x+w/2, y, w)
    circle(x+w/2, y+h, w)

    fill(color(240,240,240))
    circle(x+w/2, y, w/2)
    circle(x+w/2, y+h/2, w/2)
    circle(x+w/2, y+h, w/2)

    noFill()
    strokeWeight(2*size)
    stroke(255,255,255)
    let arc_w = w-(3*size)
    let line_x = 1.5*size
    arc(x+(w/2), y, arc_w, arc_w, PI, 0);
    arc(x+(w/2), y+h, arc_w, arc_w, 0, PI);
    line(x+line_x, y, x+line_x, y+h)
    line(x+w-line_x, y, x+w-line_x, y+h)
}

function försignal(x, y, size=1) {
    noStroke()

    let w = 50*size
    let h = 70*size
   
    fill(color(0,0,0))
    circle(x, y, w+w)

    fill(color(240,240,240))
    circle(x, y-h/2.5, w/2)
    circle(x, y, w/2)
    circle(x, y+h/2.5, w/2)

    noFill()
    strokeWeight(2)
    stroke(255,255,255)
    
    //To create the white part of the försignal, mabye we just create a loop of like 10
    //arcs that gets progressivly smaller, in the arc width, and then maybe add a line
    //to create a flat part of the bent rectangle
    arc(x+(w/2), y, w, h, -HALF_PI, HALF_PI);
    arc(x-(w/2), y, w/2, h, HALF_PI, -HALF_PI);
}
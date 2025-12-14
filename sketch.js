function setup() {
    createCanvas(1270, 720);
}

function draw() {
    background(240);
    //huvudsignal(300,100,3)
    försignal(650,300,3)
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
    strokeWeight(3)
    stroke(255,255,255)
    
    let dist = 5
    let start_r, end_r, start_l, end_l = 0
    let flat = 0.018

    start_r = 5*PI/3
    end_r = PI/3

    start_l = 2*PI/3
    end_l = 4*PI/3
    for (let i = 0; i < 25; i++) {
        arc(x+(w/2)-dist, y, w, h+10, start_r, end_r)
        arc(x-(w/2)+dist, y, w, h+10, start_l, end_l);

        start_r += flat
        end_r -= flat

        start_l += flat
        end_l -= flat

        dist += 2
    }   
}
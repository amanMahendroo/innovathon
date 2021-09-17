import Sketch from "react-p5"

class Box {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.s = Math.random() * 50 + 50
        this.offset = Math.random() * 15
        this.r = Math.random() * Math.PI
        this.torque = 0
        this.angvel = 0
    }

    render(p5) {
        this.angvel *= 0.99
        if (this.angvel < 1e-5 && this.angvel > -1e-5)
            this.angvel = 0
        this.angvel = Math.max(Math.min(this.angvel + this.torque, 0.1), -0.1)
        this.r += this.angvel
        p5.push()
        p5.translate(this.x, this.y + 50 * Math.sin(p5.frameCount / 120 + this.offset))
        p5.rotate(this.r)
        p5.stroke(51, 51, 51, 50)
        p5.rect(-2.5, -2.5, this.s - 5)
        p5.stroke(51, 51, 51, 100)
        p5.rect(0, 0, this.s)
        p5.pop()
    }
}

let boxes = [], prevX = -1, prevY = -1;
let pos = [
    [0.0776, 0.1529],[0.4868, 0.5182],[0.8095, 0.1799],[0.4152, 0.2976],
    [0.6205, 0.3531],[0.1363, 0.8376],[0.2248, 0.4533],[0.5793, 0.8741],
    [0.9209, 0.5399],[0.7704, 0.6955],[0.2781, 0.1393],[0.3713, 0.6901],
    [0.4854, 0.1353],[0.8933, 0.8146],[0.9885, 0.0500],]

let m_pos = [
    [0.1429, 0.1244],[0.7959, 0.1757],[0.2449, 0.3935],[0.4337, 0.2566],
    [0.8495, 0.5708],[0.7398, 0.3624],[0.1939, 0.8087],[0.727, 0.8305],
    [0.398, 0.6252],]

let par;

export default function Canvas() {
    function setup(p5, parentRef) {
        if (parentRef == undefined) {
            parentRef = par
        } else {
            par = parentRef
        }
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(parentRef)
        if (p5.width < p5.height) {
            for (let i = 0; i < m_pos.length; i++) {
                boxes.push(new Box(m_pos[i][0] * p5.width, m_pos[i][1] * p5.height))
            }    
        } else {
            for (let i = 0; i < pos.length; i++) {
                boxes.push(new Box(pos[i][0] * p5.width, pos[i][1] * p5.height))
            }    
        }
        p5.rectMode(p5.CENTER)
        // console.log(boxes)
    }

    function draw(p5) {
        p5.background(255)
        p5.strokeWeight(5)
        p5.noFill()
        // console.log(boxes)
        for (const box of boxes) {
            box.render(p5)
        }
    }

    function mouseMoved(p5) {
        if (prevX < 0) {
            prevX = p5.mouseX
            prevY = p5.mouseY
            return
        }
        for (const box of boxes) {
            let sqdistX = (p5.mouseX - box.x) * (p5.mouseX - box.x) * 10
            let sqdistY = (p5.mouseY - box.y) * (p5.mouseY - box.y) * 10
            let angvX = (p5.mouseX - prevX) / sqdistX
            if (p5.mouseY > box.y)
                angvX *= -1
            let angvY = (p5.mouseY - prevY) / sqdistY
            if (p5.mouseX < box.x)
                angvY *= -1
            box.torque = angvX + angvY
        }
        prevX = p5.mouseX
        prevY = p5.mouseY      
    }

    function windowResized(p5) {
        p5.noCanvas()
        boxes = []
        setup(p5)
    }

    return (
        <Sketch className="canvas" setup={setup} draw={draw} mouseMoved={mouseMoved} windowResized={windowResized} />
    )
}
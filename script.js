let x = 0;
let isMoving = true;

function setup() {
    createCanvas(720, 400);
    background(255);
}

function draw() {
    background(255);
    
    if (isMoving) {
        x = x + 2;
        if (x > width) {
            x = -50;
        }
    }
    
    // Dibujar a Caperucita Roja
    push();
    translate(x, 200); // Posición vertical en el centro
    
    // Capa (triángulo rojo)
    fill(255, 0, 0);
    triangle(-30, 0, 30, 0, 0, -60);
    
    // Cuerpo (rectángulo rojo)
    fill(255, 0, 0);
    rect(-15, 0, 30, 40);
    
    // Cabeza (círculo color piel)
    fill(255, 218, 185);
    circle(0, -20, 30);
    
    // Ojos (círculos blancos)
    fill(255);
    circle(-7, -23, 8);
    circle(7, -23, 8);
    
    // Pupilas (círculos negros)
    fill(0);
    circle(-7, -23, 4);
    circle(7, -23, 4);
    
    // Sonrisa (arco)
    noFill();
    stroke(0);
    arc(0, -20, 15, 10, 0, PI);
    
    pop();
}

function mousePressed() {
    isMoving = !isMoving;
}

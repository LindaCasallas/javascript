let x = 0;
let isMoving = true;

// Colores del bosque
const colorTronco = '#4B3621';
const colorArbol1 = '#1B4D3E';
const colorArbol2 = '#2D5A27';
const colorArbol3 = '#1B3409';
const colorCamino = '#8B7355';

function dibujarArbol(x, y, tamaño) {
    // Tronco
    fill(colorTronco);
    rect(x - 10, y - 20, 20, 50);
    
    // Copa del árbol (tres triángulos superpuestos)
    fill(colorArbol1);
    triangle(x - 40, y - 20, x + 40, y - 20, x, y - 120);
    fill(colorArbol2);
    triangle(x - 35, y - 50, x + 35, y - 50, x, y - 140);
    fill(colorArbol3);
    triangle(x - 30, y - 80, x + 30, y - 80, x, y - 160);
}

function dibujarFondo() {
    // Cielo azul claro (RGB: 135, 206, 235)
    background(135, 206, 235);
    

    
    // Árboles del fondo
    for (let i = 0; i < width; i += 120) {
        dibujarArbol(i + 60, height - 80, 1);
    }
    
    // Camino
    fill(colorCamino);
    rect(0, height - 80, width, 80);
}

function setup() {
    createCanvas(720, 400);
}

function draw() {
    // Dibujar el fondo del bosque
    dibujarFondo();
    
    if (isMoving) {
        x = x + 2;
        if (x > width) {
            x = -50;
        }
    }
    
    // Dibujar a Caperucita Roja
    push();
    translate(x, height - 100); // Posición vertical sobre el camino
    
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

let starData = []; // Array to hold JSON data

function preload() {
  // Load JSON data
  loadJSON('csvjson.json', (data) => {
    starData = data;
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Fullscreen canvas
  noStroke(); // No outlines for stars
}

function drawBackground() {
  for (let i = 0; i < height; i++) {
    const alpha = map(i, 0, height, 255, 50); // Gradient effect
    stroke(10, 10, 50, alpha); // Deep space colors
    line(0, i, width, i);
  }
}

function draw() {
  background(0); // Black background for space

  // Draw stars
  for (let star of starData) {
    // Map data to visual properties
    const x = random(width); // Random horizontal position
    const y = random(height); // Random vertical position
    const size = star.size; // Size of the star
    const brightness = map(star.brightness, 0, 1, 100, 255); // Brightness to color

    // Draw star
    fill(brightness, brightness, 255, brightness); // Blueish-white star color
    ellipse(x, y, size, size); // Draw circle for the star
  }

  // Optionally: Add twinkling effect
  if (frameCount % 10 === 0) {
    redraw();
  }
}

function drawOrbit(x, y, radius, size) {
  noFill();
  stroke(100);
  ellipse(x, y, radius * 2, radius * 2); // Orbit path
  fill(200, 100, 100); // Planet color
  ellipse(x + cos(frameCount / 50) * radius, y + sin(frameCount / 50) * radius, size); // Moving planet
}

function drawShootingStar() {
  const x = random(width);
  const y = random(height);
  const length = random(50, 100);
  stroke(255, 255, 150, 200);
  line(x, y, x - length, y - length);
}

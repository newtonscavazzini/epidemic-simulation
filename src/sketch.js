let population = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 10; i++) {
        population.push(new Person());
    }
}

function draw() {
    background(50);

    for (let person of population) {
        person.render();
    }
}

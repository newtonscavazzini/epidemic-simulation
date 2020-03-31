class Person {

    constructor() {
        this.position = createVector(random(width), random(height));
        this.r = 10;
    }

    render() {
        circle(this.position.x, this.position.y, this.r * 2);
    }

}

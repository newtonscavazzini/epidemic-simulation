class Person {

    constructor() {
        this.position = createVector(random(width), random(height));
        this.destination = createVector(0, 0);
        this.speed = createVector(0, 0);
        this.r = 10;

        this.pickNewDestination();
    }

    update() {

        this.move();

        if (this.hasReachedDestination()) {
            this.pickNewDestination();
        }

    }

    move() {

        // Move X
        let distanceX = this.position.x - this.destination.x;
        if (abs(distanceX) > this.speed.x) {
            if (distanceX < 0) {
                this.position.x += this.speed.x;
            } else {
                this.position.x -= this.speed.x;
            }
        }

        // Move Y
        let distanceY = this.position.y - this.destination.y;
        if (abs(distanceY) > this.speed.y) {
            if (distanceY < 0) {
                this.position.y += this.speed.y;
            } else {
                this.position.y -= this.speed.y;
            }
        }

    }

    hasReachedDestination() {
        let distanceToDestination = dist(this.position.x, this.position.y,
            this.destination.x, this.destination.y);
        return distanceToDestination < this.r;
    }

    pickNewDestination() {
        this.destination.set(random(width), random(height));
        this.speed.set(random(1, 4), random(1, 4));
    }

    render() {
        circle(this.position.x, this.position.y, this.r * 2);
    }

}

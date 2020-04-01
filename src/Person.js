class Person {

    constructor() {
        this.position = createVector(random(width), random(height));
        this.destination = createVector(0, 0);
        this.speed = 0;
        this.r = 10;

        this.pickNewDestination();
    }

    update() {

        // Move X
        let distanceX = this.position.x - this.destination.x;
        if (abs(distanceX) > this.speed) {
            if (distanceX < 0) {
                this.position.x += this.speed;
            } else {
                this.position.x -= this.speed;
            }
        }

        // Move Y
        let distanceY = this.position.y - this.destination.y;
        if (abs(distanceY) > this.speed) {
            if (distanceY < 0) {
                this.position.y += this.speed;
            } else {
                this.position.y -= this.speed;
            }
        }

        if (this.hasReachedDestination()) {
            this.pickNewDestination();
        }

    }

    hasReachedDestination() {
        let distanceToDestination = dist(this.position.x, this.position.y,
            this.destination.x, this.destination.y);
        return distanceToDestination < this.r;
    }

    pickNewDestination() {
        this.destination.set(random(width), random(height));
        this.speed = random(1, 4);
    }

    render() {
        circle(this.position.x, this.position.y, this.r * 2);
    }

}

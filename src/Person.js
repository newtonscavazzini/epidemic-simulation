class Person {

    constructor() {
        this.position = createVector(random(width), random(height));
        this.destination = createVector(random(width), random(height));
        this.r = 10;
    }

    update() {

        // Move X
        if (this.position.x < this.destination.x) {
            this.position.x++;
        } else {
            this.position.x--;
        }

        // Move Y
        if (this.position.y < this.destination.y) {
            this.position.y++;
        } else {
            this.position.y--;
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
    }

    render() {
        circle(this.position.x, this.position.y, this.r * 2);
    }

}

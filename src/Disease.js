class Disease {

    constructor() {
        this.fatalityRate = 3;
        this.incubationPeriod = int(random(2, 14));
        this.daysToRecover = incubationPeriod + int(random(7, 30));

        this.day = 0;
    }

    update() {
        this.day++;
    }

    hasSymptoms() {
        return this.day > this.incubationPeriod;
    }

}

class Lannister {
    constructor() {
        this.soldiers = [];
        this.ships = [];
        this.makeNavy = this.makeNavy.bind(this);
    }
    makeNavy(soldiers, ships) {
        const Build = new ConcreteBuilder();
        for (let i = 0; i < soldiers; i++) {
            this.soldiers.push(Build.createSoldier());
        }
        for (let i = 0; i < ships; i++) {
            this.ships.push(Build.createShip());
        }
    }
}

class Builder {
    createSoldier() {}
    createShip() {}
}

class ConcreteBuilder extends Builder {
    createSoldier() {
        const soldier = new Soldier();
        return soldier;
    }

    createShip() {
        const ship = new Ship();
        return ship;
    }
}

class Soldier {
    constructor() {
        console.log("Created Soldier");
    }
}

class Ship {
    constructor() {
        console.log("Created Ship");
    }
}

(() => {
    const lannister = new Lannister();
    lannister.makeNavy(100, 10);
})();
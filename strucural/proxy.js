class Soldier {
    constructor(name) {
        this.name = name
    }
    attack() {
        console.log(`Soldier ${this.name} attack`);
    }
}

class Queen {
    constructor(name) {
        this.name = name
    }
    getConsent(casualNumber) {
        return casualNumber % 2 === 0
    }
}

class ArmyProxy {
    constructor() {
        this.army = [];
        this.available = 0
        this.queen = new Queen('Cercei');
        this.getQueenConsent = this.getQueenConsent.bind(this);
    }

    getQueenConsent() {
        return this.queen.getConsent(Math.floor(Math.random() * 200));
    }

    enrollSoldier() {
        if (!this.available) {
            const consent = this.getQueenConsent();
            if (!consent) {
                console.error(`The queen ${this.queen.name} deny the consent`);
                return
            }
            this.available = 100;
        }

        this.army.push(new Soldier(this.army.length));
        this.available--;
    }
}


(() => {
    const myArmy = new ArmyProxy();
    for (let i = 0; i < 1000; i++) {
        myArmy.enrollSoldier();
    }
    console.log(`I have ${myArmy.army.length} soldier`);
})();
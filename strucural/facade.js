class Horse {
    constructor(name) {
        this.name = name
    }
    attack() {
        console.log(`Infatry ${this.name} attack`);
    }
}

class Soldier {
    constructor(name) {
        this.name = name
    }
    attack() {
        console.log(`Soldier ${this.name} attack`);
    }
}

class Giant {
    constructor(name) {
        this.name = name
    }
    attack() {
        console.log(`Giant ${this.name} attack`);
    }
}

class ArmyFacade {
    constructor() {
        this.army = [];
        (new Array(10)).fill().forEach((_, i) => this.army.push(new Horse(i + 1)));
        (new Array(10)).fill().forEach((_, i) => this.army.push(new Soldier(i + 1)));
        (new Array(1)).fill().forEach((_, i) => this.army.push(new Giant(i + 1)));
        this.getByType = this.getByType.bind(this);
    }
    getByType(type, occurrency) {
        return this.army.filter(el => {
            return el.constructor.name === type && occurrency-- > 0
        });
    }
    attack(armyInfo = {}) {
        const keys = Object.keys(armyInfo);
        let subAramy = []
        keys.forEach(soldier => {
            switch (soldier) {
                case "horse": {
                    subAramy = [...subAramy, ...this.getByType('Horse', armyInfo.horse)]
                    break;
                }
                case "soldier": {
                    subAramy = [...subAramy, ...this.getByType('Soldier', armyInfo.soldier)]
                    break;
                }
                case "giant": {
                    subAramy = [...subAramy, ...this.getByType('Giant', armyInfo.giant)]
                    break;
                }
            }
        });
        subAramy.forEach(soldier => soldier.attack());
    }
}

(() => {
    const army = new ArmyFacade();
    army.attack({
        horse: 3,
        soldier: 5,
        giant: 1
    })
})();
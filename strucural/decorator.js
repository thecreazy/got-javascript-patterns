function isNotPoisoned(t, n, descriptor) {
    const original = descriptor.value;
    if (typeof original === 'function') {
        descriptor.value = function (...args) {
            const [drink] = args;
            if (drink.constructor.name === 'PoisonedDrink') throw new Error('Someone want to kill the king');
            return original.apply(this, args);
        }
    }
    return descriptor;
}

class PoisonedDrink {
    constructor(name) {
        this.name = name
    }
}

class Drink {
    constructor(name) {
        this.name = name
    }
}

class King {
    constructor(name) {
        this.name = name
    }

    @isNotPoisoned
    drink(drink) {
        console.log(`the king drank ${drink}`)
    }
}


(() => {
    const joffrey = new King('Joffrey Baratheon');
    const normalDrink = new Drink('water');
    const poisonedDrink = new Drink('poisoned water');
    joffrey.drink(normalDrink);
    joffrey.drink(poisonedDrink);
})();
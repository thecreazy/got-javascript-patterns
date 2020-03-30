class Soldier {
    constructor(name) {
        this.name = name;
        this.attack = this.attack.bind(this);
    }

    attack() {}
}

class LannisterSoldier extends Soldier {
    attack() {
        return "A Lannister always pays his debts";
    }
}

class TargaryenSoldier extends Soldier {
    attack() {
        return "Fire and blond";
    }
}

class Spawn {
    constructor(type, name) {
        if (type === "lannister") return new LannisterSoldier(name);
        else return new TargaryenSoldier(name);
    }
}

(() => {
    const lannister = new Spawn("lannister", "soldierA");
    const targaryen = new Spawn("targaryen", "soldierB");
    console.log(lannister.attack());
    console.log(targaryen.attack());
})();
let INSTANCE = null;

class MotherOfDragons {
    constructor(name, dragons) {
        if (!!INSTANCE) return INSTANCE;
        this.dragons = dragons;
        this.name = name;
        this.getMyDragons = this.getMyDragons.bind(this);
        INSTANCE = this;
    }

    getMyDragons() {
        console.log(`I'm ${this.name} and my dragons are`, this.dragons);
    }
}

(() => {
    const dragonsMother = new MotherOfDragons("Daenerys Targaryen", [
        "Drogon",
        "Rhaegal",
        "Viserion"
    ]);
    const dragonsMother2 = new MotherOfDragons("Cercei Targaryen", [
        "Tirion",
        "Jennifer",
        "Goblin"
    ]);
    dragonsMother.getMyDragons();
    dragonsMother2.getMyDragons();
    console.log(dragonsMother instanceof MotherOfDragons);
    console.log(dragonsMother2 instanceof MotherOfDragons);
    console.log(dragonsMother2 === dragonsMother);
})();
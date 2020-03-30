class Unsullied {
    constructor(name) {
        this.name = name;
        this.kill = this.kill.bind(this);
    }

    kill() {
        console.log(`Unsellied ${this.name} kill`)
    }
}

class Dragon {
    constructor(name) {
        this.name = name;
        this.burn = this.burn.bind(this);
    }

    burn() {
        console.log(`Dragon ${this.name} burn`)
    }
}

class DragonAdapter extends Dragon {
    kill() {
        this.burn()
    }
}

(() => {
    const Army = [
        new DragonAdapter('Rhaegal'),
        new Unsullied('Grey worm'),
        new DragonAdapter('Drogon')
    ];
    Army.forEach(soldier => soldier.kill());
})();
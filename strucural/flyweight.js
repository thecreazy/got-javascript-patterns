class WhiteWalker {
    constructor({
        sprite,
        someOtherBigInformation
    }) {
        this.sprite = sprite;
        this.someOtherBigInformation = someOtherBigInformation;
        this.state = 'alive';
        this.resurrect = this.resurrect.bind(this);
        this.kill = this.kill.bind(this);
        this.getState = this.getState.bind(this);
    }
    kill() {
        this.state = 'dead'
    }
    resurrect() {
        this.state = 'resurrected'
    }
    getState() {
        return this.state;
    }
}

const whiteWalker = new WhiteWalker({
    sprite: Date.now()
});

class WhiteWalkerFlyweight {
    constructor(position, name) {
        this.position = position;
        this.name = name;
        this.whiteWalker = whiteWalker;
    }
    getInformation() {
        console.log(`The White Walker ${this.name} whit sprite ${this.whiteWalker.sprite} is ${this.whiteWalker.state}`);
    }
    getFatherInstance() {
        return this.whiteWalker;
    }
}


(() => {
    const myArmy = [];
    for (let i = 0; i < 10; i++) {
        myArmy.push(new WhiteWalkerFlyweight({
            x: Math.floor(Math.random() * 200),
            y: Math.floor(Math.random() * 200)
        }, i + 1));
    }
    myArmy.forEach(soldier => soldier.getInformation());
    console.log("KILL ALL");
    const [onOfWhiteWalker] = myArmy;
    onOfWhiteWalker.getFatherInstance().kill();
    myArmy.forEach(soldier => soldier.getInformation());
    console.log("RESURRECT ALL");
    onOfWhiteWalker.getFatherInstance().resurrect();
    myArmy.forEach(soldier => soldier.getInformation());
})();
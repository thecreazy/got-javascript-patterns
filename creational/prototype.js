class WhiteWalker {
    constructor(force, weight) {
        this.force = force;
        this.weight = weight;
    }

    clone() {
        console.log("cloned");
        return new WhiteWalker(this.name, this.weight);
    }
}

(() => {
    const firstWalker = new WhiteWalker();
    const walkers = [firstWalker];
    for (let i = 0; i < 100; i++) {
        walkers.push(firstWalker.clone());
    }
})();
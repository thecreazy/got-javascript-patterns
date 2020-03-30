// Define Heir To The Throne

class HeirToTheThrone {
    constructor(name, isActualOnTheThrone) {
        this.name = name;
        this.isActualOnTheThrone = isActualOnTheThrone;
        this.getTheThrone = this.getTheThrone.bind(this);
    }
    getTheThrone() {}
}

class HeirToTheThroneLannister extends HeirToTheThrone {
    getTheThrone() {
        console.log("Kill all");
    }
}

class HeirToTheThroneTargaryen extends HeirToTheThrone {
    getTheThrone() {
        console.log("Burn all");
    }
}

// Define Subject

class Subject {
    constructor(name) {
        this.name = name;
        this.speak = this.speak.bind(this);
    }
    speak() {}
}

class SubjectLannister extends Subject {
    speak() {
        console.log("I love Cersei");
    }
}

class SubjectTargaryen extends Subject {
    speak() {
        console.log("I love Daenerys");
    }
}

// Define Houses
class House {
    constructor() {
        this.getHeir = this.getHeir.bind(this);
        this.getSubject = this.getSubject.bind(this);
    }
    getHeir() {}
    getSubject() {}
}

class Lannister extends House {
    getHeir() {
        return new HeirToTheThroneLannister("Cersei", true);
    }
    getSubject(name) {
        return new SubjectLannister(name);
    }
}

class Targaryen extends House {
    getHeir() {
        return new HeirToTheThroneTargaryen("Daenerys", true);
    }
    getSubject(name) {
        return new SubjectTargaryen(name);
    }
}

(() => {
    const lannister = new Lannister();
    const targaryen = new Targaryen();
    lannister.getHeir().getTheThrone();
    lannister.getSubject().speak();
    targaryen.getHeir().getTheThrone();
    targaryen.getSubject().speak();
})();
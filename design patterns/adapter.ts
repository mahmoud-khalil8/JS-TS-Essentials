//adapter pattern
//usage: when you want to make two incompatible interfaces compatible

class OldSystem {
    request() {
        return 'old system request'
    }

}
class NewSystem {
    request() {
        return 'new system request'
    }

}
class Adapter {
    newSystem: NewSystem
    constructor(newSystem) {
        this.newSystem = newSystem
    }
    request() {
        return this.newSystem.request()
    }
}
const oldSystem = new OldSystem()
console.log(oldSystem.request())

const newSystem = new NewSystem()
const adapter = new Adapter(newSystem)
console.log(adapter.request())

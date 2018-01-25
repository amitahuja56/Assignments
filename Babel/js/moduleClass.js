export default class Amit {
    constructor(nam, state){
        this.name = nam;
        this.isBro = state;
    }

    get tellAboutHim() {
        return this.name + " is " + (this.isBro ? "bro!" : "not bro!");
    }
}
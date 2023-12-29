"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return 'User: ' + this.name;
    }
}
const user1 = new User('Gary');
console.log(user1.describe());

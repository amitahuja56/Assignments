var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter.greet());
// let button = document.createElement('button');
// button.value = "Say Hello";
// button.onclick = function() {
//     alert(greeter.greet());
// }
// document.body.appendChild(button);

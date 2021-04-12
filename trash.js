class Animal {
	constructor (name) {
		this.speed = 0;
		this.name = name;
	}
	run(speed) {
		this.speed = speed;
		console.log(`${this.name} Runs with a speed of ${this.speed}`);
	}
	stop() {
		this.speed = 0;
		console.log(`${this.name} stands still. `);
	}
}

class Rabbit extends Animal {
	hide () {
		console.log(`${this.name} hides !`);
	}
	stop () {
		super.stop();
		this.hide();
	}
}

const animal = new Animal('Bob');
const rabbit = new Rabbit('White Rabbit');

rabbit.stop();

/// function that return a class

function f(text) {
	return class {
		sayHi() {console.log(text)};
	}
}

class User extends f('sdfsdf') {};
 ////
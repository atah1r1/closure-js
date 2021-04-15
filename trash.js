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
	constructor (name, earLength) {
		super(name);
		this.earLength = earLength;
	}
	hide () {
		console.log(`${this.name} hides !`);
	}
	stop () {
		setTimeout(() => super.stop(), 3000);
	}
}

const animal = new Animal('Bob');
const rabbit = new Rabbit('White Rabbit', 10);

// rabbit.run(1000)
/// function that return a class

function f(text) {
	return class {
		sayHi() {console.log(text)};
	}
}

class User extends f('test') {};
 ////

class Cars {
	name = 'audi';
	constructor () {
		console.log(this.name);
	}
}

class Car extends Cars {
	name = 'BMW';
}

// new Cars();
// new Car();

class Mouses {
	constructor (name) {
		this.name = name;
	}
}

class Mouse extends Mouses {
	date = new Date();
	constructor (name) {
		super(name);
		this.created = this.date.getDate();
	}
}

const tt = new Mouse('Moussy');

// console.log(tt.created);
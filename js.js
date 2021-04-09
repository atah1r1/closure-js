// Challenge 1

function createFunction () {
	function printHello () {
		console.log('HELLO');
	}
	return printHello;
}

// Challenge 2

function createFunctionPrinter (input) {
	function printing () {
		console.log(input);
	}
	return printing;
}

// Challenge 3

function outer () {
	let counter = 0;
	function incrementCounter() {
		counter ++;
		console.log('counter', counter);
	}
	return incrementCounter;
}


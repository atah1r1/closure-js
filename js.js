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

// Challenge 4

function once(func) {
	let counter = 0; 
  let callOnlyOnce; 

  function innerFunction(value) {
    if (counter === 0) {
      callOnlyOnce = func(value)
    }
    counter++;
    
    return callOnlyOnce; 
  }
  
  return innerFunction; 
}

// Challenge 5

function moretimes(times, callback) {
	let counter = 0;
	function kk() {
		counter++;
	}
	if (counter >= times)
		return kk;
}

// Challenge 6

function delay(callback, wait) {
	setTimeout(callback, wait);
}

// Challenge 7

function rollCall(names) {
	let index = 0;
	function logName() {
		if (index >= names.length)
			console.log('Everyone accounted for');
		else {
			console.log(names[index]);
		}
		index++;
	}
	return logName;
}

// Challenge 8

const saveOutput = (inputFunc, str) => {

	let newObj = {}; 
  
	return function (value) {
  
	  if (value === str){     
		return newObj;
	  }
	  else {
		newObj[value] = inputFunc(value);
		return inputFunc(value);
	  }
	}
  }
var shape = {
	type: '',
	getType: function() { return this.type; }
  };
  
  class Triangle {
	constructor(a, b, c) {
		this.type = 'triangle';
		this.a = a;
		this.b = b;
		this.c = c;
	}
	getPerimeter() {
		return this.a + this.b + this.c;
	}
}
  
  Triangle.prototype = shape;
;
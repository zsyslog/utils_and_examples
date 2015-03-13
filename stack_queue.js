// Queue (Fist In, First Out)

var Node = function(data, noderef) {
	this.data = data;
	this.next = noderef;
}

function Queue() {

	this.size = 0;

	this.isempty = function() {
		var e = (this.first === undefined)
		if (e) this.size = 0;
		return e;
	}

	this.queue = function(data) {
		this.oldlast = this.last;
		this.last = new Node(data);
		if (this.isempty()) {
			this.first = this.last
		} else {
			this.oldlast.next = this.last
		}
		this.size++;
		return this.last;
	}

	this.dequeque = function() {
		this.first = this.first.next;
		this.size--;
		return this;
	}
}

// unit test
var q = new Queue();
q.queue(1)
q.queue(87)
q.queue(45)
q.queue(12)
q.queue(0)
q.dequeue();

// Stack (Last In, First out)
function Stack() {

	this.size = 0

	this.stack = function(data) {
		var node = new Node(data)
		if (this.isempty()){
			this.first = node;
		} else {
			var temp = this.first
			while (temp.next !== undefined) {
				temp = temp.next
			}
			temp.next = node;
		}
		this.size++;
		return node;	
		
	}

	this.unstack = function() {
		var current = this.first
			, previous = this.first
		do {
			previous = current
			current = current.next
		} while (current.next !== undefined)
		previous.next = undefined;
		this.size--;
		return current;
	}

	this.isempty = function(){
		var e = (this.first === undefined)
		if (e) this.size = 0;
		return e;
	}

}

// unit test

var s = new Stack();
s.stack(1)
s.stack(31)
s.stack(14)
s.stack(75)
s.unstack();



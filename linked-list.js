// Lista enlazada:

function List(){

	List.makeNode=function(){ 
	 return {data:null,next:null};
	};

	this.start=null; 
	this.end=null;

	this.add=function (data){
	 if(this.start===null){ 
	   this.start=List.makeNode(); 
	   this.end=this.start;
	 }else{ 
	  this.end.next=List.makeNode(); 
	  this.end=this.end.next; 
	 };
	this.end.data=data; 
	};

	this.iterate = function() {
		var current = this.start;
		while (current !== null) {
			//do something with the current node
			console.log(current.data)	
			current = current.next; 
		}	
	}

	this.insertFirst = function(data) {
		// var newItem = List.makeNode()... or
		var newItem = {data: data, next: this.start}
		this.start = newItem;
	}
	
	this.delete = function(data){
		var current = this.start
			, previous = this.start;
		while(current !== null ){
			if (current.data == data){
				if (current === this.start) {
					this.start = current.next;
					return;
				}
				if (current === this.end) {
					this.end = previous;
				}
				previous.next = current.next;
				return;
			}
			previous = current;
			current = current.next;
		}
	}

	this.insertAfter = function(n, data){
		var current = this.start;
		var newItem = {data:n, next:current}
		while(current !== null ){
			if (data === current.data) {
				if (current === this.end) this.end = newItem;
				current.next = newItem;
				return;
			}
			current = current.next;
		}
	}

	this.insertBefore = function(n, data) {
		var current = this.start
			, previous = this.start
			, newItem = {data: n, next: current}

		if (current === this.start && data === this.start.data){
			this.start = newItem;
			return;
		}	

		while (current !== null){
			if (current.data === data){
				newItem.next = current;
				previous.next = newItem;
				return;
			}
			previous = current;
			current = current.next;
		}
	}

	this.item = function(index) {
		var current = this.start
			, i = 0;
		do {
			if (i === index) 
				return current
			else {
				current = current.next;
				i++;
			} 
		} while (i <= index);
	}

	this.each = function(callback){
		var current = this.start;
		while (current !== null){
			callback(current);
			current = current.next;	
		}
	}

}

var list=new List(); 
for(var i=1;i<=10;i++){ 
 list.add(i);
};
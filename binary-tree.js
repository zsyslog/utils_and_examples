// Arbol binario
function Btree(){

	this.level=0;
	this.node=0;	

	this.btreeSMF = function (level, node) {
		return node + (Math.pow(2, level)) - 1;
	}

	this.Nodes = new Array();

	this.setNode = function(data, level, node) {
		var this_level = (typeof level==='undefined') ? this.level : level
			,	this_node = (typeof node==='undefined') ? this.node : node;
		this.Nodes[this.btreeSMF(this_level, this_node)] =  data;
	}

	this.getNode = function(level, node) {
		var this_level = (typeof level==='undefined') ? this.level : level
			,	this_node = (typeof node==='undefined') ? this.node : node;

		return this.Nodes[this.btreeSMF(this_level, this_node)];
	}

	this.root=function(value){
		this.level=0;
		this.node=0;
		if (value!==undefined){
			this.Nodes[this.btreeSMF(this.level, this.node)] = value;
		}
		return this.Nodes[this.btreeSMF(this.level, this.node)];
	}

	this.child = function(leaf, value) {
		switch (leaf) {
			case 'right':
				this.node = this.node * 2 + 1;
				break;
			case'left':
				this.node = this.node * 2;
				break;
			default:
				throw "Child error: left o right required";
				return;
		}
		this.level++;
		if (value!==undefined){
			this.Nodes[this.btreeSMF(this.level, this.node)] = value;
		}
		return this.Nodes[this.btreeSMF(this.level, this.node)];
	}

	this.parent = function(value) {
		this.level--;
		this.node = Math.floor(this.node/2);
		if (value!==undefined){
			this.Nodes[this.btreeSMF(this.level, this.node)] = value;
		}
		return this.Nodes[this.btreeSMF(this.level, this.node)];
	}

}

var bt = new Btree();
bt.setNode('A',0,0);
bt.setNode('B',1,0);
bt.setNode('C',1,1);
bt.setNode('D',2,0);
bt.setNode('E',2,1);
bt.setNode('F',2,2);
bt.setNode('G',2,3);
bt.setNode('H',3,0);
bt.setNode('I',3,1);
bt.setNode('J',3,2);
bt.setNode('K',3,3);
bt.setNode('L',3,4);
bt.setNode('M',3,5);
bt.setNode('N',3,6);
bt.setNode('O',3,7);


function traverse(){
	console.log(bt.getNode())
	if (bt.child('left')!==undefined) traverse();
	bt.parent();
	if (bt.child('right')!==undefined) traverse();
	bt.parent();
}




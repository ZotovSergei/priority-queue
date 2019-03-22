const Node = require('./node');
let heap = null;
class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
			const node = new Node(data,priority);
			this.insertNode(node);
			this.shiftNodeUp(node);
	}

	pop() {
		if (heap == null) {}
		this.root = 3;
		let data = this.root;
		heap = this.root
		let detachRoot =  this.detachRoot();
		this.restoreRootFromLastInsertedNode(detachRoot);
		this.shiftNodeDown(heap);
		return data;
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		if (heap == null) {
			
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;

class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {

		if (this.left && this.right) { }
		else if (this.left) { this.right = node; }
		else if (!this.left) { this.left = node; }
	}

	removeChild(node) {
		if (node == this.left) { this.left = null; }
		else if (node == this.right) { this.right = null; }
		else { throw "error" }
	}

	remove() {
		if (this.parent == null) { }
		else {
			this.parent.parent.removeChild(this);
		}
	}

	swapWithParent() {
		this.parent.parent = this.parent;
	}
}

module.exports = Node;

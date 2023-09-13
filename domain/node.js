export default class Node {
    #data;
    #leftChild;
    #rightChild;

    constructor(data) {
        this.#data = data;
        this.#leftChild = null;
        this.#rightChild = null;
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data = data;
    }

    get leftChild() {
        return this.#leftChild;
    }

    set leftChild(left) {
        this.#leftChild = left;
    }
    
    get rightChild() {
        return this.#rightChild;
    }

    set rightChild(right) {
        this.#rightChild = right;
    }

    toString() {
        return `data: ${this.#data}; leftChild: ${this.#leftChild}; rightChild: ${this.#rightChild}`
    }

}

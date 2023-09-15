/**
 * It's a class to represent a tree node.
 */
export default class Node {
    #data;
    #left;
    #right;

    constructor(data) {
        this.#data = data;
        this.#left = null;
        this.#right = null;
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data = data;
    }

    get left() {
        return this.#left;
    }

    set left(left) {
        this.#left = left;
    }
    
    get right() {
        return this.#right;
    }

    set right(right) {
        this.#right = right;
    }

    toString() {
        return `data: ${this.#data}; leftChild: ${this.#left}; rightChild: ${this.#right}`
    }

}

/**
 * It's a class to represent a list node.
 */
export class ListNode {
    #data;
    #next;

    constructor(data) {
        this.#data = data;
        this.#next = null;
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data = data;
    }

    get next() {
        return this.#next;
    }

    set next(next) {
        this.#next = next;
    }

    toString() {
        return `data: ${this.#data}; next: ${this.#next};`
    }

}

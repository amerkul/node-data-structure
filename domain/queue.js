/**
 * FIFO.
 */
export default class Queue {
    #items = [];

    constructor() {}

    enqueue(item) {
        this.#items.push(item);
    }

    dequeue() {
        return this.#items.shift();
    }

    peek() {
        return this.#items[0];
    }

}

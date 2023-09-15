import Stack from "../domain/stack.js";

export default class StackUtil {

    #minStack = new Stack();
    #maxStack = new Stack();
    #stack = new Stack();

    constructor() {}

    /**
     * Adding data into the stacks.
     * @param {Number} data 
     */
    push(data) {
        this.#stack.push(data);
        if (this.#minStack.peek() === undefined 
        || data < this.#minStack.peek()) {
            this.#minStack.push(data);
        } else {
            this.#minStack.push(this.#minStack.peek());
        }
        if (this.#maxStack.peek() === undefined 
        || data > this.#maxStack.peek()) {
            this.#maxStack.push(data);
        } else {
            this.#maxStack.push(this.#maxStack.peek());
        }
    }

    pop() {
        let item = this.#stack.pop();
        if (item !== undefined) {
            this.#maxStack.pop();
            this.#minStack.pop();
        }
    }

    getMin() {
        return this.#minStack.peek();
    }

    getMax() {
        return this.#maxStack.peek();
    }

}
import Node from "./node.js";
export default class LinkedList {

    #head = null;
    #tail = null;
    #count = 0;

    constructor() {}

    get count() {
        return this.#count;
    }

    insert(data) {
        this.#count++;
        let newNode = new Node(data);
        if (this.#tail) {
           this.#tail.right = newNode;
           newNode.left = this.#tail;
           this.#tail = newNode;
           return newNode;
        }
        this.#head = this.#tail = newNode;
        return newNode;
    }

    delete(data) {
        let current = this.#head;
        while (current !== null) {
            if (current.data === data) {
                if (current.left === null) {
                    this.#head = current.right;
                    this.#head.left = null;
                } else if (current.right === null) {
                    this.#tail = current.left;
                    this.#tail.right = null;
                } else {
                    let beforeCurrent = current.left;
                    let afterCurrent = current.right;
                    beforeCurrent.right = afterCurrent;
                    current.left = null;
                    afterCurrent.left = beforeCurrent;
                    current.right = null;
                }
                this.#count--;
                break;
            }
            current = current.right;
        }
    }

    search(data) {}

    printLinkedList() {
        let current = this.#head;
        while(!!current) {
            console.log(current.data);
            current = current.right;
        }
    }

}

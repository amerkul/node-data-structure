import {ListNode} from "./node.js";

/**
 * A linked list is a linear data structure, in which the elements are not stored 
 * at contiguous memory locations. The elements in a linked list are linked 
 * using pointers.
 */
export default class LinkedList {

    #head = null;
    #count = 0;

    constructor() {}

    get count() {
        return this.#count;
    }

    /**
     * Inserting a new node. Time complexity is O(n);
     * @param {Number} data 
     * @returns ListNode
     */
    insert(data) {
        this.#count++;
        let newNode = new ListNode(data);
        if (this.#head === null) {
            this.#head = newNode;
            this.#head.next = null;
            return newNode;
        }
        let current = this.#head;
        let parent = null;
        while (!!current) {
            parent = current;
            current = current.next;
        }
        parent.next = newNode;
        return newNode;
    }

    /**
     * Deleting a list node. Time complexity is O(n).
     * @param {Number} data 
     */
    delete(data) {
        let current = this.#head;
        let parent = null;
        while (current !== null) {
            if (current.data === data) {
                if (current.next === null || this.#head === current) {
                    this.#head = current.next;
                } else if (current.next === null) {
                    parent.next = null;
                } else {
                    parent.next = current.next;
                    current.next = null;
                }
                this.#count--;
                break;
            }
            parent = current;
            current = current.next;
        }
    }

    /**
     * Searching for a node. Time complexity is O(n).
     * @param {*} data 
     * @returns 
     */
    search(data) {
        let current = this.#head;
        while(!!current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    printLinkedList() {
        let current = this.#head;
        while(!!current) {
            console.log(current.data);
            current = current.next;
        }
    }

    /**
     * Detecting if a linked list has a cycle. Used Floyd's Cycle Detection 
     * Algorithm (Tortoise and Hare algorithm) to solve this problem efficiently.
     * @returns boolean
     */
    isCyclical() {
        let fastPointer = this.#head;
        let slowPointer = this.#head;

        while (fastPointer !== null 
            && slowPointer !== null 
            && fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
            if (fastPointer === slowPointer) {
                return true;
            }
        }
        return false;
    }

}

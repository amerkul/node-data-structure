import Node from "./node.js";
import Stack from "./stack.js";

export default class BinaryTree {
    #root = null;

    constructor() {}

    get root() {
        return this.#root;
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.#root === null) {
            this.#root = newNode;
            return;
        }
        let parent = this.#root;
        while(parent) {
            if (newNode.data < parent.data) {
                if (parent.leftChild === null) {
                    parent.leftChild = newNode;
                    break;
                } else {
                    parent = parent.leftChild;
                }
            } else {
                if (parent.rightChild === null) {
                    parent.rightChild = newNode;
                    break;
                } else {
                    parent = parent.rightChild;
                }
            }
        }
    }

    remove(data) {
        if (this.#root === null) {
            return false;
        }
        let current = this.#root;
        let parent = current;
        let isLeft = false;
        while(current.data !== data) {
            if (data < current.data) {
                parent = current;
                current = current.leftChild;
                isLeft = true;
            } else if (data > current.data) {
                parent = current;
                current = current.rightChild;
                isLeft = false;
            }
            if (current === null) {
                return false;
            }
        }

        if (current.leftChild === null && current.rightChild === null) {
            if (current === parent) {
                this.#root = null;
            } else if(isLeft) {
                parent.leftChild === null;
            } else {
                parent.rightChild === null;
            }
            return true;
        }

        if (current.leftChild === null) {
            if (current === parent) {
                this.#root = current.rightChild;
            } else if (isLeft) {
                parent.leftChild = current.rightChild;
            } else {
                parent.rightChild = current.rightChild;
            }
            return true;
        }

        if (current.rightChild === null) {
            if (current === parent) {
                this.#root = current.leftChild;
            } else if (isLeft) {
                parent.leftChild = current.leftChild;
            } else {
                parent.rightChild = current.leftChild;
            }
            return true;
        }

        isLeft = false;
        let minRight = current.rightChild;
        while(minRight.leftChild !== null) {
            parent = minRight;
            minRight = minRight.leftChild;
            isLeft = true;
        }
        current.data = minRight.data;
        if (isLeft) {
            if(minRight.rightChild !== null) {
                parent.leftChild = minRight.rightChild;
            } else {
                parent.leftChild = null;
            }
        } else {
            if(minRight.rightChild !== null) {
                parent.rightChild = minRight.rightChild
            } else {
                parent.rightChild = null;
            }  
        }
        
        return true;
    }

    find(data) {
        let current = this.#root;
        while(current !== null) {
            if (data < current.data) {
                current = current.leftChild;
            } else if (data > current.data) {
                current = current.rightChild;
            } else {
                break;
            }
        }
        return current;
    }

    inOrder(node) {
        let callStack = new Stack();
        let current = node;
        let result = [];
        while (true) {
            while (!!current) {
                callStack.push(current);
                current = current.leftChild;
            }
            if (callStack.peek() === undefined) {
                break;
            }
            let lastCurrent = callStack.pop();
            result.push(lastCurrent.data);
            current = lastCurrent.rightChild;
        }
        return result;
    }

    preOrder(node) {
        let callStack = new Stack();
        let current = node;
        let result = [];
        while (true) {
            while (!!current) {
                result.push(current.data);
                callStack.push(current);
                current = current.leftChild;
            }
            if (callStack.peek() === undefined) {
                break;
            }
            let lastCurrent = callStack.pop();
            current = lastCurrent.rightChild;
        }
        return result;
    }

    postOrder(node) {
        let callStack = new Stack();
        let current = node;
        let result = [];
        while (true) {
            while (!!current) {
                callStack.push(current);
                current = current.rightChild;
            }
            if (callStack.peek() === undefined) {
                break;
            }
            let lastCurrent = callStack.pop();
            result.push(lastCurrent.data);
            current = lastCurrent.leftChild;
        }
        return result;
    }

}
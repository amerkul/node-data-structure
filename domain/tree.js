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
                if (parent.left === null) {
                    parent.left = newNode;
                    break;
                } else {
                    parent = parent.left;
                }
            } else {
                if (parent.right === null) {
                    parent.right = newNode;
                    break;
                } else {
                    parent = parent.right;
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
                current = current.left;
                isLeft = true;
            } else if (data > current.data) {
                parent = current;
                current = current.right;
                isLeft = false;
            }
            if (current === null) {
                return false;
            }
        }

        if (current.left === null && current.right === null) {
            if (current === parent) {
                this.#root = null;
            } else if(isLeft) {
                parent.left === null;
            } else {
                parent.right === null;
            }
            return true;
        }

        if (current.left === null) {
            if (current === parent) {
                this.#root = current.right;
            } else if (isLeft) {
                parent.left = current.right;
            } else {
                parent.right = current.right;
            }
            return true;
        }

        if (current.right === null) {
            if (current === parent) {
                this.#root = current.left;
            } else if (isLeft) {
                parent.left = current.left;
            } else {
                parent.right = current.left;
            }
            return true;
        }

        isLeft = false;
        let minRight = current.right;
        while(minRight.left !== null) {
            parent = minRight;
            minRight = minRight.left;
            isLeft = true;
        }
        current.data = minRight.data;
        if (isLeft) {
            if(minRight.right !== null) {
                parent.left = minRight.right;
            } else {
                parent.left = null;
            }
        } else {
            if(minRight.right !== null) {
                parent.right = minRight.right
            } else {
                parent.right = null;
            }  
        }
        
        return true;
    }

    find(data) {
        let current = this.#root;
        while(current !== null) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
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
                current = current.left;
            }
            if (callStack.peek() === undefined) {
                break;
            }
            let lastCurrent = callStack.pop();
            result.push(lastCurrent.data);
            current = lastCurrent.right;
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
                current = current.left;
            }
            if (callStack.peek() === undefined) {
                break;
            }
            let lastCurrent = callStack.pop();
            current = lastCurrent.right;
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
                current = current.right;
            }
            if (callStack.peek() === undefined) {
                break;
            }
            let lastCurrent = callStack.pop();
            result.push(lastCurrent.data);
            current = lastCurrent.left;
        }
        return result;
    }

}
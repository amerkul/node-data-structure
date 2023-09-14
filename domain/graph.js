import Queue from "./queue.js";
import Stack from "./stack.js";

export default class Graph {
    
    #items = new Map();

    constructor() {}

    addVertex(data) {
        this.#items.set(data, []);
    }

    addEdge(v1, v2) {
        this.#items.get(v1).push(v2);
        this.#items.get(v2).push(v1);
    }

    dfs(data) {
        const result = [];
        if (this.#items.has(data)) {
            let visited = new Set();
            let stack = new Stack();
            stack.push(data);

            while(stack.peek() !== undefined) {
                let item = stack.pop();
                if (!visited.has(item)) {
                    result.push(item);
                    visited.add(item);
                }
                for (let neighbor of this.#items.get(item)) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        return result;
    }

    bfs(data) {
        const result = [];
        if (this.#items.has(data)) {
            let visited = new Set();
            let queue = new Queue();
            queue.enqueue(data);

            while(queue.peek() !== undefined) {
                let item = queue.dequeue();
                if (!visited.has(item)) {
                    result.push(item);
                    visited.add(item);
                }
                for (let neighbor of this.#items.get(item)) {
                    if (!visited.has(neighbor)) {
                        queue.enqueue(neighbor);
                    }
                }
            }
        }
        return result;
    }

}
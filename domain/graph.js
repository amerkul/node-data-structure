import Queue from "./queue.js";
import Stack from "./stack.js";

/**
 * class Graph. It is a non-linear data structure consisting of 
 * vertices and edges. 
 */
export default class Graph {
    
    #items = new Map();
    #count = 0;

    constructor() {}

    get count() {
        return this.#count;
    }

    /**
     * Adding a new vertex.
     * @param {Number} data 
     */
    addVertex(data) {
        this.#count++;
        this.#items.set(data, []);
    }

    /**
     * Binding two vertices together.
     * @param {Number} v1 
     * @param {Number} v2 
     */
    addEdge(v1, v2) {
        this.#items.get(v1).push(v2);
        this.#items.get(v2).push(v1);
    }

    /**
     * Depth-first search. The time complexity of DFS is O(V + E) 
     * where V is the number of vertices and E is the number of edges.
     * @param {Number} data 
     * @returns list of items
     */
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

    /**
     * Breadth-first search. 
     * The Time complexity of BFS is O(V + E).
     * @param {Number} data 
     * @returns list of items
     */
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

    /**
     * Finding the shortest path between two vertices in a graph using both 
     * Dijkstra's algorithm and Breadth-First Search (BFS). The time complexity
     * is O(V + E).
     * @param {Number} v1
     * @param {Number} v2 
     * @returns String
     */
    shortestPath(v1, v2) {
        if (!this.#items.has(v1) || !this.#items.has(v2)) {
            throw Error("Invalid source");
        }

        let visited = new Set();
        let dist = new Map();
        let parents = new Map();
        parents.set(v1, null);

        for (let key of this.#items.keys()) {
            dist.set(key, 0);
        }

        let queue = new Queue();
        queue.enqueue(v1);
        while (queue.peek() !== undefined) {
            let item = queue.peek();
            visited.add(queue.dequeue());
            let neighbors = this.#items.get(item);
            for (let i = 0; i < neighbors.length; i++) {
                if (visited.has(neighbors[i])) {
                    continue;
                }
                parents.set(neighbors[i], item);
                dist.set(neighbors[i], dist.get(item) + 1);
                queue.enqueue(neighbors[i]);
                visited.add(neighbors[i]);
                if(neighbors[i] === v2) {
                    break;
                }
            }
        }

        return `Path: ${this.#getPath(v2, parents)}; distance: ${dist.get(v2)}`;
    }

    /**
     * Get the shotest path.
     * @param {Number} v2 
     * @param {Map} parents 
     * @returns 
     */
    #getPath(v2, parents) {
        let result = [];
        let current = v2;
        while (parents.get(current) !== null) {
            result.push(current);
            current = parents.get(current);
        }
        result.push(current);
        return result;
    }

}
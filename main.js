import BinaryTree from "./domain/tree.js";
import Graph from "./domain/graph.js";
import LinkedList from "./domain/linked-list.js";
import StackUtil from "./util/stack-util.js";
import TreeUtil from "./util/tree-util.js";

const binaryTree = new BinaryTree();

binaryTree.insert(4);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(5);
binaryTree.insert(7);


console.log(binaryTree.find(10));

console.log(binaryTree.inOrder(binaryTree.root));
console.log(binaryTree.preOrder(binaryTree.root));
console.log(binaryTree.postOrder(binaryTree.root));

let graph = new Graph();

graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);

graph.addEdge(1, 0);
graph.addEdge(0, 2);
graph.addEdge(2, 1);
graph.addEdge(0, 3);
graph.addEdge(1, 4);
graph.addEdge(0, 5);
graph.addEdge(6, 5);
graph.addEdge(6, 4);


console.log(graph.shortestPath(0, 4));

console.log(graph.dfs(0));
console.log(graph.bfs(0));

let linkedList = new LinkedList();

linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);

linkedList.printLinkedList();

linkedList.delete(1);

linkedList.printLinkedList();

linkedList.insert(4);
linkedList.delete(4);

linkedList.printLinkedList();

linkedList.insert(4);
linkedList.delete(3);

linkedList.printLinkedList();

console.log(linkedList.isCyclical());

let stackUtil = new StackUtil();

stackUtil.push(3);
stackUtil.push(10);
stackUtil.push(10);
stackUtil.pop();

console.log(stackUtil.getMin());
console.log(stackUtil.getMax());


console.log(TreeUtil.isBST(binaryTree));
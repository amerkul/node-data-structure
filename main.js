import BinaryTree from "./domain/tree.js";

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

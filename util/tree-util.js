import Stack from "../domain/stack.js";

export default class TreeUtil {

    static isBST(tree) {
        let root = tree.root;
        // Stores root node and left
        // subtree of each node
        let stack = new Stack();
     
        // Stores previous visited node
        let prev = null;
        // Traverse the binary tree
        while (stack.peek() !== undefined || root != null) {
        // Traverse left subtree
            while (root != null) {
                // Insert root into Stack
                stack.push(root); 
                // Update root
                root = root.left;
            }
            root = stack.pop();
         
            // If data value of root node less
            // than data value of left subtree
            if (prev != null && root.data <= prev.data) {
                return false;
            }

            // Update prev
            prev = root;
            // Traverse right subtree
            // of the tree
            root = root.right;
        }
        return true;
    }

}
/* 

UNDERSTAND: Design an algorithm and write code to find the first common 
ancestor of two nodes in a binary tree. Avoid storing additional nodes 
in a data structure.

Example:

     1
   /   \
  2     3
 / \   / \
4   5 6   7

FCA (4, 5) = 2
FCA (4, 6) = 1
FCA (3, 4) = 1
FCA (2, 4) = 2

PLAN: 
1. Find path from root to n1 and store it in an array
2. Find path from root to n2 and store it in an array
3. Traverse both paths until the values in the arrays are the same.
   Return the common element immediately before the mismatch.
*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findPath = (root, path, v) => {
  if (!root) return false;

  path.push(root.value);

  if (root.value == v) return true;

  if (
    (root.left && findPath(root.left, path, v)) ||
    (root.right && findPath(root.right, path, v))
  )
    return true;

  path.pop();
  return false;
};

const findFCA = (root, n1, n2) => {
  let path1 = [];
  let path2 = [];

  if (!findPath(root, path1, n1) || !findPath(root, path2, n2)) return -1;

  let i = 0;
  while (i < path1.length && i < path2.length) {
    if (path1[i] !== path2[i]) {
      break;
    }
    i++;
  }

  return path1[i - 1];
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log('FCA(4, 5) = ', findFCA(root, 4, 5));
console.log('FCA(4, 6) = ', findFCA(root, 4, 6));
console.log('FCA(3, 4) = ', findFCA(root, 3, 4));
console.log('FCA(2, 4) = ', findFCA(root, 2, 4));

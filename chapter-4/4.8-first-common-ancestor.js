/* 

UNDERSTAND: Design an algorithm and write code to find the first common 
ancestor of two nodes in a binary tree. Avoid storing additional nodes 
in a data structure.

Example:

 10
 /
1   2   4  11
 \ /   / \ /
  3   5   8
   \ / \   \
    6   7   9

PLAN: 
1. Translate into graph terminology:
- vertices: each individual in the dataset
- edges: connect children to parents
- weights: n/a
- path: youngest to oldest, generation by generation
2. Build graph:
- adjacency list with each individual as a key and the value is a set of the parents
3. Traverse graph:
- farthest distance -> DFT
- create a hash table that stores the paths from the starting node
4. Compare paths:
- given two vertices, find and return the last (rightmost) common value in their paths, else return 'none'
*/

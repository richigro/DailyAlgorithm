/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const queue = [];
  const result = [];
  let sum = 0;
  let nodeCount = 0;
  
  //enqueue the root node
  queue.push(root);
  while(queue.length > 0){
      let dequeuedNode = queue.shift();
      //increment count by 1
      if(dequeuedNode.right){
         queue.push()
         }
  }
};
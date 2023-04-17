const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.root = null
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.root
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function addNode(node, data){
      if(!node){
        return new Node(data)
      } else if(node.data === data){
        return node
      } else if(node.data > data){
        node.left = addNode(node.left, data)
      } else{
        node.right = addNode(node.right, data)
      }
      return node
    }
    this.root = addNode(this.root, data)
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function hasNode (node, data) {
      if(!node) {
        return false
      } else if (node.data == data) {
        return true;
      } else if(data < node.data) {
        return hasNode(node.left, data)
      } else {
        return hasNode(node.right, data)
      }   
    }
    return hasNode(this.tree, data)
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function findNode(node, data) {
      if(!node) {
        return null
      } else if (node.data == data) {
        return node
      } else if (node.data > data) {
        return findNode(node.left, data)
      } else {
        return findNode(node.right, data)
      }
    }
    return findNode(this.tree, data);
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.root) {
      return null
    } else {
      let minNode = this.root;
      while (minNode.left) {
        minNode = minNode.left;
      }
      return minNode.data;
    }
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.root) {
      return null;
    } else {
      let maxNode = this.root;
      while (maxNode.right) {
        maxNode = maxNode.right;
      }
      return maxNode.data;
    }
  }
  }


module.exports = {
  BinarySearchTree
};
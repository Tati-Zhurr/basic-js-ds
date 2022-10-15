const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 
function removeKFromList(l, k) {
  if (l ===null){
    return l;
  }
  while (l.value === k){
    l=l.next;
  }
  thisNode =l;
  nextNode = thisNode.next;
  nextNextNode= nextNode.next;
  while(nextNode !==null){
    if (nextNode.value ===k){
      if(nextNextNode){
        if(nextNextNode.value ===k){
         thisNode.next = nextNextNode.next;
        }
        
      } else{
        thisNode.next = nextNode.next;

      }
      if (thisNode.next === null){
        break;
      }
    }
   thisNode = thisNode.next;
   nextNode = thisNode.next;
  }
    return l;
  
  }
 /* let resultList = l;
  while ((resultList)&&(resultList.value ===k)){
    resultList = resultList.next;
  };
  let current = resultList.next;
  while ((current)&&(current.value ===k)){
    current = current.next;
  };
  while (current.next){
    if (current.next.value !==k){
      current = current.next;
    }else{
      current.next =current.next.next;
    }*/
  
 /* let linkResult = new LinkedList;
  if (l.value !==k){
    let node = new NodeList(l.value);
    if (linkResult.head === null){
      linkResult.head = node;
    }
    let current = linkResult.head.next;
    while(current){
      current = current.next;
    }
    current = new NodeList(l.value);
  }
 // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
*/


module.exports = {
  removeKFromList
};

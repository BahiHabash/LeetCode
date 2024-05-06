
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const removeNodes = function(head) {
  const newArr = removeValues(arrFromLL(head));
  return llFromArr(newArr);
};

/**
* @param {number} arr
* @return {ListNode}
*/
const llFromArr = function(arr) {
  const dummy = new ListNode(0);
  let prev = dummy;

  for (const n of arr) {
      prev.next = new ListNode(n);;
      prev = prev.next;
  }

  return dummy.next;
}

/**
* @param {number} arr
* @return {number}
*/
const removeValues = function(arr) {
  const stack = [];

  for (const n of arr) {
      while (stack.length && stack.at(-1) < n)
          stack.pop();
      stack.push(n);
  }

  return stack;
}

/**
* @param {ListNode} head
* @return {number}
*/
const arrFromLL = function(head) {
  const arr = [];

  let curr = head;
  while (curr) {
      arr.push(curr.val);
      curr = curr.next;
  }

  return arr;
}
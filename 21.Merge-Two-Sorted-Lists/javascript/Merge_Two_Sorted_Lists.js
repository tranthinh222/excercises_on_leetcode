function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
//    @param {ListNode} list1
//    @param {ListNode} list2
//    @return {ListNode}

var mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) return null

  let tail = new ListNode()
  const dummy = tail
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = new ListNode()
      tail = tail.next
      tail.val = list1.val
      list1 = list1.next
    } else {
      tail.next = new ListNode()
      tail = tail.next
      tail.val = list2.val
      list2 = list2.next
    }
  }
  //26.Remove_Duplicates_from_Sorted_Array

  if (list1 !== null || list2 !== null)
    tail.next = list1 !== null ? list1 : list2
  return dummy.next
}

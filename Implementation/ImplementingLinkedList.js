//Liked Lists store elements sequentially, but don't store the elements contiguously like an array

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // the first node in the list
    this.head = null;
    // the size of the liked list
    this.size = 0;
  }
  //implementing Add
  add(element) {
    var node = new Node(element);
    var current;
    //if list is empty make head new node
    if(this.head == null) {
        this.head = node;

    } else {
        //save the first node to current variable so we could traverse it.
        current = this.head;
        //The traverse begins.

        while(current.next) {
            current = current.next;
        }

        //we have reached the end of the LinkedList. Add node
        current.next = node;
    }
    //increment the size by 1 since we added one.
    this.size++;

  } // END Add LINKEDLIST

  //implementing InsertAt
  insertAt(element,index) {
    // if user requesting more than the size of the link return false;
    if(index > 0 && index > this.size) {
      return false;

    } else {
      var node = new Node(element);
      var curr,pre;
      curr = this.head;
      //attaches the new node to the rest of the list

      if(index == 0) {
        node.next = this.head;
        this.head = node;

      } else {
        curr = this.head;
        // iterator to count when we reach the index to insert at
        var ite = 0;
        while(ite < index) {
             // we increment the iterator and update the pre to curr and move the curr to the next list.
             ite++;
             pre = curr;
             curr = curr.next;
        }

        // we made it to the index we want to insert at. BEGIN INSERTING
        node.next = curr;
        pre.next = node;
      }

      this.size++;
    }
  } // END InsertAT

  //removefrom(location)
  removeFrom(idx) {
    if(idx > 0 && idx > this.size) {
      return -1;

    } else {
      var curr,pre;
      curr = this.head;

      if(idx == 0) {
        this.head = curr.next;

      } else {
        var ite = 0;
        while(ite < idx) {
          ite++;
          pre = curr;
          curr = curr.next;
        }

        //remove node
        pre.next = curr.next;
      }

      this.size--;
    }
    return curr.element;
  }
  //removeelementELement
  removeElement(element){
    var curr = this.head;
    var prev = null;

    while(curr != null) {

      if(curr.element === element) {
        // elementue is at the head
        if(prev == null) {
          this.head = curr.next;
        //we found it during the list
        } else {
          prev.next = curr.next;
        }
        this.size--;
        return curr.element;
      }
      //walk the linked list
      prev = curr;
      curr = curr.next;
    }
    // it is not in the list
    return -1
  }
  //returns the index of the elementue node
  indexOf(element) {
    var count = 0;
    var curr = this.head;
    while(curr != null) {
      if(curr.element == element) {
        return count;
      }
      count++;
      curr = curr.next;
    }
    //wasnt found
    return -1;

  }
  //HELPERMETHODS
  //isEmpty
  isEmpty() {
    if(this.head == null) {
      return true

    } else {
      return false
    }
  }

  //size_Of_List
  listSize() {
    return this.size;
  }

  //PrintList
  printList() {
    if(this.head == null) {
      return -1;
    }

    let str = "";
    let curr = this.head;
    while(curr != null) {
      str+= " " + curr.element;
      curr = curr.next;
    }
    return str;
  }
}

var ll = new LinkedList();
console.log(ll.isEmpty());
ll.add(10);
ll.add(45);
console.log(ll.listSize());
ll.add(432);
ll.add(3);
ll.add(23);
ll.add(78);
console.log(ll.printList());
ll.removeElement(23);
console.log(ll.printList());
ll.insertAt(49,0);
console.log(ll.printList());
console.log(ll.indexOf(49));
ll.removeFrom(1);
console.log(ll.printList());

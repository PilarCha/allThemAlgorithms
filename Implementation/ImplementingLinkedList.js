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
  removeFrom(location) {

  }
  //removeELement
  removeElement(location){

  }

  //HELPERMETHODS
  //isEmpty
  isEmpty() {

  }

  //size_Of_List
  listSize() {

  }

  //PrintList
  printList() {

  }
}

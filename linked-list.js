class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Prepend first node
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  // Append last node
  append(value) {
    let node = new Node(value);
    let current;

    // If empty create head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
    this.size++;
  }

  // Return size
  listSize() {
    console.log(`List size: ${this.size}`);
    return this.size;
  }

  // Return head
  listHead() {
    console.log(`List head is ${this.head.value}`);
    return this.head.value;
  }

  // Return tail
  listTail() {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    console.log(`List tail is: ${current.value}`);
    return current.value;
  }

  // Return at index
  listAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.value);
      }
      count++;
      current = current.nextNode;
    }

    return null;
  }

  // Remove last node
  pop() {
    let current = this.head;
    let previous;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    current.value = null;
    previous.nextNode = null;

    this.size--;
  }

  // Check if list contains value
  contains(value) {
    let current = this.head;

    do {
      if (current.value === value) {
        console.log(`List contains ${value}`);
        return true;
      }
      current = current.nextNode;
    } while (current.nextNode);
    console.log(`List doesn't contain ${value}`);
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    do {
      if (current.value === value) {
        console.log(`Value found at index ${index}`);
        return true;
      }
      index++;
      current = current.nextNode;
    } while (current.nextNode);
    console.log(`List doesn't contain ${value}`);
    return null;
  }

  // Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }

  // Print list data in the form ( value ) -> ( value ) -> ( value ) -> null
  printListData() {
    let current = this.head;
    let ar = [];
    while (current) {
      console.log(current.value);
      ar.push(`( ${current.value} )`);
      current = current.nextNode;
    }
    ar.push("null");
    console.log(ar.join(" -> "));
  }

  // Insert at index
  insertAt(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.nextNode; // Node after index
    }

    node.nextNode = current;
    previous.nextNode = node;

    this.size++;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.nextNode;
      }

      previous.nextNode = current.nextNode;
    }

    this.size--;
  }
}

const linkedList = new LinkedList();

linkedList.append(3);
linkedList.append(4);
linkedList.prepend(2);
linkedList.prepend(1);

linkedList.pop();

linkedList.insertAt(4, 3);

linkedList.removeAt(3);

linkedList.contains(2);
linkedList.contains(5);
linkedList.find(2);
linkedList.find(10);

linkedList.printListData();
linkedList.toString();
linkedList.listSize();
linkedList.listHead();
linkedList.listTail();
linkedList.listAt(2);

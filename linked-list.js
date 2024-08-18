import Node from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head == null) {
      this.head = new Node(value, null);
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = new Node(value, null);
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    let temp = this.head;
    let size = 0;
    while (temp) {
      temp = temp.next;
      size++;
    }
    return size;
  }

  head() {
    return this.head;
  }
  tail() {
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    return tail;
  }
  at(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter == index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }
  pop() {
    const size = this.size();
    if (size >= 2) {
      const end = this.at(size - 2);
      end.next = null;
    }
    if (size == 1) {
      this.head = null;
    }
    return this;
  }
  contains(value) {
    let temp = this.head;
    while (temp) {
      if (value == temp.value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }
  find(value) {
    let temp = this.head;
    let index = 0;
    while (temp) {
      if (value == temp.value) {
        return index;
      }
      index++;
      temp = temp.next;
    }
    return null;
  }
  toString() {
    let message = "";
    let temp = this.head;
    while (temp) {
      message += `( ${temp.value} ) -> `;
      temp = temp.next;
    }
    message += null;
    console.log(message);
  }
  insertAt(value, index) {
    if (index == 0) {
      this.prepend(value);
      return this;
    }
    if (index == this.size()) {
      this.append(value);
      return this;
    }
    let previous = this.at(index - 1);
    let next = this.at(index);
    if (previous && next) {
      let node = new Node(value, next);
      previous.next = node;
    }
    return this;
  }
  removeAt(index) {
    if (index == 0) {
      this.head = this.head.next;
      return this;
    }
    let previous = this.at(index - 1);
    let curr = this.at(index);
    if (previous && curr) {
      previous.next = curr.next;
    }
    return this;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
// list.prepend("sba3");

console.log(list.removeAt(4).toString());

/***
 * Excerpted from "A Common-Sense Guide to Data Structures and Algorithms, Second Edition",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/jwdsal2 for more book information.
***/
reverse() {
  let previousNode = null;
  let currentNode = this.firstNode

  while (currentNode) {
    let nextNode = currentNode.nextNode;

    currentNode.nextNode = previousNode;
    
    previousNode = currentNode;
    currentNode = nextNode;
  }

  this.firstNode = previousNode;
}
/**
 * Queue atau antrian adalah struktur data yang beroperasi dengan prinsip FIFO (First In First Out).
 * Artinya data yang pertama masuk akan menjadi data pertama yang keluar.
 * Contoh penerapan queue adalah antrian di kasir supermarket.
 * Implementasi queue bisa menggunakan array atau linked list.
 */

/**
 * Implementasi queue menggunakan array
 */

class Queue {
    items = [];

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if(this.items.length == 0)
            return "Underflow";
        return this.items.shift();
    }

    front() {
        if(this.items.length == 0)
            return "No elements in Queue";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printQueue() {
        let str = "";
        for(let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

/**
 * Implementasi queue menggunakan linked list
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class QueueLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    enqueue(element) {
        let node = new Node(element);
        let current;

        if(this.head == null)
            this.head = node;
        else {
            current = this.head;
            while(current.next)
                current = current.next;
            current.next = node;
        }
        this.size++;
    }

    dequeue() {
        let current = this.head;
        if(current) {
            this.head = current.next;
            this.size--;
            return current.element;
        }
        return null;
    }

    front() {
        return this.head;
    }

    isEmpty() {
        return this.size == 0;
    }

    printQueue() {
        let current = this.head;
        let str = "";
        while(current) {
            str += current.element + " ";
            current = current.next;
        }
        return str;
    }
}
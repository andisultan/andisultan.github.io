/**
 * Stack atau tumpukan
 * Adalah struktur data yang bersifat LIFO (Last In First Out).
 * Artinya data yang terakhir masuk akan menjadi data pertama yang keluar.
 * Contoh penerapan stack adalah tumpukan buku yang tersusun di meja.
 * Buku yang terakhir ditumpuk akan menjadi buku yang pertama diambil.
 * Implementasi stack bisa menggunakan array atau linked list.
 */

/**
 * Implementasi stack menggunakan array
 */

let timeStart = performance.now();
yourCodeHere();
let startEnd = performance.now();
console.log(`Time execution: ${(startEnd - timeStart) / 1000} seconds`);

class Stack {
    items = [];

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        let str = "";
        for(let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

/**
 * Implementasi stack menggunakan linked list
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(element) {
        let node = new Node(element);
        let current;

        if(this.head == null)
            this.head = node;
        else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    pop() {
        let current = this.head;
        let prev;

        if(current.next == null)
            this.head = null;
        else {
            while(current.next) {
                prev = current;
                current = current.next;
            }
            prev.next = null;
        }
        this.size--;
    }

    peek() {
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        return current.element;
    }

    isEmpty() {
        return this.size == 0;
    }

    printStack() {
        let current = this.head;
        let str = "";
        while(current) {
            str += current.element + " ";
            current = current.next;
        }
        return str;
    }
}

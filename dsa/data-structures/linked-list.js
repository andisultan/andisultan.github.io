/**
 * Linked List adalah struktur data yang terdiri dari node-node yang saling terhubung.
 * Setiap node memiliki data dan pointer ke node selanjutnya.
 * Node terakhir memiliki pointer ke null.
 */

/**
 * Implementasi linked list
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        // head adalah node pertama dalam linked list
        this.head = null;
        // size adalah jumlah node dalam linked list
        this.size = 0;
    }

    // menambahkan node baru pada akhir linked list
    add(element) {
        let node = new Node(element);
        let current;

        // jika linked list masih kosong
        // node baru akan menjadi head
        if(this.head == null)
            this.head = node;
        else {
            current = this.head;
            // mencari node terakhir
            while(current.next)
                current = current.next;
            // node baru akan menjadi node terakhir
            current.next = node;
        }
        this.size++;
    }

    // menghapus node pada posisi tertentu
    remove(element) {
        let current = this.head;
        let prev = null;

        // mencari node dengan element yang dihapus
        while(current != null) {
            if(current.element === element) {
                if(prev == null)
                    this.head = current.next;
                else
                    prev.next = current.next;
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    // menghapus node pada posisi tertentu
    removeAt(index) {
        if(index > 0 && index > this.size)
            return -1;
        else {
            let current = this.head;
            let prev = null;
            let i = 0;

            if(index == 0) {
                this.head = current.next;
            } else {
                while(i < index) {
                    i++;
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
    }

    // menambahkan node pada posisi tertentu
    insertAt(element, index) {
        if(index > 0 && index > this.size)
            return false;
        else {
            let node = new Node(element);
            let current = this.head;
            let prev = null;
            let i = 0;

            if(index == 0) {
                node.next = current;
                this.head = node;
            } else {
                while(i < index) {
                    i++;
                    prev = current;
                    current = current.next;
                }
                node.next = current;
                prev.next = node;
            }
            this.size++;
            return true;
        }
    }
}

let linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.add(50);

console.log(linkedList.remove(20));
console.log(linkedList.removeAt(3));
console.log(linkedList.insertAt(60, 3));
console.log(linkedList.insertAt(70, 0));
console.log(linkedList.insertAt(80, 1));

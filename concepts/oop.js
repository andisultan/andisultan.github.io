class Person {
  // private variable 
  #firstname
  #lastname

  // public variable
  address
  age

  // static variable
  static version = '1.0.0'

  /**
   * @param {any} name
   */
  set firstname(name) {
    this.#firstname = name
  }

  get firstname() {
    return this.#firstname
  }

  /**
   * @param {any} name
   */
  set lastname(name) {
    this.#lastname = name
  }

  get lastname() {
    return this.#lastname
  }

  getFullName(){
    return `my fullname is ${this.#firstname} ${this.#lastname}`
  }
  
}

let andi = new Person()
andi.firstname = 'andi'
andi.lastname = 'sultan'
console.log(andi.getFullName())
console.log(Person.version)


// membuat class dan menampilkan error 
class Counter {
  static sum(...numbers) {
    if(numbers.length < 1) {
      throw new Error('Minimal harus punya 1 parameter')
    }

    let total = 0
    for (const number of numbers) {
        total += number
    }

    return total
  }
}

try {
  console.log(Counter.sum())
} catch (error) {
  console.log(`terjadi error: ${error.message}`)
}
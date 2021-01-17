class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  add(node) {
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head === this.tail) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      return node;
    }

    const node = this.head;
    this.head = this.head.next;
    return node;
  }

  peek() {
    return this.head;
  }
}

class AnimalNode {
  constructor(type) {
    this.type = type;
    this.order = null;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.counter = 0;
  }

  enqueue(animal) {
    this.counter++;
    animal.order = this.counter;
    if (animal.type === 'dog') {
      this.dogs.add(animal);
    } else {
      this.cats.add(animal);
    }
  }

  dequeueAny() {
    const oldestDog = this.dogs.peek();
    const oldestCat = this.cats.peek();
    if (!oldestCat || oldestDog.order < oldestCat.order) {
      return this.dogs.remove();
    } else if (!oldestDog || oldestDog.order > oldestCat.order) {
      return this.cats.remove();
    }
  }

  dequeueDog() {
    return this.dogs.remove();
  }

  dequeueCat() {
    return this.cats.remove();
  }
}

// tests
let shelter = new AnimalShelter();
shelter.enqueue(new AnimalNode('cat'));
shelter.enqueue(new AnimalNode('cat'));
shelter.enqueue(new AnimalNode('cat'));
shelter.enqueue(new AnimalNode('dog'));
shelter.enqueue(new AnimalNode('dog'));
shelter.enqueue(new AnimalNode('dog'));
console.log(shelter.dequeueAny()); // cat
console.log(shelter.dequeueDog()); // dog
console.log(shelter.dequeueCat()); // cat
console.log(shelter.dequeueAny()); // cat
console.log(shelter.dequeueAny()); // dog

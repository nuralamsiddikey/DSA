class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [[key, value]];
    } else this.table[index].push([key, value]);
  }

  findOne(key) {
    const index = this.hash(key);
    return this.table[index].filter((item) => item[0] === key)[0][1];
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      console.log(`index: ${i}`, this.table[i]);
    }
  }
}

const table = new HashTable(50);

table.set("name", "Nirob");
table.set("mane", "Male");
table.set("occupation", "Engineer");

table.display();

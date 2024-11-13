"use strict";

class Storage {
  #items;
  
  constructor(items) {
    // Since we expect that the items should be an array then to avoid errors, we check this
    if (!Array.isArray(items)) {
      throw new Error('items must be an array')
    }
    this.#items = items;
  }
  
  getItems() {
    return this.#items
  }

  addItem(newItem) {
    this.#items.push(newItem)
  }

  // method that removes only the first item corresponding to itemToRemove
  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }

  // method that removes all items corresponding to itemToRemove - added for fun. I know it's against YAGNI ;)
  removeItems(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }

}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

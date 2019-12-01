"use strict";

//Исправь ошибки которые будут в консоли, чтобы скрипт заработал.
// const Inv = function(items = ["Монорельса", "Фильтр"]) {
//   this.items = items;
// };

// const inventory = new Inv();

// Inv.prototype.add = bind(function(itemName) {
//   console.log(`Adding ${itemName} to inventory`);

//   this.items.push(itemName);
// });

// Inv.prototype.remove = bind(function(itemName) {
//   console.log(`Removing ${itemName} from inventory`);

//   this.items = this.items.filter(item => item !== itemName);
// });

const inventory = {
  items: ["Монорельса", "Фильтр"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  }
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);

  action.call(inventory, itemName);
};

invokeInventoryAction("Аптечка", inventory.add);

// inventory.add("Аптечка");
// Invoking action on Аптечка
// Adding Аптечка to inventory

invokeInventoryAction("Трубка", inventory.add);

// inventory.add("Трубка");
// Invoking action on Трубка
// Adding Трубка to inventory

invokeInventoryAction("Бинокль", inventory.add);

// inventory.add("Бинокль");
// Invoking action on Бинокль
// Adding Бинокль to inventory


console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка', 'Трубка', 'Бинокль']

invokeInventoryAction("Фильтр", inventory.remove);
// inventory.remove("Фильтр");
// Invoking action on Фильтр
// Removing Фильтр from inventory

invokeInventoryAction("Трубка", inventory.remove);
// inventory.remove("Трубка");
// Invoking action on Трубка
// Removing Трубка from inventory

console.log(inventory.items); // ['Монорельса', 'Аптечка', 'Бинокль']

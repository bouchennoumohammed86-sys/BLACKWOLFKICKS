// JavaScript code for shopping cart functionality

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }

    getItems() {
        return this.items;
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

// Example usage:
const cart = new ShoppingCart();
cart.addItem({ name: 'Shoes', price: 50 });
cart.addItem({ name: 'Shirt', price: 20 });
console.log(cart.getItems());  // Show items in the cart
console.log(cart.getTotal()); // Show total price
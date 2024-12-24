function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
Product.prototype.getDetails = function() {
    return `${this.name} - $${this.price} - Quantity: ${this.quantity}`;
};
Product.prototype.updateQuantity = function(amount) {
    this.quantity += amount;
    console.log(`${this.name} quantity updated to ${this.quantity}.`);
};
function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity);  
    this.brand = brand;
    this.model = model;
}
Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;
Electronics.prototype.powerOn = function() {
    console.log(`${this.brand} ${this.model} is now powered on.`);
};
Electronics.prototype.powerOff = function() {
    console.log(`${this.brand} ${this.model} is powered off.`);
};
function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity);  
    this.size = size;
    this.material = material;
}
Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;
Clothing.prototype.getSizeInfo = function() {
    console.log(`Size: ${this.size}, Material: ${this.material}`);
};
function Books(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity);  
    this.author = author;
    this.genre = genre;
}
Books.prototype = Object.create(Product.prototype);
Books.prototype.constructor = Books;
Books.prototype.getBookInfo = function() {
    console.log(`Author: ${this.author}, Genre: ${this.genre}`);
};
const laptop = new Electronics('Laptop', 1200, 10, 'Apple', 'MacBook Pro');
const shirt = new Clothing('T-shirt', 20, 100, 'L', 'Cotton');
const book = new Books('JavaScript for Beginners', 35, 50, 'John Doe', 'Programming');
console.log(laptop.getDetails()); 
console.log(shirt.getDetails());  
console.log(book.getDetails());   
laptop.powerOn(); 
laptop.powerOff(); 
shirt.getSizeInfo(); 
book.getBookInfo(); 
laptop.updateQuantity(5); 
shirt.updateQuantity(-10); 
book.updateQuantity(20); 

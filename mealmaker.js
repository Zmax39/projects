// object called menu
const menu = {
    _courses: { // property named _courses inside the menu object with a value of an object
        appertizers: [], // appertizers property inside the _courses object
        mains: [], // mains property, same as above 
        desserts: [] // desserts property, same as above
    },
    get appertizers() { // getter method for appertizers

    },
    set appertizers(appertizerIn) { // setter method for appertizers
  
    },
    get mains() { // getter method for mains
  
    },
    set mains(mainsIn) { // setter method for mains
  
    },
    get desserts() { // getter method for desserts
  
    },
    set desserts(dessertsIn) { // setter method for desserts
      
    },
    get courses() { // getter method inside the menu object, called courses
      return { // the courses method will return,
        appertizers: this.appertizers, // key-value pair for appertizers
        mains: this.mains, // key-value pair for mains
        desserts: this.desserts // key-value pair for desserts
      }
    },
    addDishToCourse (courseName, dishName, dishPrice) { // method with 3 parameters
      const dish = { // object named dish inside the addDishToCourses method
        name: dishName, // the dish object contains name which it gets from the dishName
        price: dishPrice // the dish object contains price which it gets from dishPrice
      }
      return this._courses[courseName].push(dish); // pushes the dish object into the menus _courses object, depending on the courseName that is passed in
    },
    getRandomDishFromCourse (courseName) { // method with the courseName parameter - allows us to get a random dish from a course on the menu.
      const dishes = this._courses[courseName]; // retrieves an array of the given courses dishes from the menus _courses object and stores it in a variable.
      const randomIndex = Math.floor(Math.random() * dishes.length); // creates a random index by multiplying a random number by the length of the dishes array - number between 0 and length of the array
      return dishes[randomIndex]; // returns a dish located at that index in dishes.
    },
    generateRandomMeal: function() { // function that generates 3 course meal
      const appertizer = this.getRandomDishFromCourse('appertizers'); // appertizer variable which is the result of calling the getRandomDishFromCourse() method when an appertizers string is passed in
      const main = this.getRandomDishFromCourse('mains'); // same as above but when a mains string is passed in
      const dessert = this.getRandomDishFromCourse('desserts'); // same as above but when a dessert string is passed in
      const totalPrice = appertizer.price + main.price + dessert.price; // variable which calculates the total price

      return `Your meal is ${appertizer.name}, ${main.name}, ${dessert.name}, The price is £${totalPrice}.` // returns a string telling the user the meal and price
    }
};

 menu.addDishToCourse('appertizers', 'Caesar Salad', 4.25);
 menu.addDishToCourse('appertizers', 'Bruschetta', 3.15);
 menu.addDishToCourse('appertizers', 'Soup of the day', 4.20);
 menu.addDishToCourse('mains', 'Pork Chops', 7.00);
 menu.addDishToCourse('mains', 'Spaghetti Carbonara', 8.50);
 menu.addDishToCourse('mains', 'Rib-Eye Steak', 12.00);
 menu.addDishToCourse('desserts', 'Chocolate Cake', 3.15);
 menu.addDishToCourse('desserts', 'Ice Cream', 2.20);
 menu.addDishToCourse('desserts', 'Profitter Rolls', 4.10);

 /// all of the aboe add a dish to the couse, i could repeat this to make a bigger menu.

 let meal = menu.generateRandomMeal(); // using the geterateRandomMeal fucntion and saving it to a variable named meal
 console.log(meal); // logs the random meal to the console.
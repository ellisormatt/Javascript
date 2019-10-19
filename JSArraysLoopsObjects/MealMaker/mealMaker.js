const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers () {
        return this.appetizers;
    },
    set appetizers (appIn) {
        this.appetizers += appIn;
    },
    get mains () {
        return this.mains;
    },
    set mains (mainIn) {
        this.mains += mainIn;
    },
    get desserts () {
        return this.desserts;
    },
    set desserts (dessertIn) {
        this.desserts += dessertIn;
    },
    get courses () {
        return  {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse (courseName,dishName,dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse (courseName) {
        //get a random dish from a specified course
        let dishes = this._courses[courseName];
        selectDish = Math.floor(Math.random()*dishes.length);
        return dishes[selectDish];
    },
    generateRandomMeal () {
        //automatically create a three course meal
        let generatedMeal = {
            appetizer: this.getRandomDishFromCourse('appetizers'),
            main: this.getRandomDishFromCourse('mains'),
            dessert: this.getRandomDishFromCourse('desserts')
        }
        return generatedMeal;
    }
    
};


menu.addDishToCourse('appetizers','testApp1','$5');
menu.addDishToCourse('mains','testMain1','$6');
menu.addDishToCourse('desserts','testDessert1','$7');

menu.addDishToCourse('appetizers','testApp2','$5');
menu.addDishToCourse('mains','testMain2','$6');
menu.addDishToCourse('desserts','testDessert2','$7');

menu.addDishToCourse('appetizers','testApp3','$5');
menu.addDishToCourse('mains','testMain3','$6');
menu.addDishToCourse('desserts','testDessert3','$7');

console.log(menu.getRandomDishFromCourse('appetizers'));
console.log(menu.generateRandomMeal());
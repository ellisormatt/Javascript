const menu = {
    _courses: {
        appetizers=[],
        mains=[],
        desserts=[]
    },

    get appetizers () {
        return this.appetizers;
    },

    set appetizers () {
    
    },
    get mains () {
        return this.mains;
    },

    set mains () {
    
    },

    get desserts () {
        return this.desserts;
    },
    set desserts () {

    },
    get courses () {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse (courseName,dishName,dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish);
    }
    
}
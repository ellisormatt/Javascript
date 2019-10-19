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
    }
    
};
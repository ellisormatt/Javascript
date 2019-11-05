class TestClass {
    constructor (param1,param2) {
        this.param1=param1;
        this.param2=param2;
        this.param3='asd';
    }
    logProperty () {
        console.log(this.param1+this.param2+this.param3);
    }
};

var newClass = new TestClass ('123','456');
//newClass.logProperty(param1);
//newClass.logProperty(param2);
//newClass.logProperty(param3);
newClass.logProperty();
console.log(newClass);
let protoRabbit = {
    speak (line) {
        console.log(`the ${this.type} rabbit says '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak('saying things asdasd');




let testProto = {
    testProtoFunction () {
        console.log(`logging param1: ${this.property1} \nlogging param2: ${this.property2}`);
    }
};
let testNewObject = Object.create(testProto);
testNewObject.property1 = "some property 1 value"
testNewObject.property2 = "some property 2 value"
testNewObject.testProtoFunction();

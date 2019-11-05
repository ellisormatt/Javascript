//create a class Group
//add adds a value to the group(only if it isnt already a member)
//delete removes its argument from the group
//has returna a boolean indicating whether the arg is a member of the group
//use === to determine whether two values are the same
//give the class a static from method that takes an iterable object as argument
//and creates a group that contains all the values produced by iterating over it

class Group {
    constructor (param) {
        this.propertyArray = [];
        Group.fromFn(param);
    }
    static fromFn (parameter) {
        console.log(this.propertyArray);
        for(let i=0;i<parameter.length;i++) {
            if(!this.propertyArray.includes(parameter[i])) {
                this.propertyArray.push(parameter[i]);
            }
        }
        
    }
}
  

/*
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
*/

//let newGroup = new Group.from([10,20]);
let newGroup = new Group([1,2]);
console.log(newGroup);
//newGroup.from([1,2,3,4]);
//console.log(newGroup);
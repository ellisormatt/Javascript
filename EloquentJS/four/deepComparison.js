//write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties
//where the values of the properties are equal when compared with recursive call to deepEqual

//couldnt figure this one out, need to work on recursive functions

/*
function deepEqual (obj1,obj2) {
    if (typeof obj1 == typeof obj2) {
        //if typeof is not object, compare using ===
        if(obj1 === null || obj2 === null) {
            //if value is null, return 'object one or two was null'
            return 'object one or two was null';
        } else if (typeof obj1 == 'object') {
            //if typeof is object, use Object.Keys to compare
            //first, compare quantity of keys in each object
            let keys1 = Object.keys(obj1);
            let keys2 = Object.keys(obj2);
            //console.log(keys1);
            //console.log(keys2);
            if(keys1.length == keys2.length) {
                for (let i=0;i<keys1.length; i++) {
                    if (Object.keys(obj1)[i] != Object.keys(obj2)[i]) {
                        //if keys are not all the same, return false
                        //return false;
                        //path1
                        return 'path1';
                    }
                    else if (Object.values(obj1)[i] != Object.values(obj2)[i]) {
                        //if key values are not the same, return false
                        //return false;
                        //path2
                        console.log(Object.values(obj1)[i]);
                        console.log(Object.values(obj2)[i]);
                        //return 'path2';
                        return deepEqual ()
                    } else {
                        return true;
                    }
                }
            } else {
                return false;
            }
        } else {
            //if typeof is not object, return true
            return true;
        }
    }
}
*/

function deepEqual (obj1,obj2) {
    if((typeof obj1 == 'object' && obj1 != null) && (typeof obj2 == 'object' && obj2 != null))
    {
        if (Object.keys(obj1).length == Object.keys(obj2).length) {
            for (let i=0;i<Object.keys(obj1).length;i++) {
                
            }
        }
    } else if (obj1 == obj2) {
        return true
    } else {
        return false
    }
}





//let obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));
//console.log(deepEqual(obj, {here: 1, object: 2}));
//console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
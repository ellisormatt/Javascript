const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 200000]];

// Write your code below:
function handleSuccess (param) {
  console.log(param);
};

function handleFailure (param) {
  console.log(param);
}

checkInventory(order).then(handleSuccess,handleFailure);

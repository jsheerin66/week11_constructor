function basicCard(front, back) {


  this.front = front;
  this.back = back;
}

//test to create object for psuedo code purposes
var basic = new basicCard("this is the front", "this is the back");

console.log(basic);
console.log(basic.front);
console.log(basic.back);
//makes it avialble for other js files to import
module.exports = basicCard;

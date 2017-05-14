function basicCard(front, back){
  this.front = front;
  this.back = back;
}

var card = new basicCard("this is the front", "this is the back");

console.log(card);
console.log(card.front);
console.log(card.back);
//makes it avialble for other js files to import
module.exports = basicCard;

function clozeCard(text, cloze){
  this.text = text;
  this.cloze = cloze;
}
// below is an example of an object that the constructor is going to create
// cloze = {
//   text: "I like to go to the store";
//   cloze: "store";
// }

var cloze = new clozeCard("I like to go to the store", "store")

console.log(cloze);
console.log(cloze.text);
console.log(cloze.cloze);

// psudeocode and console log all the lines below

function clozeCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;

  var clozePositions = clozeDelete(text, cloze);


  this.partial = getPartial(text, clozePositions);

  this.cloze = text.slice(clozePositions[0], clozePositions[1])

  function getPartial(text, clozePostions) {

    var begin = text.slice(0, clozePositions[0]);

    var finish = text.slice(clozePositions[1], text.length);

    return begin + "..." + finish;
  }

  function clozeDelete(text, cloze) {
    var begin = text.indexOf(cloze);

    if (begin !== -1) {
      return [begin, begin + cloze.length];
    }
    throw new Error("ERROR");
  }
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


clozeCard.prototype.displayCard = function displayCard() {
  return
  this.partial.replace(/\.\.\./, "'" + this.cloze + "'");
};

module.exports = clozeCard

// --1--
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
//For
for (let i = 0; i <= friends.length; i++) {
  string += friends[i];
  string += ",";
}
console.log(string);
//Join
console.log("Make throught join(): " + friends.join(","));
// --2--
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
console.log(cards);
const card = cards.splice(2, 4);
console.log("Splice delete: " + cards);
const adding = cards.splice(6, 0, "Карточка-6");
console.log("Splice adding: " + cards);
const updates = cards.splice(3, 1, "Card-4");
console.log("Splice update: " + cards);

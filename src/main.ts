let zahlenArray = [1, 2, 3, 4, 5];
let verdoppelteZahlen = zahlenArray.map(function(zahl) {
    return zahl * 2;
});
console.log(verdoppelteZahlen);

let woerter = ["Mercedes", "Audi", "Toyota", "Ford", "Tesla"];
let langeWoerter = woerter.filter(function(wort) {
    return wort.length > 5;
});
console.log(langeWoerter);

let zahlenArray2 = [10, 20, 30, 40];
let summe = zahlenArray2.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(summe);

let zahlenArray3 = [5, 8, 12, 15];
let mindestensEineGroesserAls10 = zahlenArray3.some(function(zahl) {
    return zahl > 10;
});
console.log(mindestensEineGroesserAls10);

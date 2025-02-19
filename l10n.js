// Localization

// Dates

const date = new Date();

console.log(date);
console.log(new Intl.DateTimeFormat("en-US").format(date));
console.log(new Intl.DateTimeFormat("fr-FR").format(date));
console.log(new Intl.DateTimeFormat("ja-JP").format(date));

// Numbers
const price = 1234.56;
console.log(new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(price));
console.log(new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(price));
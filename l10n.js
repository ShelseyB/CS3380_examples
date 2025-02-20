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

const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    style: "unit",
    unit: "byte",
    unitDisplay: "long"
});

console.log(formatter.format(500000));
console.log(formatter.format(2000));
console.log(formatter.format(20));


const formatterES = new Intl.NumberFormat("es", {
    notation: "compact",
    style: "unit",
    unit: "byte",
    unitDisplay: "long"
});

console.log(formatterES.format(500000));
console.log(formatterES.format(2000));
console.log(formatterES.format(20));
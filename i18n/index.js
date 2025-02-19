const i18n = require("i18n");
const path = require("path");

// Initialize i18n
i18n.configure({
    locales: ["en", "de", "ru"], // List of supported languages
    directory: path.join(__dirname, "locales"), // Location of language files
    defaultLocale: "en",
    objectNotation: true
});

// Grab locale from command line
const locale = process.argv[2] || "en";
i18n.setLocale(locale);

// Print off translated message
console.log(i18n.__("hello"));

// Try to print off something that doesn't exist
console.log(i18n.__("hello world"));

// Supports multi-level translations
console.log(i18n.__("help.-p for selecting filepath"));
console.log(i18n.__("help.test.this"));

// Plurals
console.log(i18n.__n("%s dog", 1));
console.log(i18n.__n("%s dog", 3));

// Change locale
// Change locale
i18n.setLocale('ru')

// More plurals (Russian)
console.log(i18n.__n('%s cat', 0)) // --> 0 кошек
console.log(i18n.__n('%s cat', 1)) // --> 1 кошка
console.log(i18n.__n('%s cat', 2)) // --> 2 кошки
console.log(i18n.__n('%s cat', 5)) // --> 5 кошек
console.log(i18n.__n('%s cat', 6)) // --> 6 кошек
console.log(i18n.__n('%s cat', 21)) // --> 21 кошка

// sprintf
i18n.setLocale("de");
console.log(i18n.__("Hello %s, how are you today?", "Bob"))


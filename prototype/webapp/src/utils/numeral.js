import numeral from "numeral";

// load a locale
numeral.register("locale", "de", {
  delimiters: {
    thousands: ".",
    decimal: ","
  },
  abbreviations: {
    thousand: "k",
    million: "m",
    billion: "b",
    trillion: "t"
  },
  ordinal: "ter",
  currency: {
    symbol: "€"
  }
});

// switch between locales
numeral.locale("de");
numeral.defaultFormat("0,0.00 $");

export default numeral;

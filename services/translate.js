import enMessages from "../data/localMessages_en.json";
import frMessages from "../data/localMessages_fr.json";

const langs = {
  en: enMessages,
  fr: frMessages,
};

const _tr = (englishMessage) => {
  let locale = "en";

  if (typeof window !== "undefined") {
    locale =
      document.URL.search(location.origin + "/fr") >= 0
        ? "fr"
        : "en";
  }

  if (locale) {
    // search in files
    let foundMessage = langs[locale][englishMessage];

    // if the msg exists
    if (foundMessage) {
      return foundMessage;
    }

    // if msg doesn't exists
    if (!foundMessage && locale === "en") {
      return englishMessage;
    }
  }

  return englishMessage;
};

export { _tr };

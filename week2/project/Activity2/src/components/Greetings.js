import React from "react";

function Greetings({ lang, children }) {
  let greetingtext = "";

  switch (lang) {
    case "de":
      greetingtext = `Hallo, ${children}`;
      break;
    case "en":
      greetingtext = `Hello, ${children}`;
      break;
    case "es":
      greetingtext = `Hola, ${children}`;
      break;
    case "fr":
      greetingtext = `Bonjour, ${children}`;
      break;
    default:
      greetingtext = `Hello, ${children}`;
      break;
  }
  return <div className="Greetings">{greetingtext}</div>;
}

export default Greetings;

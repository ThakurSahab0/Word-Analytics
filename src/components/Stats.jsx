import { FACEBOOK_MAX_CHARACTERS, GOOGLE_MAX_CHARACTERS, LINKEDIN_MAX_CHARACTERS, X_MAX_CHARACTERS } from "../lib/constant";

/* eslint-disable react/prop-types */
export default function Stats({ text }) {
  const numberOfCharacters = text.length;
  let numberOfWords;
  if (text == " ") {
    numberOfWords = 1;
  } else {
numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  }
  
  const numberofSentences = text.split(/[.?!]/g).filter(Boolean).length;
  let numberOfLines;
  if (text == "") {
     numberOfLines = 0;
  } else
  {
     numberOfLines = text.split(/\r\n|\r|\n/).length;
    }
  const numberOfCharacterFacebook = FACEBOOK_MAX_CHARACTERS - text.length;
  const numberOfCharacterX = X_MAX_CHARACTERS - text.length;
  const numberOfCharacterGoogle = GOOGLE_MAX_CHARACTERS - text.length;
  const numberOfCharacterLinkedIn = LINKEDIN_MAX_CHARACTERS - text.length;
  
  return (
    <section className="stats">
      <Stat number={numberOfCharacters} label="Charcaters" />
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberofSentences} label="Sentence" />
      <Stat number={numberOfLines} label="Lines" />
      <Stat number={numberOfCharacterFacebook} label="Facebook" />
      <Stat number={numberOfCharacterX} label="X" />
      <Stat number={numberOfCharacterGoogle} label="Google" />
      <Stat number={numberOfCharacterLinkedIn} label="LinkedIn" />
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span className={`stat__number ${ number < 0 ? "stat__number--limit" : ""}`}>{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}

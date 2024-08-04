import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Container() {
    const [text, setText] = useState("");
  
  return (
    <main className="container">
      <TextArea text={text} setText={ setText} />
      <Stats text={ text} />
    </main>
  )
}

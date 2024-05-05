import React from "react";
import DisplayTheName from "./testingChildren/page";

export default function testing() {
  return(
  <div>
    <title>Hello, Oliver Do!</title>
    <h1> This page shows the children imported from these files</h1>
    <DisplayTheName name="Oliver Do"/>
  </div>
  )
}
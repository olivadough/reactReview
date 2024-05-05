import React from "react";

export default function DisplayTheName(prop: { name: string}) {
  return <h1> This is the name of the children ${prop.name}!</h1>;
}
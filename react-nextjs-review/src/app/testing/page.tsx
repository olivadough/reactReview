'use client'
import React, { useState, useEffect } from "react";
import DisplayTheName from "./testingChildren/page";

export default function Testing() {
  const [count, setCount] = useState(0)
  const [backgroundColor,setBackgroundColor] = useState({color:"black"})

  const handleColorChange = (e) => {
    console.log('Set BackGround Color to:',e.target.value)
    setBackgroundColor({color:e.target.value});
  };
  useEffect(
    () => {
      console.log('UseEffect Being Ran:')
      console.log('BackgroundColor:',backgroundColor)
        document.body.style.backgroundColor = backgroundColor.color
    },
    [backgroundColor]
  )
  return(
  <div>
    <title>Hello, Oliver Do!</title>
    <h1> This page shows the children imported from these files</h1>
    <button style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
        }}  onClick={() => setCount(count + 1)}> CLICK ME TO UP + 1</button>
    <p>You clicked {count} times</p>
        <div>
      <h2>Choose a Color</h2>
      <label>
        <input
          type="radio"
          name="color"
          value="#ff0000"
          onChange={handleColorChange}
        />
        Red
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="color"
          value="#00ff00"
          onChange={handleColorChange}
        />
        Green
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="color"
          value="#0000ff"
          onChange={handleColorChange}
        />
        Blue
      </label>
      <br />
    </div>
    <DisplayTheName name="Oliver Do"/>
  </div>
  )
}
import React from "react";
import userData from "./userData.json"

export default function DisplayTheName(prop: { name: string}) {
  return (
  <div>
    <h1> This is the name of the children {prop.name}!</h1>
    {userData.users.map((user) => (
      <li key={user.id}>
        <strong>Name:</strong> {user.name}, <strong>Age:</strong>{user.age}, <strong>Email:</strong>{user.email}
      </li>
    ))}
  
  </div>)
}
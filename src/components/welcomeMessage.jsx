import { useState } from "react";

function Greeting2({ isLoggedIn }) {
  let message;
  if (isLoggedIn) {
    message = "Welcome back !";
  } else {
    message = "Please log in.";
  }
  return <h1>{message}</h1>;
}


export default Greeting2
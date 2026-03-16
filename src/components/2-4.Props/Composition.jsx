import React from "react";

function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}

function Composition() {
  return (
    <div>
      <Welcome name="Jimmy" />
      <Welcome name="Timmy" />
      <Welcome name="Amy" />
    </div>
  );
}

export default Composition;

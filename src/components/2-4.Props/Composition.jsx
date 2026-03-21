import React from 'react';
import List from '../2-9.List/List';

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
export function App() {
  return (
    <div className="App">
      <List />
      {/* <FunctionalComponent />
            <ClassComponent />
            <Composition />
            <Extraction /> */}
      {/* <ClassComponent2 /> */}
      {/* <Event />
            <Condition /> */}
      <ControlledComponent />
    </div>
  );
}

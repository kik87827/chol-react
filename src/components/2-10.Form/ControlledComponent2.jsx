import React, { useState } from 'react';

export default function ControlledComponent() {
  const [formitem, setFormitem] = useState({
    name: '',
    essay: '',
    flavor: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormitem((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    console.log(formitem);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={formitem.name} name="name" onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea value={formitem.essay} name="essay" onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select value={formitem.flavor} name="flavor" onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

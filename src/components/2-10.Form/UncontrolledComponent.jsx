import React, { useRef } from 'react';

export default function UncontrolledComponent() {
  const fileInputRef = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    alert('Selected file ' + fileInputRef.current.files[0].name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="file" ref={fileInputRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

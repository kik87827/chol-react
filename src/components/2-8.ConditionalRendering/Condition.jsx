import React from 'react';

function UserGreeting({ name = '', count }) {
  return (
    <h1>
      {name && name + ', '}Welcome{Boolean(count) && ` It's ${count} times`}
    </h1>
  );
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting({ isLoggedIn }) {
  /* if (isLoggedIn) {
    return <UserGreeting name="Jimmy" count={0} />;
  }
  return <GuestGreeting />; */

  return isLoggedIn ? (
    <UserGreeting name="Jimmy" count={0} />
  ) : (
    <GuestGreeting />
  );
}

export default function Condition() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}

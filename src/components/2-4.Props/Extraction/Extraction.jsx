import React from "react";

function formatDate(date) {
  return date.toLocaleDateString();
}
function Avatar({ user }) {
  return (
    <>
      {/* <img className="Avatar" src={user.avatarUrl} alt={user.name} /> */}
      <img className="Avatar" {...user} />
    </>
  );
}
function UserInfo({ author }) {
  return (
    <>
      <div className="UserInfo">
        <Avatar user={author} />
        <div className="UserInfo-name">{author.name}</div>
      </div>
    </>
  );
}
function Comment({ date, text, author }) {
  return (
    <div className="Comment">
      {/* <div className="UserInfo">
        <Avatar author={author} />
        <div className="UserInfo-name">{author.name}</div>
      </div> */}
      <UserInfo author={author} />
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{formatDate(date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

export default function Extraction() {
  return <Comment {...comment} />;
}

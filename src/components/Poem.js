import React from "react";

function Poem({poem}) {
  return (
    <div>
      <h3>Title {poem.title}</h3>
      <p>{poem.content}</p>
      <p>
        <strong>- By Author {poem.author}</strong>
      </p>
      <button>Mark as read</button>
    </div>
  );
}

export default Poem;

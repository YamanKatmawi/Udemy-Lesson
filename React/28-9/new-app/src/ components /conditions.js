import React from "react";

function List(props) {
  let age = 21;
  return (
    <div>
      {age > 12 ? (
        <div>You are older than 12.</div>
      ) : (
        <div>you are smaller than 12</div>
      )}
      {age > 20 ? <div>you are older than 20.</div> : null}
    </div>
  );
}

export default List;

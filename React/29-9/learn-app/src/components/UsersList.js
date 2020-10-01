import React from "react";
function UsersList(props) {
  const users = props.users;
  return (
    <ul>
      {users.map((
        user,
        index //we used index for the number automatic
      ) => (
        <li key={user.id}>
          {index}-{user.name}
        </li>
      ))}
    </ul>
  );
}

export default UsersList;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    navigate(`/users/${id}`);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a
              href={`/users/${user.id}`}
              onClick={(e) => handleClick(e, user.id)}
            >
              {user.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

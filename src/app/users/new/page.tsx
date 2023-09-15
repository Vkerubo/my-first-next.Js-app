import React from "react";

interface User {
  id: string;
  username: string;
  email: string;
}

const New = async() => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {next: {revalidate:10}});
  const Users: User[] = await res.json();

  return (
    <>
    <h1>New users</h1>
    <ul>
      {Users.map((user => <li key={user.id}>{user.username}: {user.email}</li>))}
    </ul>
    </>
  );
};

export default New;

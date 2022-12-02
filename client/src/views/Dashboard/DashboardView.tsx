import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser } from "../../api/deleteUser";
import { getUsers, TUser } from "../../api/getUsers";

type DashboardProps = {};

const DashboardView: React.FC<DashboardProps> = () => {
  const [users, setUsers] = useState<TUser[]>([]);

  async function handleDeleteUser(user: TUser) {
    await deleteUser(user);
    setUsers(users.filter((u) => u._id !== user._id)); // Optimistic update, more performance
  }

  useEffect(() => {
    async function fetchUsers() {
      const newUsers = await getUsers();
      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      {users?.map((user) => (
        <li key={user._id}>
          <Link to={`/profile/${user._id}`}>{user.email}</Link>
          <button onClick={() => handleDeleteUser(user)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default DashboardView;
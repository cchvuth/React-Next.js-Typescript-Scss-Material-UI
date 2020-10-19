import Link from "next/link";

import { User } from "../../interfaces/User";
import AppLayout from "../../layouts/AppLayout";
import GitHubUserList from "../../components/GitHubUserList";
import { GitHubUserService } from "../../services/github-user.service";
import localForage from "localforage"; // An indexedDB wrapper to simplify usage
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    // Cache the list in IndexedDB
    localForage.getItem("users", (_, stored: any) => {
      if (stored) {
        return setUsers(stored);
      }

      GitHubUserService.getUsers().then((res) => {
        setUsers(res.data);
        localForage.setItem("users", res.data);
      });
    });
  }, []); // Add [] to run once

  return (
    <AppLayout title="Users List">
      <div className="mg-20">
        <h1>GitHub Users List</h1>
        {users && <GitHubUserList users={users} />}
        <p className="mg-20">
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
      </div>
    </AppLayout>
  );
};

export default Users;

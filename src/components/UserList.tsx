import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { UserRepositories } from "./UserRepositories";
import { useState } from "react";

type UserListProps = {
  users: {
    login: string;
  }[];
};
export const UserList = ({ users }: UserListProps) => {
  const [repos, setRepos] = useState([]);
  const onClick = async (username: string) => {
    const query = await fetch(`https://api.github.com/users/${username}/repos`);
    const res = await query.json();
    const repos = res.map((r: any) => {
      return {
        name: r.name,
        description: r.description,
        stargazers_count: r.stargazers_count,
      };
    });

    console.log(repos);
  };
  return (
    <>
      <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200">
        {users.map((user) => (
          <li
            key={`user-${user.login}}`}
            className="w-full px-4 py-2 border-b border-gray-200"
          >
            <div className="flex flex-row justify-between ">
              <span>{user.login}</span>{" "}
              <button onClick={(e: any) => onClick(user.login)}>
                <ChevronDownIcon className="h-6 w-6 text-gray-900" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <UserRepositories repos={repos} />
    </>
  );
};

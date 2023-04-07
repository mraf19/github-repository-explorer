import { useState } from "react";
import { UserList } from "./UserList";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { UserRepositories } from "./UserRepositories";

type ContainerListProps = {
  users: {
    login: string;
  }[];
  query: string;
};
export const ContainerList = ({ users, query }: ContainerListProps) => {
  const [show, setShow] = useState(false);
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
  };
  return (
    <div className="w-full mt-[20px] text-left text-zinc-400 flex flex-col space-y-3">
      <h4 className="text-bold text-xl">Showing user for "{query}"</h4>
      <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200">
        {users.map((user, index: number) => (
          <UserList key={`user-${index}`} name={user.login} />
        ))}
      </ul>
    </div>
  );
};

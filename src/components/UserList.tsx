import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { UserRepositories } from "./UserRepositories";
import { useState, useEffect } from "react";

type UserListProps = {
  name: string;
};
export const UserList = ({ name }: UserListProps) => {
  const [repos, setRepos] = useState([]);
  const [show, setShow] = useState(false);

  const onClick = async (name: string) => {
    const response = await fetch(`https://api.github.com/users/${name}/repos`);
    const res = await response.json();
    const repos = res.map((repo: any) => {
      return {
        name: repo.name,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
      };
    });
    setRepos(repos);
    setShow(!show);
  };

  useEffect(() => {
    setShow(false);
  }, [name]);

  return (
    <>
      <li className="w-full px-4 py-2 border-b border-gray-200">
        <div className="flex flex-col justify-between ">
          <div className="flex flex-row justify-between ">
            <span>{name}</span>{" "}
            <button onClick={() => onClick(name)}>
              <ChevronDownIcon className="w-[30px] h-[30px]" />
            </button>
          </div>
          {show && <UserRepositories repos={repos} />}
        </div>
      </li>
    </>
  );
};

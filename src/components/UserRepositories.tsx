import { StarIcon } from "@heroicons/react/24/solid";

type UserRepositoriesProps = {
  repos: {
    name: string;
    description: string;
    stargazers_count: number;
  }[];
};
export const UserRepositories = ({ repos }: UserRepositoriesProps) => {
  return (
    <ul className=" w-[95%] bg-gray-300 text-gray-900 font-bold p-[8px] self-end flex justify-between ">
      {repos.map((repo) => (
        <>
          <li>
            <h4>{repo.name}</h4>
            <p className="text-gray-500 text-base">{repo.description}</p>
          </li>
          <li className="inline-flex">
            {repo.stargazers_count}{" "}
            <span>
              <StarIcon className="w-[24px]" />
            </span>
          </li>
        </>
      ))}
    </ul>
  );
};

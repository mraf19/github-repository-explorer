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
    <div
      className={` w-[95%] bg-slate-300 text-gray-900 font-bold p-[8px] self-end`}
    >
      {repos.length > 0
        ? repos.map((repo, index) => {
            return (
              <div
                key={`repo-${repo.name}-${index}`}
                className="flex flex-nowrap justify-between mb-8 gap-8 border-b-[1px] border-gray-900"
              >
                <div className="flex-1 overflow-x-scroll scrollbar-hide cursor-all-scroll">
                  <h4>{repo.name}</h4>
                  <p className="text-gray-500 text-base">{repo.description}</p>
                </div>
                <div className="inline-flex flex-none mb-2">
                  {repo.stargazers_count}{" "}
                  <span>
                    <StarIcon className="w-[24px]" />
                  </span>
                </div>
              </div>
            );
          })
        : "Repository is empty"}
    </div>
  );
};

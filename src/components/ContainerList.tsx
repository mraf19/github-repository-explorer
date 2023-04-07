import { UserList } from "./UserList";

type ContainerListProps = {
  users: {
    login: string;
  }[];
  query: string;
};
export const ContainerList = ({ users, query }: ContainerListProps) => {
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

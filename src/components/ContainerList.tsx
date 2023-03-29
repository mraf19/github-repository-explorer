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
      <h4>Showing user for {query}</h4>
      <UserList users={users} />
    </div>
  );
};

import { UserList } from "./UserList";

type ContainerListProps = {
  users: {
    login: string;
  }[];
};
export const ContainerList = ({ users }: ContainerListProps) => {
  return (
    <div className="w-full mt-[20px] text-left text-zinc-400 flex flex-col space-y-3">
      <h4>Showing user for "Example"</h4>
      <UserList users={users} />
    </div>
  );
};

import { useState } from "react";
import { Button } from "./components/Button";
import { ContainerList } from "./components/ContainerList";
import { Form } from "./components/Form";

function App() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const onClick = async () => {
    const user = await fetch(
      `https://api.github.com/search/users?q=${query}&per_page=5`
    );
    const response = await user.json();
    setUsers(response.items);
  };
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };
  return (
    <>
      <main className="flex flex-col items-center w-[90%] mx-auto mt-[30px]">
        <Form value={query} onChange={onChange} />
        <Button onClick={onClick} />
        <ContainerList users={users} />
      </main>
    </>
  );
}

export default App;

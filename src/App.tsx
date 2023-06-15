import { useState } from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { fetchAccount } from "./feature/AccountSlice";
import { UserList } from "./components/UserList";

function App() {
  const [value, setValue] = useState("");
  const [displayName, setDisplayName] = useState("");
  const account = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  const onClickAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisplayName(value);
    dispatch(fetchAccount(value));
  };
  return (
    <>
      <main className="flex flex-col items-center w-[90%] lg:w-[80%] mx-auto mt-[30px] lg:mt-[100px]">
        <h1 className="text-7xl font-bold mb-10">Github Repository Explorer</h1>
        <input
          className="border border-slate-900 p-[8px] w-full rounded-md text-gray-900 font-medium placeholder:text-sm"
          placeholder="Enter username"
          type="text"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <button
          className="w-full mt-4 p-2 bg-sky-500 text-white rounded-xl"
          onClick={onClickAction}
        >
          Search
        </button>
        <div className="w-full mt-[20px] text-left text-zinc-400 flex flex-col space-y-3">
          {account.account && (
            <>
              {displayName && (
                <h4 className="text-bold text-xl">
                  Showing user for "{displayName}"
                </h4>
              )}
              <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200">
                {account.loading === false && account.account.length !== 0 ? (
                  account.account.map((user, index: number) => (
                    <UserList key={`user-${index}`} name={user} />
                  ))
                ) : account.loading === false && account.error.length !== 0 ? (
                  <p className="text-red-700 text-2xl font-bold italic">
                    {account.error}
                  </p>
                ) : account.loading === true && displayName.length !== 0 ? (
                  <p className="text-2xl font-bold italic">Loading....</p>
                ) : null}
              </ul>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;

import { useState } from "react";
import Todo from "../todo/todo";
import { clientState } from "../../state/clientState";

interface ClientProps {}

const Client: React.FC<ClientProps> = () => {
  const [client, setClient] = useState<string[]>([...clientState]);
  const [spacialClient, setSpacialClient] = useState<string | boolean>(false);

  function getClass(spec: string): string {
    return `${spec} font-[Josefin_Sans] mt-4 p-4 rounded hover:cursor-pointer hover:shadow-2xl hover:transition-all delay-200`;
  }

  function setNewClient(): void {
    const nameClient: string | null = prompt("Please enter your name");

    if (nameClient !== null && nameClient !== "") {
      setClient([...client, nameClient]);
      setSpacialClient(nameClient);
    } else {
      alert("You have to enter a name");
    }
  }

  function getClientTodo(e: string): void {
    setSpacialClient(e);
  }

  const Iterate: JSX.Element[] = client.map((e: string) => {
    return (
      <div
        onClick={() => getClientTodo(e)}
        className={getClass("bg-zinc-200")}
        key={e}
      >
        {e}
      </div>
    );
  });

  return (
    <div className={"flex flex-row justify-center gap-40 items-center"}>
      <div className={"w-1/5  p-4 rounded text-2xl"}>
        {Iterate}
        <br />
        <div className={getClass("bg-green-500")}>
          <div
            onClick={() => setNewClient()}
            className={"flex items-center gap-2"}
          >
            <img
              src="./asstes/img/plus.png"
              className={"inline"}
              width={"30"}
              alt="plus"
            />
            <span className={"font-[Josefin_Sans] "}>Add Client</span>
          </div>
        </div>
      </div>
      <div>
        <Todo client={spacialClient as string} />
      </div>
    </div>
  );
};

export default Client;

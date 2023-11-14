import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux modules/app.hooks";
import {
  addTask,
  removeTask,
  doneTask,
  editTask,
  anotherClient,
} from "../../redux modules/counterSlice";

interface TodoProps {
  client: string;
}

function Todo({ client }: TodoProps) {
  const [getTask, setGetTask] = useState<string>("");
  const todoSele = useAppSelector((state: any) => state.todo);
  const dispatch = useAppDispatch()

  function getDone(e: any): boolean {
    if (e.isDone) return true;
    if (!e.isDone) return false;
  }

  useEffect(() => {
    dispatch(anotherClient());
  }, [client]);

  const ItrateBetweenState = todoSele.map((e: any) => {
    function getChackBox(e: any): boolean {
      if (e.isDone) return true;
      if (!e.isDone) return false;
    }

    return (
      <div
        key={e.id}
        className={
          "my-4  mx-auto rounded bg-purple-100 flex items-center justify-stretch text-lg w-[750px] shadow-lg"
        }
      >
        <div className="flex flex-row gap-2 p-2">
          <div className={"m-2"}>{e.id}</div>
          <div className={"m-2 font-[Roboto] text-lg"}>
            <input type="checkbox" checked={getChackBox(e)} id="" /> {e.task}
          </div>
        </div>
        <div className="flex gap-10 ">
          <button
            disabled={getDone(e)}
            className={
              "bg-blue-300 font-[Roboto] text-lg p-1 rounded hover:bg-blue-600"
            }
            onClick={() => {
              dispatch(doneTask({ id: e.id }));
              getChackBox(e.id);
            }}
          >
            Done
          </button>
          <button
            className={
              "bg-amber-300 font-[Roboto] text-lg px-2 rounded hover:bg-amber-600"
            }
            onClick={() => {
              dispatch(editTask({ id: e.id }));
            }}
          >
            Edit
          </button>
          <button
            className={
              "bg-red-300 font-[Roboto] text-lg px-2 rounded hover:bg-red-600 "
            }
            onClick={() => {
              dispatch(removeTask({ id: e.id }));
            }}
          >
            Delete
          </button>
        </div>
        <span className={"font-[Roboto] ml-16"}>{e.time}</span>
      </div>
    );
  });

  return (
    <div
      className={
        "bg-purple-500 p-9 shadow-2xl shadow-stone-400 rounded my-16 mx-auto transition-all ease-in-out duration-300 hover:shadow-stone-100"
      }
    >
      <h2 className={"text-white text-2xl font-[Roboto]"}>
        {client ? client : "Default Client"}
      </h2>
      {ItrateBetweenState}
      <div className="mt-8 flex items-center gap-10 justify-evenly">
        <div>
          <input
            type="text"
            id="task"
            placeholder={"Go to cinema"}
            value={getTask}
            className={"text-xl p-2 rounded font-[Roboto]"}
            onChange={(e) => {
              setGetTask((pre) => (pre = e.target.value));
            }}
          />
        </div>
        <div>
          <button
            className={
              "w-20 text-xl bg-gray-800 font-[Roboto] p-2 rounded text-white shadow-white shadow-lg hover:shadow-none"
            }
            onClick={() =>
              dispatch(addTask({ id: todoSele.length, task: getTask }))
            }
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;

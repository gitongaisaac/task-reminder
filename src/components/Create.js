import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const Create = () => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");
  const { isPending } = useFetch;

  const addTask = (e) => {
    const url = "http://localhost:8000/tasks";
    e.preventDefault();

    const tasks = { task, time, details };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tasks),
    }).then((res) => {
      if (res.ok) {
        setTask("");
        setTime("");
        setDetails("");
        window.location.reload();
      }
    });
  };

  return (
    <div className="create hide">
      {isPending && <Loading />}
      <form className="form" onSubmit={addTask}>
        <div className="form-control">
          <label>Task:</label>
          <input
            type="text"
            id="title"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            required
          />
        </div>

        <div className="form-control">
          <label>Time:</label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            required
          />
        </div>

        <div className="form-control">
          <label>Details:</label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          ></textarea>
        </div>

        <button className="btn btn-add">Add Task</button>
      </form>
    </div>
  );
};

export default Create;

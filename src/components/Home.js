import { useState } from "react";

import TaskList from "./TaskList";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";
import Create from "./Create";

const Home = () => {
  const url = "http://localhost:8000/tasks";
  const { data: tasks, error, isPending } = useFetch(url);
  const [deleteError, setDeleteError] = useState();

  const deleteTask = (id) => {
    fetch(url + "/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          window.location.reload();
        } else {
          throw Error("Could not delete your task at this time :)");
        }
      })
      .catch((err) => {
        setDeleteError(err.message);
      });
  };

  return (
    <div className="home">
      <Create />
      {deleteError && (
        <div className="error">
          <p>{deleteError}</p>
        </div>
      )}
      {error && (
        <div className="error">
          <h3>404:</h3>
          <p>{error}</p>
        </div>
      )}
      {isPending && <Loading />}
      {tasks && <TaskList tasks={tasks} deleteTask={deleteTask} />}
    </div>
  );
};

export default Home;

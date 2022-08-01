import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const Details = () => {
  const { id } = useParams();
  const url = "http://localhost:8000/tasks/" + id;
  const { data: task, isPending, error } = useFetch(url);

  return (
    <div className="details">
      {error && <p>{error}</p>}
      {isPending && <Loading />}
      {task && <h3 className="task">{task.task}</h3>}
      {task && <p className="time">{task.time}</p>}
      {task && <p className="task-detail">{task.details}</p>}
    </div>
  );
};

export default Details;

import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="tasklist">
      {tasks.map((task) => (
        <div className="task-list" key={task.id}>
          <div>
            <Link to={"/details/" + task.id}>
              <h3 className="task">{task.task}</h3>
              <p className="time">{task.time}</p>
            </Link>
          </div>
          <h4>
            <FaTimes
              className="close"
              onClick={() => {
                deleteTask(task.id);
              }}
            />
          </h4>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

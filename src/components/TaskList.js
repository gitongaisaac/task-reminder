const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="tasklist">
      {tasks.map((task) => (
        <div className="task-list" key={task.id}>
          <div>
            <h3 className="task">{task.task}</h3>
            <p className="time">{task.time}</p>
          </div>
          <h4
            className="close"
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            X
          </h4>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

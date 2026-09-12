import TaskItem from "./TaskItem"

function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <ul className="tasks">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList

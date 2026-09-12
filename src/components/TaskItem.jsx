import { useState } from "react"

function TaskItem({ task, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(task.text)

  function handleEditClick() {
    setIsEditing(true)
  }

  function handleSaveClick() {
    onEdit(task.id, text)
    setIsEditing(false)
  }

  function handleDeleteClick() {
    onDelete(task)
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            className="name-edit"
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            autoFocus
          />
          <button className="save-button" onClick={handleSaveClick}>
            Save
          </button>
        </>
      ) : (
        <>
          <p>{task.text}</p>

          <div className="icons">
            <i
              className="fa-solid fa-pen-to-square edit-icon"
              onClick={handleEditClick}
            ></i>
            <i
              className="fa-solid fa-trash delete-icon"
              onClick={handleDeleteClick}
            ></i>
          </div>
        </>
      )}
    </li>
  )
}

export default TaskItem

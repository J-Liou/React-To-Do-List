import { useState } from "react"

function TaskInput({ onAdd }) {
  const [text, setText] = useState("")

  function handleAdd(e) {
    e.preventDefault()
    if (!text.trim()) {
      alert("Please enter a task.")
      return
    }
    onAdd(text)
    setText("")
  }

  return (
    <form className="task-input" onSubmit={handleAdd}>
      <input
        id="add-task"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button id="add-button" type="submit">
        Add
      </button>
    </form>
  )
}

export default TaskInput

import { useEffect, useRef, useState } from "react"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import Modal from "./components/Modal"
import ResetButton from "./components/ResetButton"
import "./index.css"

function App() {
const [tasks, setTasks] = useState(() => {
  try {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  } catch (error) {
    console.error("Failed to parse tasks from localStorage:", error)
    return []
  }
})

  const [taskToDelete, setTaskToDelete] = useState(null)
  const dialogRef = useRef(null)

  // loadData()
  // Load tasks on first render
  // Load tasks on first render



    // Save tasks whenever they change
  useEffect(() => {
    console.log("SAVING TO LOCALSTORAGE:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);




  function addTask(text) {
    const newTask = {
      id: crypto.randomUUID(),
      text,
    }
    setTasks(prev => [...prev, newTask])
  }


  function editTask(id, newText) {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, text: newText } : t))
    )
  }

  function openDeleteModal(task) {
    setTaskToDelete(task)
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }

  function confirmDelete() {
    if (!taskToDelete) return
    setTasks(prev => prev.filter(t => t.id !== taskToDelete.id))
    setTaskToDelete(null)
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }

  function cancelDelete() {
    setTaskToDelete(null)
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }

  function resetAll() {
    setTasks([])
  }


  return (
    <div className="container">
      <h1>To Do List</h1>

      <TaskInput onAdd={addTask} />

      <h2>Tasks:</h2>

      <div id="tasks">
        <TaskList
          tasks={tasks}
          onEdit={editTask}
          onDelete={openDeleteModal}
        />
      </div>

      <ResetButton onReset={resetAll} />

      <Modal ref={dialogRef} onConfirm={confirmDelete} onCancel={cancelDelete} />
    </div>
  )
}

export default App

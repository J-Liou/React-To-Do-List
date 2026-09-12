import { forwardRef } from "react"

const Modal = forwardRef(function Modal({ onConfirm, onCancel }, ref) {
  return (
    <dialog id="delete-popup" ref={ref}>
      <div className="popup">
        <p>Are you sure you want to delete this?</p>
        <div className="buttons">
          <button className="no-confirm" onClick={onCancel}>
            Cancel
          </button>
          <button className="confirm" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </dialog>
  )
})

export default Modal

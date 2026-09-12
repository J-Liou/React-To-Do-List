function ResetButton({ onReset }) {
  return (
    <div className="reset-button">
      <button id="reset" onClick={onReset}>
        Reset
      </button>
    </div>
  )
}

export default ResetButton

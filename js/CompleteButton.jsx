function CompleteButton () {
  const handleClear = this.createEventHandler()

  handleClear.subscribe(TodoActions.clearCompleted)

  return <button className="clear-completed" onClick={handleClear}>Clear completed</button>
}

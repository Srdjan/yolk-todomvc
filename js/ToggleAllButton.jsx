function ToggleAllButton () {
  const handleChange = this.createEventHandler(null, true)
  const checked = handleChange.scan(acc => !acc, true)

  checked.subscribe(TodoActions.toggleAll)

  return <input className="toggle-all" type="checkbox" onChange={handleChange} checked={checked} />
}

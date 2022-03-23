fetch('http://localhost:8000/api/schedules')
  .then(result => {
    return result.json()
  })
  .then(result => {})
  .catch(err => {
    console.error(err)
    return err
  })

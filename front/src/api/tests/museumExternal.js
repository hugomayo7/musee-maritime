function getNextDayOfTheWeek (
  dayName,
  excludeToday = false,
  refDate = new Date()
) {
  const dayOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].indexOf(
    dayName.slice(0, 3).toLowerCase()
  )
  if (dayOfWeek < 0) return
  refDate.setHours(0, 0, 0, 0)
  refDate.setDate(
    refDate.getDate() +
      +!!excludeToday +
      ((dayOfWeek + 7 - refDate.getDay() - +!!excludeToday) % 7)
  )
  return refDate
}

fetch('http://localhost:8000/api/schedules')
  .then(result => {
    return result.json()
  })
  .then(result => {
    let museumOpen = false
    let currentDate = new Date()
    let responseRows = result['hydra:member']
    responseRows.forEach(element => {
      let opening = new Date()
      getNextDayOfTheWeek(element['day'].slice(0, 3), false, opening)
      opening.setHours(element['opening'].slice(0, 2))
      opening.setMinutes(element['opening'].slice(3, 5))

      let closing = new Date()
      getNextDayOfTheWeek(element['day'].slice(0, 3), false, closing)
      closing.setHours(element['closing'].slice(0, 2))
      closing.setMinutes(element['closing'].slice(3, 5))

      if (
        currentDate.getTime() <= closing.getTime() &&
        currentDate.getTime() >= opening.getTime()
      )
        museumOpen = true
    })
    return {
      museum: {
        open: museumOpen
      }
    }
  })
  .catch(err => {
    console.error(err)
    return err
  })

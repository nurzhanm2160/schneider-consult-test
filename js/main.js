window.addEventListener('load', () => {
  let date = new Date()
  let nearMonday = new Date(setNearMonday(date.getDay(), date))

  let dateInHTML = document.getElementById('date')
  dateInHTML.innerText = formatDate(nearMonday)
})

const setNearMonday = (day, date) => {
  switch (day) {
    case 1:
      return date
    case 2:
      return date.setDate(date.getDate() + 6)
    case 3:
      return date.setDate(date.getDate() + 5)
    case 4:
      return date.setDate(date.getDate() + 4)
    case 5:
      return date.setDate(date.getDate() + 3)
    case 6:
      return date.setDate(date.getDate() + 2)
    case 7:
      return date.setDate(date.getDate() + 1)
  }
}

const formatDate = (date) => {

  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}


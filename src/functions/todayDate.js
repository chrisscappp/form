const workToday = new Date()
const yyyy = workToday.getFullYear()
let mm = workToday.getMonth() + 1
let dd = workToday.getDate()

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

export const today = dd + '/' + mm + '/' + yyyy;
const formatFrenchDateForm = "DD/MM/YYYY"
module.exports.formatFrenchDateForm = formatFrenchDateForm;

module.exports.isValidDate = (isoDateString) => {
  if (!isoDateString || isoDateString.length === 0) {
    return false
  }
  return !isNaN(new Date(Date.parse(isoDateString)))
}

module.exports.getDateNowPG = () => {
  return new Date().toISOString();
}

/**
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */
const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'long', year: 'numeric',
  month: 'long', day: 'numeric',
})

const shortDateFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})

module.exports.formatFrenchDate = date => dateFormatter.format(date)

/**
 * used to display date in editPatient
 */
module.exports.toFormatDDMMYYYY = (date) => {
  if( date ) {
    return shortDateFormatter.format(date);
  } else {
    return null;
  }
}

function parseDateForm(date) {
  if(date) {
    const parsedDate = date.split("/")
    // year - month - day
    return new Date(`${parsedDate[2]}-${parsedDate[1]}-${parsedDate[0]}`)
  } else {
    return null;
  }
}
module.exports.parseDateForm = parseDateForm;

module.exports.parseDate = (date) => {
  return new Date(date).toISOString();
}

module.exports.getDatePlusOneHour = () => {
  const expirationDate = new Date()
  return new Date(expirationDate.setHours(expirationDate.getHours() + 1)).toISOString();
}

module.exports.getFrenchMonthName = (monthNumber) => {
  switch(monthNumber) {
  case 1:
    return 'janvier';
  case 2:
    return 'février';
  case 3:
    return 'mars';
  case 4:
    return 'avril';
  case 5:
    return 'mai';
  case 6:
    return 'juin';
  case 7:
    return 'juillet';
  case 8:
    return 'août';
  case 9:
    return 'septembre';
  case 10:
    return 'octobre';
  case 11:
    return 'novembre';
  case 12:
    return 'décembre';
  default:
    console.error("invalid month", monthNumber);
    return 'Erreur';
  }
}

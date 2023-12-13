const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

export function formatDate(date: string) {
  const d = new Date(date);
  return `${monthNames[d.getMonth()]} ${padTo2Digits(d.getDate())}, ${d.getFullYear()}`;
}

export function formatTimestamp(date: string) {
  const d = new Date(+date);
  return `${padTo2Digits(d.getDate())}/${padTo2Digits(d.getMonth() + 1)}/${d.getFullYear()}`;
}

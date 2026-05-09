export function formatDate(date, formatStr = 'YYYY-MM-DD') {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''

  const pad = (n) => String(n).padStart(2, '0')

  const tokens = {
    YYYY: d.getFullYear(),
    MM: pad(d.getMonth() + 1),
    DD: pad(d.getDate()),
    HH: pad(d.getHours()),
    mm: pad(d.getMinutes()),
    ss: pad(d.getSeconds())
  }

  let result = formatStr
  for (const [token, value] of Object.entries(tokens)) {
    result = result.replace(token, value)
  }
  return result
}

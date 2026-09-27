// Opens Gmail's compose window (in a new tab) addressed to the given email.
export function composeMailUrl(to) {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to })
  return `https://mail.google.com/mail/?${params}`
}

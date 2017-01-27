export const fetchMessages = () => {
  return fetch('https://skool-microblog.herokuapp.com/messages')
    .then(response => response.json())
}

export const postMessage = (body) => {
  return fetch('https://skool-microblog.herokuapp.com/messages', {
    method: 'POST',
    body: JSON.stringify(body)
  })
}

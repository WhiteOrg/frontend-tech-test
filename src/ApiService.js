
export function fetchData () {
  const url = 'https://run.mocky.io/v3/e60fb51f-02b1-4ede-bd82-6c0481b5edda/';
  return fetch(url, {})
    // the responses under 400 are fine but over 400 are errors so the promise needs to be rejected
    .then(res => res.status >= 400 ? Promise.reject() : res)
    // 204 means no content to send so sending JSON will make it hang indefinitely
    .then(res => res.status !== 204 ? res.json() : res)
    // catch the rejected promise
    .catch(err => console.error('Error while fetching', err));
}
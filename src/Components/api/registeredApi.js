export const myRegisteredPromise = email => {
    return fetch(`http://localhost:3000/registered?applicant=${email}`)
    .then(res=> res.json())
}
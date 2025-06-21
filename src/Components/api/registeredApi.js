export const myRegisteredPromise = email => {
    return fetch(`https://marathon-spinner-server.vercel.app/registered?applicant=${email}`)
    .then(res=> res.json())
}
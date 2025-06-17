export const myRegisteredPromise = email => {
    return fetch(`https://marathon-spinner-server-g5biatqim-obydullah001s-projects.vercel.app/registered?applicant=${email}`)
    .then(res=> res.json())
}
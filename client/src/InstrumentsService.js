const baseURL = 'http://localhost:5000/api/instruments/'

export const getInstruments = () => {
    return fetch(baseURL)
        .then(res => res.json())
}
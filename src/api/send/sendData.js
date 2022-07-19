const axios = require('axios')

export const sendData = async (data) => {
    await axios.post(`http://localhost:3000/users`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .catch((err) => {
            console.error("Всё...", err)
        })
}
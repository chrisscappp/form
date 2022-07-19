const axios = require('axios')

export const getData = async () => {
    return await new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/users`)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
                console.log("Всё нах...")
            })
    })
}                                                                         
const axios = require('axios')

export const deleteData = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
}
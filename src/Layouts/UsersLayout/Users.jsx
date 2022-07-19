import React from 'react'
import { User } from '../../Components/User/User'
import { Spinner } from '../../Components/Spinner/Spinner'
import { Error } from '../../Components/Error/Error'
import { useNavigate } from 'react-router-dom'

const Users = ({usersArr, setUsersArr, isLoading, isError}) => {

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const [inputValue, setInputValue] = React.useState("")

    const filteredUsers = usersArr?.filter(user => {
        return user.name.toLowerCase().includes(inputValue.toLowerCase())
    })

    return (
        <div>
            <div className = "input-group mb-3 findUser-input">
                <span onClick = {goBack}>
                    <div className = "arrow-left__wrapper">
                        <div className = "arrow-left"></div>
                    </div>
                </span>
                <div className = "findUser-input__container">
                    <div className = "input-group-prepend">
                        <span className = "input-group-text" id="inputGroup-sizing-default">Поиск</span>
                    </div>
                    <input 
                        type="text" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Имя пользователя..."
                        onChange = {(event) => setInputValue(event.target.value)}
                    >
                    </input>
                </div>
            </div>
            {
                isLoading
            ?
                <Spinner/>
            :
                isError 
            ?
                <Error/>
            :
                usersArr.length === 0 
            ?
                <h3>Пользователей в списке нет</h3>
            :
                <div className = "usersLayout-container">
                    <div className = "users-container">
                    {filteredUsers?.map((item, index) => {
                        return (
                            <User
                                key = {index + 123}
                                item = {item}
                                index = {index}
                                usersArr = {usersArr}
                                setUsersArr = {setUsersArr}
                            />
                        )
                    })}
                    </div>
                </div>
            }
            {
                filteredUsers.length === 0
            ?
                <h4>Совпадений не найдено</h4>
            :
                null
            }
        </div>
    )
}

export default Users 
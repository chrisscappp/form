import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../HomeLayout/Home'
import Users from '../UsersLayout/Users'
import Reg from '../RegLayout/Reg'
import ErrorPage from '../ErrorPage/ErrorPage'
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from '../../Redux/Actions/getUsersAction'

const AppLayout = () => {

    const dispatch = useDispatch()
    const [usersArr, setUsersArr] = React.useState([])
    const {users, isLoading, isError} = useSelector((({usersReducer}) => usersReducer))

    React.useEffect(() => {
        dispatch(getUsers())
    }, [])

    React.useEffect(() => {
        setUsersArr(users)
    }, [users])

    

    return (
        <>
            {
                users 
            ? 
                <Routes>
                    <Route path = "/" element = { <Home /> } />
                    <Route path = "users" element = {
                    <Users 
                        usersArr = {usersArr}
                        setUsersArr = {setUsersArr}
                        isLoading = {isLoading}
                        isError = {isError}
                    />
                    } 
                    />
                    <Route path = "form" element = { <Reg 
                        usersArr = {usersArr}
                        setUsersArr = {setUsersArr} 
                    /> } />
                    <Route path = "*" element = { <ErrorPage /> }/>
                </Routes>
            :
                <h3>Что-то пошло не так...</h3>
            }
        </>
    )
}

export default AppLayout 
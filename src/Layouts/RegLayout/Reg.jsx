import React from 'react'
import { Form } from '../../Components/Form/Form'
import { useNavigate } from 'react-router-dom'

const Reg = ({usersArr, setUsersArr}) => {

    return (
        <div className = "reg-layout">
            <Form
                usersArr = {usersArr}
                setUsersArr = {setUsersArr}
            />
        </div>
    )
}

export default Reg 
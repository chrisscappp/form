import React from 'react'
import { Modal } from '../Modal/Modal'
import { deleteData } from '../../api/delete/deleteData'

export const User = ({item, index, usersArr, setUsersArr}) => {

    const [viewModal, setViewModal] = React.useState(false)

    const removeUser = (id) => {
        setUsersArr(usersArr.filter(user => user.id !== id))
        deleteData(id)
    }

    return (
        <>
            <div className = "users-items__container">
                <div className = "users-items__container-text-container">
                    <p className = "users-items__container-text">
                        {index + 1}. {item.name}
                    </p>
                </div>
                <button 
                    className = "users-items__container-info-button" 
                    onClick = {() => setViewModal(!viewModal)}
                >
                    Вся инфа
                </button>
                <button 
                    className = "users-items__container-delete-button" 
                    onClick = {(id) => removeUser(item.id)}
                >
                </button>
            </div>
            {
                viewModal 
            ?
                <Modal 
                    viewModal = {viewModal}
                    setViewModal = {setViewModal}
                    userInfo = {item}
                />
            :
                null
            }
        </>
    )
}
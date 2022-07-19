import React from 'react'
import { today } from '../../functions/todayDate'

export const Modal = ({viewModal, setViewModal, userInfo}) => {

    console.log(userInfo);

    const surname = userInfo.name.split(' ')[0]
    const name = userInfo.name.split(' ')[1]
    const patronymic = userInfo.name.split(' ')[2]

    let str = String(userInfo.date)
    let calculatedAge = 0

    if ((Number(str.substr(0, 2)) - Number(today.substr(0, 2)) >= 0) && (Number(str.substr(3, 2)) - Number(today.substr(3, 2)) >= 0)) {
        calculatedAge = 2022 - Number(str.slice(6)) - 1
    } else {
        calculatedAge = 2022 - Number(str.slice(6))
    } // Вычитание дня рождения из текущего дня, 
        // Вычитание месяца рождения из текущего месяца

    return (
        <>
            <div className = "modal-wrapper">
                <div className = "modal-container">
                <button type="button" className="closeModal" aria-label="Close" onClick = {() => setViewModal(!viewModal)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                    <div>
                        <h3>Полная информация:</h3>
                    </div>
                    <div className = "modal-container__items">
                        <p>ID:   {userInfo.id}</p>
                        <p>Фамилия:   {surname}</p>
                        <p>Имя:   {name}</p>
                        <p>Отчество:   {patronymic}</p>
                        <p>Дата рождения:   {userInfo.date}</p>
                        <p>Возраст:   {calculatedAge}</p>
                        <p>Пол:   {userInfo.gender}</p>
                        <p>Место жительства:   {userInfo.livePlace}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
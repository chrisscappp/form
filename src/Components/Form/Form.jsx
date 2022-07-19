import React from 'react'
import { FormNext } from '../FormNext/FormNext'
import { useNavigate } from 'react-router-dom'
import { sendData } from '../../api/send/sendData'

export const Form = ({usersArr, setUsersArr}) => {

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const [surname, setSurname] = React.useState('')
    const [name, setName] = React.useState('')
    const [patronymic, setPatronymic] = React.useState('')
    const [dateBirthday, setDateBirthday] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [livePlace, setLivePlace] = React.useState('')

    const [surnameDirty, setSurnameDirty] = React.useState(false)
    const [nameDirty, setNameDirty] = React.useState(false)
    const [patronymicDirty, setPatronymicDirty] = React.useState(false)

    const [surnameError, setSurnameError] = React.useState("Фамилия не может быть пустым")
    const [nameError, setNameError] = React.useState("Имя не может быть пустым")
    const [patronymicError, setPatronymicError] = React.useState("Отчество не может быть пустым")

    const [formValid, setFormValid] = React.useState(false)

    const [styleForForm, setStyleForForm] = React.useState({
        display: null
    })

    const [styleForNextForm, setStyleForNextForm] = React.useState({
        display: null
    })

    React.useEffect(() => {
        if (surnameError || nameError || patronymicError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [surnameError, nameError, patronymicError])

    const blurHandler = (event) => {
        switch (event.target.name) {
            case "surname" :
                setSurnameDirty(true)
                break
            case "name" :
                setNameDirty(true)
                break
            case "patronymic" :
                setPatronymicDirty(true)
                break
        }
    }

    const surnameHandler = (title) => {
        setSurname(title)
        if (title) {
            setSurnameError("")
        } else {
            setSurnameError("Фамилия не может быть пустым")
        }
    }

    const nameHandler = (title) => {
        setName(title)
        if (title) {
            setNameError("")
        } else {
            setNameError("Имя не может быть пустым")
        }
    }

    const patronymicHandler = (title) => {
        setPatronymic(title)
        if (title) {
            setPatronymicError("")
        } else {
            setPatronymicError("Отчество не может быть пустым")
        }
    }

    const goOnward = (event) => {
        event.preventDefault()
        setStyleForForm({
            display: "none"
        })
        setStyleForNextForm({
            display: null
        })
    }

    const regUser = (event) => {
        event.preventDefault()
        let data = {
            name: surname + " " + name + " " + patronymic,
            date: dateBirthday,
            gender: gender,
            livePlace: livePlace
        }
        setUsersArr([...usersArr, data])
        sendData(data)
        alert("Пользователь успешно зарегестрирован!")
        navigate("/")
    }


    return (
        <>
            <div className = "reg-form__wrapper" style = {styleForForm}>
            <span onClick = {goBack}>
                <div className = "arrow-left__wrapper">
                    <div className = "arrow-left"></div>
                </div>
            </span>
            <form className = "reg-form__container">
                <div className = "form-title__container">
                    <h3 className = "form-title__container-text">Полное имя:</h3>
                </div>
                <div className = "input-container">
                    <div className="form-group">
                        {(surnameDirty && surnameError) && <div className = "input-error__text">{surnameError}</div>}
                        <input 
                            onChange = {(event) => surnameHandler(event.target.value)}
                            onBlur = {event => blurHandler(event)}
                            placeholder = "Фамилия..."
                            name = "surname" 
                            type = "surname" 
                            className="form-control input-reg-form" 
                            id="inputSurname" 
                            aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-group">
                        {(nameDirty && nameError) && <div className = "input-error__text">{nameError}</div>}
                        <input 
                            onChange = {(event) => nameHandler(event.target.value)}
                            onBlur = {event => blurHandler(event)}
                            placeholder = "Имя..." 
                            name = "name"
                            type="name" 
                            className="form-control input-reg-form" 
                            id="inputName"></input>
                    </div>
                    <div className="form-group">
                        {(patronymicDirty && patronymicError) && <div className = "input-error__text">{patronymicError}</div>}
                        <input 
                            onChange = {(event) => patronymicHandler(event.target.value)}
                            onBlur = {event => blurHandler(event)}
                            placeholder = "Отчество..." 
                            name = "patronymic"
                            type="patronymic" 
                            className="form-control input-reg-form" 
                            id="inputPatronymic"></input>
                    </div>
                </div>
                    <button disabled = {!formValid} type="submit" className="btn btn-primary onward-btn" onClick = {(event) => goOnward(event)}>
                        <p className = "onward-btn__text">Далее</p>
                    </button>
            </form>
            </div>
            {
                styleForForm.display === "none" 
            ?
                <FormNext
                    setDateBirthday = {setDateBirthday}
                    setGender = {setGender}
                    setLivePlace = {setLivePlace}
                    styleForForm = {styleForForm}
                    setStyleForForm = {setStyleForForm}
                    styleForNextForm = {styleForNextForm}
                    setStyleForNextForm = {setStyleForNextForm}
                    regUser = {regUser}
                />
            :
                null
            }
        </>
    )
}
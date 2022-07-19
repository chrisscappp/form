import React from 'react'

export const FormNext = ({setDateBirthday, setGender, setLivePlace, setStyleForForm, setStyleForNextForm, regUser}) => {

    const [dateBirthdayDirty, setDateBirthdayDirty] = React.useState(false)
    const [genderDirty, setGenderDirty] = React.useState(false)
    const [livePlaceDirty, setLivePlaceDirty] = React.useState(false)

    const [dateBirthdayError, setDateBirthdayError] = React.useState("Дата рождения не может быть пустым")
    const [genderError, setGenderError] = React.useState("Пол не может быть пустым")
    const [livePlaceError, setLivePlaceError] = React.useState("Место жительства не может быть пустым")

    const [formValid, setFormValid] = React.useState(false)

    React.useEffect(() => {
        if (dateBirthdayError || genderError || livePlaceError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [dateBirthdayError, genderError, livePlaceError])

    const blurHandler = (event) => {
        switch (event.target.name) {
            case "dateBirthday" :
                setDateBirthdayDirty(true)
                break
            case "gender" :
                setGenderDirty(true)
                break
            case "livePlace" :
                setLivePlaceDirty(true)
                break
        }
    }

    const dateBirthdayHandler = (title) => {
        setDateBirthday(title)
        if (title) {
            setDateBirthdayError("")
        } else {
            setDateBirthdayError("Фамилия не может быть пустым")
        }
        if (title && (title[2] !== "." || title[5] !== ".")) {
            setDateBirthdayError("Неккоректная дата рождения")
        } else {
            setDateBirthdayError("")
        }
    }

    const genderHandler = (title) => {
        setGender(title)
        if (title) {
            setGenderError("")
        } else {
            setGenderError("Фамилия не может быть пустым")
        }
    }

    const livePlaceHandler = (title) => {
        setLivePlace(title)
        if (title) {
            setLivePlaceError("")
        } else {
            setLivePlaceError("Фамилия не может быть пустым")
        }
    }

    const goBack = (event) => {
        event.preventDefault()
        setStyleForNextForm({
            display: "none"
        })
        setStyleForForm({
            display: null
        })
    }

    return (
        <>
            <div className = "reg-form__wrapper">
            <span onClick = {(event) => goBack(event)}>
                <div className = "arrow-left__wrapper">
                    <div className = "arrow-left"></div>
                </div>
            </span>
            <form className = "reg-form__container">
                <div className = "form-title__container">
                    <h3 className = "form-title__container-text">Доп данные:</h3>
                </div>
                <div className = "input-container">
                    <div className="form-group">
                        {(dateBirthdayDirty && dateBirthdayError) && <div className = "input-error__text">{dateBirthdayError}</div>}
                        <input 
                            onBlur = {event => blurHandler(event)}
                            onChange = {(event) => dateBirthdayHandler(event.target.value)}
                            placeholder = "Дата рождения... (пример: 04.01.2000)"
                            name = "dateBirthday" 
                            type="dateBirthday" 
                            className="form-control input-reg-form" 
                            id="inputDateBirthday" 
                            aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-group">
                        {(genderDirty && genderError) && <div className = "input-error__text">{genderError}</div>}
                        <input
                            onBlur = {event => blurHandler(event)}
                            onChange = {(event) => genderHandler(event.target.value)} 
                            placeholder = "Пол..." 
                            name = "gender"
                            type="gender" 
                            className="form-control input-reg-form" 
                            id="inputGender"></input>
                    </div>
                    <div className="form-group">
                        {(livePlaceDirty && livePlaceError) && <div className = "input-error__text">{livePlaceError}</div>}
                        <input 
                            onBlur = {event => blurHandler(event)}
                            onChange = {(event) => livePlaceHandler(event.target.value)}
                            placeholder = "Место жительства..." 
                            name = "livePlace"
                            type="livePlace" 
                            className="form-control input-reg-form" 
                            id="inputLivePlace"></input>
                    </div>
                </div>
                    <button disabled = {!formValid} type="submit" className="btn btn-primary reg-btn" onClick = {(event) => regUser(event)}>
                        <p className = "reg-btn__text">Зарегестрировать</p>
                    </button>
                    
            </form>
            </div>
        </>
    )
}
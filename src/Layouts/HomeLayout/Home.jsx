import React from 'react'
import { NavLink  } from "react-router-dom"

const Home = () => {

    return (
        <div className = "homePage-wrapper">
            <div className = "homePage-container">
                <div className = "homePage-container__title">
                    <h2 className = "homePage-container__title-text">
                        Регистрация пользователей
                    </h2>
                </div>
                <div className = "homePage-container__buttons">
                    <button className = "homePage-container__buttons-btn btn btn-primary">
                        <NavLink to = "/users" className="inactive" activeclassname="active">
                            <p className = "homePage-container__buttons-btn-text">Список пользователей</p>
                        </NavLink>
                    </button>
                    <button className = "homePage-container__buttons-btn btn btn-primary">
                        <NavLink to = "/form" className="inactive" activeclassname="active">
                            <p className = "homePage-container__buttons-btn-text">Новый пользователь</p>
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home 
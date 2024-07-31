import React from 'react'
import style from './style.module.scss'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";



export default function Header({ isDark, setIsDark, language, setLanguage }) {
    const updateLang = () => {
        language == "he" ? setLanguage("en") : setLanguage("he")
    }
    const updateIsDark = () => {
        setIsDark(!isDark)
    }
    return (
        <div className={`${style.container} ${isDark ? 'dark' : 'light'}`}>
            <p>Portfolio</p>
            <div className={style.headerToggles}>
                <button className={style.language} onClick={() => { updateLang() }} >{language == "he" ? "English" : "עברית"}</button>
                <button className={style.toggleBtn} onClick={() => { updateIsDark() }}>{isDark ? <FaSun size={24} /> : <FaMoon size={24} />}</button>
            </div>
        </div>

    )
}

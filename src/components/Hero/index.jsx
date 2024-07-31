import React from 'react'
import style from './style.module.scss'
import { aboutData } from "../../data/about"

export default function Hero({ language }) {
    console.log(language)
    return (
        <section className={style.hero}>
            <div className={style.heroContent}>
                <h1>{aboutData[language].name}</h1>
                <p>{aboutData[language].header}</p>
            </div>
        </section>
    )
}

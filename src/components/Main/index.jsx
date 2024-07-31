import React from 'react'
import style from "./style.module.scss"
import { aboutData } from "../../data/about"

export default function Main({ language, isDark }) {
    return (
        <div className={`${style.container} `}>
            <section className={style.aboutMe}>
                <h2>{aboutData[language].title}</h2>
                <p>{aboutData[language].intro}</p>
                <h3>{aboutData[language].skills.title}</h3>

                <ul>
                    {aboutData[language].skills.list.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>

                <h3>{aboutData[language].experience.title}</h3>
                <h4>{aboutData[language].experience.title}</h4>
                <div className={style.job}>
                    {aboutData[language].experience.jobs.map((job) => {
                        return <>
                            <h4>{job.title}</h4>
                            <p>{job.company} | {job.period}</p>
                            <p>{job.description}</p>
                        </>
                    })}
                </div>
                <h3>{aboutData[language].education.title}</h3>
                <p>{aboutData[language].education.degree}</p>
                <p>{aboutData[language].education.university} , {aboutData[language].education.year}</p>
                <h3>{language == 'he' ? "אישי" : "Personal"}</h3>
                <p>{aboutData[language].personal}</p>
            </section>
        </div>
    )
}

import React from 'react'
import style from './style.module.scss'
import { portfolioData } from "../../data/portfolio"

export default function Portfolio({ language, isDark }) {
    return (
        <section className={style.container}>
            <h2>{language == 'he' ? "העבודות שלי" : "My Work"}</h2>
            <div className={style.portfolioGrid}>{portfolioData.map((project) => {
                return (
                    <div key={project.id} className={`${style.portfolioItem} card ${isDark ? 'dark' : 'light'}`}>
                        <img src={project.img} alt={project.title[language]} />
                        <div className={style.portfolioItemContent} >
                            <h3>{project.title[language]}</h3>
                            <p>{project.desc[language]}</p>
                            <div className={style.portfolioItemTags}>
                                {project.tags.map((tag, i) => <span key={i} className={style.tag}>{tag}</span>)}
                            </div>
                        </div>

                    </div>)
            })} </div>
        </section>
    )
}

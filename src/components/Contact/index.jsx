import React from 'react'
import style from './style.module.scss'
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { aboutData } from "../../data/about"




export default function Contact({ language }) {
    return (
        <section className={style.container}>
            <h2>{aboutData[language].contact.title}</h2>
            <p>{aboutData[language].contact.text}</p>
            <div className={style.contactLinks}>
                {aboutData[language].contact.links.map((l, i) => <a key={i} href={l.link}>
                    {l.icon == "whatsApp" ? <FaWhatsapp size={24} /> :
                        l.icon == "Email" ? <MdEmail size={24} /> :
                            l.icon == "Facebook" ? <FaFacebook size={24} /> : <FaLinkedin size={24} />}
                    {l.name}

                </a>)}

            </div>
            <div className={style.contactForm}>
                <h3>{aboutData[language].contact.leaveMessage}</h3>
                <form>
                    <input type="text" required placeholder={aboutData[language].contact.name} />
                    <textarea required placeholder={aboutData[language].contact.message} />
                    <button type='submit'>{aboutData[language].contact.send}</button>
                </form>
            </div>
        </section>
    )
}

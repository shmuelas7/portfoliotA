import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const aboutData = {
    en: {
        contact: {
            title: "Contact Me",
            text: "Feel free to reach out via email or through any of the social media platforms below:",
            links: [{
                name: "Send me a message on WhatsApp",
                icon: 'whatsApp',
                link: "https://wa.me/972533329773",
            }, {
                name: "Send me an email",
                icon: "Email",
                link: "https://mail.google.com/mail/u/0/#inbox",
            }, {
                name: "Connect with me on Facebook",
                icon: "Facebook",
                link: "https://www.facebook.com/shmuel.asherov/",
            }, {
                name: "Connect with me on Linkdin",
                icon: "Linkedin",
                link: "https://www.linkedin.com/in/shmuel-asherov-79608718b/",
            }]
            ,
            leaveMessage: "Or leave a message here:",
            name: "Your Name",
            message: "Your Message",
            send: "Send Message"
        },
        name: "Shmuel Asherov",
        header: "Fullstack Developer passionate about creating innovative web solutions",
        title: "About Me",
        intro: "Hello! Shmuel asherov, a passionate fullstack developer with over 2 years of experience in creating innovative web solutions.",
        skills: {
            title: "Skills",
            list: ["JavaScript (ES6+)", "React", "Node.js", "Scss", "SQL & NoSQL Databases", "RESTful APIs", "Git", "Agile Methodologies", "HTML & CSS", "socket.io", "MongoDB", "TypeScript", "JWT"]
        },
        experience: {
            title: "Experience",
            jobs: [
                {
                    title: "Fullstack Developer",
                    company: "Umoove",
                    period: "2022 ",
                    description: "Built a system that improves learning abilities"
                },
                {
                    title: "Fullstack Developer",
                    company: "Freelancer",
                    period: "2022",
                    description: "Developed and maintained multiple client projects, focusing on responsive design and performance optimization."
                }
            ]
        },
        education: {
            title: "Education",
            degree: "Practical Software Engineer",
            university: "Ariel University",
            year: "2021"
        },

        personal: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities."
    },
    he: {
        contact: {
            title: "צור קשר",
            text: "אתם מוזמנים לפנות אליי במייל או באמצעות אחת מפלטפורמות המדיה החברתית הבאות:",
            links: [{
                name: "שלח לי הודעה בוואטסאפ",
                icon: "whatsApp",
                link: "https://wa.me/972533329773",
            }, {
                name: "שלח לי מייל",
                icon: "Email",
                link: "https://mail.google.com/mail/u/0/#inbox",
            }, {
                name: "התחבר איתי בפייסבוק",
                icon: "Facebook",
                link: "https://www.facebook.com/shmuel.asherov/",
            }, {
                name: "התחבר איתי בלינקדאין",
                icon: "Linkedin ",
                link: "https://www.linkedin.com/in/shmuel-asherov-79608718b/",
            }]
            ,
            leaveMessage: "או השאירו הודעה כאן:",
            name: "שמך",
            message: "הודעה שלך",
            send: "שלח הודעה"
        },
        name: "שמואל אשרוב",
        header: "מפתח פולסטאק בעל תשוקה ליצירת פתרונות אינטרנט חדשניים",
        title: "עליי",
        intro: "שלום! אני שמואל אשרוב, מפתח פולסטאק נלהב עם ניסיון של למעלה מ-2 שנים ביצירת פתרונות אינטרנט חדשניים.",
        skills: {
            title: "כישורים",
            list: ["JavaScript (ES6+)", "React", "Node.js", "Python", "מסדי נתונים SQL ו-NoSQL", "RESTful APIs", "Git", "מתודולוגיות Agile", "socket.io", "MongoDB", "TypeScript", "JWT"]
        },
        experience: {
            title: "ניסיון",
            jobs: [
                {
                    title: "מפתח פולסטאק",
                    company: "Umoove",
                    period: "2022",
                    description: "בניית מערכת שמשפרת את  יכולות הלמידה"
                },
                {
                    title: "מפתח פולסטאק",
                    company: "Freelancer",
                    period: "2022",
                    description: "פיתחתי ותחזקתי מספר פרויקטים ללקוחות, עם דגש על עיצוב רספונסיבי ואופטימיזציה של ביצועים."
                }
            ]
        },
        education: {
            title: "השכלה",
            degree: "הנדסאי תוכנה",
            university: "אוניברסיטת אריאל",
            year: "2021"
        },
        personal: "כשאני לא מקודד, אפשר למצוא אותי חוקר טכנולוגיות חדשות, תורם לפרויקטים בקוד פתוח, או נהנה מפעילויות בחוץ."
    }
};
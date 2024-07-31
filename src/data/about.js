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
        intro: "Hello! I'm John Doe, a passionate fullstack developer with over 5 years of experience in creating innovative web solutions.",
        skills: {
            title: "Skills",
            list: ["JavaScript (ES6+)", "React", "Node.js", "Scss", "SQL & NoSQL Databases", "RESTful APIs", "Git", "Agile Methodologies", "HTML & CSS"]
        },
        experience: {
            title: "Experience",
            jobs: [
                {
                    title: "Senior Fullstack Developer",
                    company: "Tech Innovators Inc.",
                    period: "2020 - Present",
                    description: "Lead development of scalable web applications, mentoring junior developers, and implementing best practices."
                },
                {
                    title: "Fullstack Developer",
                    company: "Web Solutions Co.",
                    period: "2018 - 2020",
                    description: "Developed and maintained multiple client projects, focusing on responsive design and performance optimization."
                }
            ]
        },
        education: {
            title: "Education",
            degree: "Bachelor of Science in Computer Science",
            university: "Tech University",
            year: "2018"
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
        intro: "שלום! אני ג'ון דו, מפתח פולסטאק נלהב עם ניסיון של למעלה מ-5 שנים ביצירת פתרונות אינטרנט חדשניים.",
        skills: {
            title: "כישורים",
            list: ["JavaScript (ES6+)", "React", "Node.js", "Python", "מסדי נתונים SQL ו-NoSQL", "RESTful APIs", "Git", "מתודולוגיות Agile"]
        },
        experience: {
            title: "ניסיון",
            jobs: [
                {
                    title: "מפתח פולסטאק בכיר",
                    company: "Tech Innovators Inc.",
                    period: "2020 - היום",
                    description: "מוביל פיתוח של אפליקציות ווב מדרגיות, מנחה מפתחים צעירים, ומיישם שיטות עבודה מומלצות."
                },
                {
                    title: "מפתח פולסטאק",
                    company: "Web Solutions Co.",
                    period: "2018 - 2020",
                    description: "פיתחתי ותחזקתי מספר פרויקטים ללקוחות, עם דגש על עיצוב רספונסיבי ואופטימיזציה של ביצועים."
                }
            ]
        },
        education: {
            title: "השכלה",
            degree: "תואר ראשון במדעי המחשב",
            university: "אוניברסיטת טק",
            year: "2018"
        },
        personal: "כשאני לא מקודד, אפשר למצוא אותי חוקר טכנולוגיות חדשות, תורם לפרויקטים בקוד פתוח, או נהנה מפעילויות בחוץ."
    }
};
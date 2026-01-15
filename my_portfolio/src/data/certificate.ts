export interface Certificate {
    id: number;
    title: string;
    img: string;
    description: string;
}

export const certificates: Certificate[] = [
    {
        id: 1,
        title: "Mobile Web Application",
        img: "/assets/certificates/web-app-certificate.PNG",
        description: "Completed a Mobile Web Application training course and applied HTML, CSS, PHP, and Bootstrap skills to develop a responsive shopping website featuring an Admin system for inventory and order management."
    }, {
        id: 2,
        title: "Global Project-Based",
        img: "/assets/certificates/gpbl-certificate.PNG",
        description: "Collaborated with Japanese students in a Global Project-Based Learning workshop to address academic challenges assigned by professors, fostering effective cross-cultural communication and teamwork skills."
    }, {
        id: 3,
        title: "Basic Automation: PLC & HMI",
        img: "/assets/certificates/plc-certificate.PNG",
        description: "Developed control system solutions using WPL and DOP based on simulated customer requirements, effectively translating client needs into functional machine logic."
    }, {
        id: 4,
        title: "Robotic Arm Programming",
        img: "/assets/certificates/arm-bot-certificate.PNG",
        description: "Implemented Python scripts to control a scale-model industrial robot, utilizing Digital Twin technology for synchronized simulation and physical operation."
    }, {
        id: 5,
        title: "The Star English Experience Camp",
        img: "/assets/certificates/english-camp-certificate.PNG",
        description: "Developed comprehensive English communication skills by actively practicing speaking, listening, reading, and writing."
    }
]

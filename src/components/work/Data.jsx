/* eslint-disable no-sequences */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import work1 from "../../assets/work1.png"
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import work4 from "../../assets/work4.png";
import work5 from "../../assets/work5.png";
import work6 from "../../assets/work6.1.png";

export const projectsData = [
    {
        id: 1,
        img: work1,
        title: "STEP Landing Page",
        category: "Web",
        description:
            'This is a landing page for information about a smart stick, The smart stick is a device that can be used to help people with disabilities. The landing page was created using HTML, CSS, and JavaScript.',
        link: "https://stepweb.herokuapp.com/landing/index.html"
    },
    {
        id: 2,
        img: work2,
        title: "Android Studio App - MzMotors",
        category: "App",
        description:
            'This is an Android Studio app for a car dealership. The app was created using Java and XML. The app allows users to view the inventory of cars, view the details of each car, and contact the dealership, and the app also allows the dealership to add, edit, and delete cars from the inventory.',
        link: "https://www.figma.com/file/sFTo0rVZJoiFudAxPH4fID/MZ-MOTORS-APP?node-id=0%3A1&t=o0IuHpctb3NlOfp2-1"
    },
    {
        id: 3,
        img: work3,
        title: "Web App Design - UI/UX",
        category: "Design",
        description:
            'This is a web app design for the IT Giverment, it is a platform that allows to do all the intern task in one place and make more easy the signature of documents, make mettings, call the associeted people and more. The design was created using Figma.',
        link: "https://www.figma.com/file/jVHFj9BWYB8KlLbdmF6ls5/TROQUEL?t=MC4tlxftcoj86Cy2-1"
    },
    {
        id: 4,  
        img: work4,
        title: "Mobile App Figma Design",
        category: "Design",
        description:
            'This is a mobile app design for an insurance company, the app allows users to view the insurance plans, view the details of each plan, and contact the company. The design was created using Figma.',
        link: "https://www.figma.com/file/BHBMPuQU80XkacBJKfN7qU/MOBILE-APP-INSURANCE?t=MC4tlxftcoj86Cy2-1"
    },
    {
        id: 5,
        img: work5,
        title: "Wordpress Programmer",
        category: "Web",
        description:
            'This is a experience as a Wordpress Programmer in PHP, working with a team, to make a website for a platform of cnferences named CXO Live in Texas, USA. Using divi engine, divi builder to make de frontend and the wordpress backend to make the backend ans de info display in the sections.',
        link: "https://revolutionaries.zscaler.com/events/cxosummit/live/houston"
    },
    {
        id: 6,
        img: work6,
        title: "IoT Application | Smart Stick",
        category: "Web",
        description:
            'This is a IoT application for a smart stick, the smart stick is a device that can be used to help people with disabilities. The application was in a raspberry pi 3, using python and Ubidots to make the connection with the cloud.',
        link: ""
    }
]

export const projectsNav = [
    {
        name: "All"
    },
    {
        name: "Web"
    },
    {
        name: "App"
    },
    {
        name: "Design"
    }
]
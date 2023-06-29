import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
        name: "Arshit Portal",
        description:
            "As a front-end developer, I was responsible for designing and implementing the new portal design, and in general, I redesigned all the parts of the portal and implemented them in the best and most optimal way, which caused the portal to change significantly in terms of design and optimization.",
        image: "/arshit_portal.png",
        link: "https://demo.charityapp.ir/",
    },
    {
        name: "Arshit CRM",
        description: "With React.js and Redux, we created a dynamic customer management interface. Our libraries enabled us to interact with the API and access the data we needed. In addition, we used these libraries to create two separate panels, one for admins and one for customers.The quality of my work and attention to detail showed my dedication to the project. The manager and customers were impressed with how I communicated my ideas.",
        image: "/Arshit-CRM.png",
        link: "",
    },
    {
        name: "Nikname Platform",
        description:
            "I was responsible for the design and development of the front end of a platform dedicated to the collection of donations and expenses for grief and birthdays of loved ones who wish to donate to their desired charity and title, which was done in the best way that after donating to the charity Nazar provided users with an electronic postcard that they could share with their friends, and special animations and songs were used in this postcard.",
        image: "/Name_Nik.png",
        link: "https://www.arshitrayaneh.com/name",
    },
    {
        name: "Arshit Website",
        description:
            "With a more user-friendly and intuitive interface, I was able to make it easier for visitors to find and access content. I also added interactive elements and animations to make the site more engaging and entertaining. As a result, the site was more enjoyable to use.",
        image: "/Arshit_website.png",
        link: "https://www.arshitrayaneh.com/",
    },
    {
        name: "Game Hub",
        description:
            "In this project, I used the libraries react.js + typescript, Chakra UI, Zustand, react-icons, framer-motion, emotion, as well as the rawg API for the data required by the games, as well as React Query to handle the data in the program",
        image: "/gameHub.png",
        link: "https://game-i8zk5nfbi-mtavakolikia.vercel.app/",
        github: "https://github.com/MTavakolikia/game-hub"
    },
    {
        name: "Admin Dashboard",
        description:
            "In this project I tried to build an admin dashboard that you can find a cool UI and different chart at it and its also support multi language , dark and light mode.Also I used react.js , Marterial UI and other library like yup , full calendar , formik , nivo chart , emotion and I used react-i18next for multi language",
        image: "/MT_Admin_Dashboard.png",
        link: "https://mt-admin-dashboard-mtavakolikia.vercel.app",
        github: "https://github.com/MTavakolikia/MT-Admin-Dashboard"
    },
]

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="my-10 text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-20">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col justify-center items-center  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className=" md:w-1/2">
                                        <Link href={project?.link}>
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-4 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            {project?.github &&
                                                <Link href={project?.github} target="_blank">
                                                    <BsGithub
                                                        size={30}
                                                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                    />
                                                </Link>
                                            }
                                            {project.link &&
                                                <Link href={project.link} target="_blank">
                                                    <BsArrowUpRightSquare
                                                        size={30}
                                                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                    />
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default ProjectsSection

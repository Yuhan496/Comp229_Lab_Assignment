import RowComponent from "../components/RowComponent"

import image_project1 from "../assets/project1.png"
import image_project2 from "../assets/project2.png"
import image_project3 from "../assets/project3.png"

function Projects() {

    const projects = [
        { imagePath: image_project1,
        title: "BBQ Restaurant Website — Completed 2026",
        text: "Designed and developed a responsive restaurant website using HTML, CSS, and JavaScript. Added multiple pages and interactive features to present restaurant information in a clear and user-friendly layout."
    },
       { imagePath: image_project2,
        title: "Book Publisher Database System — Completed 2026",
        text: "Worked with a team to design and build a relational database using Oracle SQL Developer. Created tables, SQL queries, and a normalized database structure."
    },
       { imagePath: image_project3,
        title: "AI Chatbot — Expected Completion: 2026",
        text: "Developing a Python-based AI chatbot using natural language processing and conversation logic. The project is currently in progress with additional features being added."
    } ]

    return (
        <div>
            <h1>My Projects</h1>
            {projects.map((item, index) => (
                    <RowComponent key={index} item={item} />
                ))}
        </div>
    )
}

export default Projects
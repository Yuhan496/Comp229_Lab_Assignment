import RowComponent from "../components/RowComponent"

import image_service1 from "../assets/service1.png"
import image_service2 from "../assets/service2.png"

function Services() {

    const services = [
     {  imagePath: image_service1,
        title: "Software & Web Development",
        text: "I can develop simple responsive websites and software applications using HTML, CSS, JavaScript, React, Python, Java, C#, and SQL. I can also assist with debugging, testing, and basic database development."
    },
     {  imagePath: image_service2,
        title: "IT Support & Troubleshooting",
        text: "I can provide basic technical support for Windows computers, software installation, development tools, and common configuration issues. I can also assist with troubleshooting, software setup, and general technical problems."
    }
    ]

    return (
        <div>
            <h1>My Services</h1>

            {services.map((service, index) => (
                <RowComponent key={index} item={service} />
            ))}
        </div>
    )
}

export default Services
function References() {

    const reference1 = {
        name: "Yuvaraj Sambandan",
        company: "Centennial College",
        position: "Professor",
        testimonial: "Yuhan is a motivated student who demonstrates strong technical skills and a willingness to learn."
    }

    const reference2 = {
        name: "Sadit Khan",
        company: "Centennial College",
        position: "Professor",
        testimonial: "Yuhan works well on programming tasks and shows good problem-solving and communication skills."
    }

    return (
        <div>
            <h1>References</h1>

            <div>
                <h2>{reference1.name}</h2>
                <p><strong>Company:</strong> {reference1.company}</p>
                <p><strong>Position:</strong> {reference1.position}</p>
                <p><strong>Testimonial:</strong> {reference1.testimonial}</p>
            </div>

            <div>
                <h2>{reference2.name}</h2>
                <p><strong>Company:</strong> {reference2.company}</p>
                <p><strong>Position:</strong> {reference2.position}</p>
                <p><strong>Testimonial:</strong> {reference2.testimonial}</p>
            </div>
        </div>
    )
}

export default References
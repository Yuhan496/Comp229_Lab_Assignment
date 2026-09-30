import { useNavigate } from "react-router-dom"

function Contact() {

    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        // Capture the form values before returning to the Home page.
        const formData = new FormData(event.currentTarget)
        console.log(Object.fromEntries(formData.entries()))

        navigate("/")
    }

    return (
        <div>
            <h1>Contact Me</h1>

            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Email: ysu88@my.centennialcollege.ca</p>
                <p>Phone: (672) 667-9226</p>
                <p>Location: Richmond Hill, Ontario</p>
            </div>

            <form onSubmit={handleSubmit}>

                <label>First Name:</label>
                <input type="text" name="firstName" required />

                <label>Last Name:</label>
                <input type="text" name="lastName" required />

                <label>Contact Number:</label>
                <input type="tel" name="contactNumber" />

                <label>Email Address:</label>
                <input type="email" name="email" required />

                <label>Message:</label>
                <textarea name="message" required />

                <button type="submit">
                    Send Message
                </button>

            </form>
        </div>
    )
}

export default Contact


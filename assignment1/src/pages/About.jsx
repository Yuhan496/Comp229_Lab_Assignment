import image_selfie from "../assets/selfie.png";
import RowComponent from "../components/RowComponent";


function About() {
  const aboutInfo = {
        imagePath: image_selfie,
        title: "Yuhan Su",
        text: "I am a Software Engineering Technology student with an interest in artificial intelligence, web development, programming, and data analysis. I enjoy developing practical projects while continuing to improve my technical, problem-solving, and teamwork skills."
    }

  return ( 
    <div>
      <h1>About Me</h1>
       <RowComponent item={aboutInfo} />
            <a href="/resume.pdf" target="_blank">
                View My Resume
            </a>
    </div>
  );
}
export default About;
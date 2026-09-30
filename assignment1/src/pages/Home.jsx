import { Link } from "react-router-dom";

function Home() {
  return ( 
    <div>
      <h1>Welcome to my Home Page</h1>
      <p>
        Thank you for visiting my personal portfolio website.
      </p>

      <section>
        <h2>Mission Statement</h2>

        <p>
          My goal is to continue developing my skills in software development,
          web technologies, data analysis, and artificial intelligence while
          creating practical and useful applications. I aim to keep learning,
          improving my technical abilities, and applying my knowledge to
          real-world projects.
        </p>
      </section>
      <Link to="/about">
        <button>About Me</button>
      </Link>
    </div>
  );
}
export default Home;
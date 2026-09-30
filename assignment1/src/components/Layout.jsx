import { Link } from "react-router-dom";
import image_logo  from "../assets/logo.png";

function Layout() {
  return (
    <>
    <div className = "Navbar">
        <h1>My Portfolio</h1>
        <img src={image_logo} alt="YS portfolio logo"/>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/references">References</Link>
        <Link to="/contact">Contact</Link>
    </div>
    </> 
  );
}
export default Layout;
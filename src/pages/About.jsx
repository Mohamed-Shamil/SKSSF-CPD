import Navbar from "../components/Navbar";
import AboutComponent from "../components/AboutComponents/about";
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      
      <Navbar />

      <div className="mt-32 mb-5"> 
        <AboutComponent />
      </div>
      <Footer/>
    </>
  );
}

export default About;

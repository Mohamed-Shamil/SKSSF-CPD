import Navbar from "../components/Navbar"
import Banner from "../components/HomeComponents/Banner"
import Body from "../components/HomeComponents/Body"
import Footer from "../components/Footer"
import Showcase from "../components/HomeComponents/Showcase"

const Home = () => {
  return (
    <div >
        <Navbar/>
        <Banner/>
        <Body/>
        <Showcase/>
        <Footer/>

    </div>
  )
}

export default Home
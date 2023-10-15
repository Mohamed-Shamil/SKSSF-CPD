// import React from 'react'
import Viqaya from "../components/SubwingComponents/Viqaya";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trend from '../components/SubwingComponents/Trend'
import Ibad from '../components/SubwingComponents/Ibad'
import Media from '../components/SubwingComponents/Media'
import Sahachari from '../components/SubwingComponents/Sahachari'
import Campus from '../components/SubwingComponents/CampusWing'
import Sargalaya from '../components/SubwingComponents/Sargalaya'
import Twalaba from '../components/SubwingComponents/Twalaba'

import { useParams } from "react-router-dom";

const Subwing = () => {

  const { subwingName } = useParams(); // Get the subwingName from the URL

  console.log(subwingName);
  let SubwingComponent = null;

  switch (subwingName) {
    case 'viqaya':
      SubwingComponent = <Viqaya />;
      break;
    case 'trend':
      SubwingComponent = <Trend />;
      break;
    case 'campus':
      SubwingComponent = <Campus />;
      break;
    case 'ibad':
      SubwingComponent = <Ibad />;
      break;
    case 'sargalaya':
      SubwingComponent = <Sargalaya />;
      break;
    case 'media':
      SubwingComponent = <Media />;
      break;
    case 'twalaba':
      SubwingComponent = <Twalaba />;
      break;
    case 'sahachari':
      SubwingComponent = <Sahachari />;
      break;
    default:
      break;
  }

  return (
    <>
      <Navbar />
      <div className="mt-32 mb-5">
        {SubwingComponent}
      </div>
      <Footer />
    </>
  );
}

export default Subwing;

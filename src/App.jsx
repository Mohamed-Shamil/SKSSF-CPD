import  { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));
const Subwings = lazy(()=>import('./pages/Subwing'))


function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route path="/subwings/:subwingName" element={<Subwings />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

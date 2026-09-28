import { Fragment } from "react";
import "./App.css"
import { GalleryCard } from "./components/GalleryCard";
import { HeroArea } from './components/HeroArea.jsx';
import {Nav} from './components/Nav.jsx'
import { Events } from "./components/Events.jsx";
const App = () => {

  return (
    <>
      {/* <Nav/>
      <HeroArea/>
      <GalleryCard/> */}
      <Events/>
    </>
  );
};



export default App;
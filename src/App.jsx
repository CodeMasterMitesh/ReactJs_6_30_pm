import { Fragment } from "react";
import "./App.css"
import { GalleryCard } from "./components/GalleryCard";
import { HeroArea } from './components/HeroArea.jsx';
import {Nav} from './components/Nav.jsx'
const App = () => {

  return (
    <>
      <Nav/>
      <HeroArea/>
      <GalleryCard/>
    </>
  );
};



export default App;
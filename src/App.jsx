import { Fragment } from "react";
import "./App.css"
import { GalleryCard } from "./components/GalleryCard";
import { HeroArea } from './components/HeroArea.jsx';
import {Nav} from './components/Nav.jsx'
import { Events } from "./components/Events.jsx";
import { EventProps } from "./components/EventProps.jsx";
import { StateManagement } from "./hooks/stateManagement.jsx";
import { StudentData } from "./hooks/StudentData.jsx";
import { LiftingUpState } from "./components/LiftingUpState.jsx";
import { ProductCounterApp } from "./components/ProductCounterApp.jsx";
import { Todo } from "./components/Todo.jsx";
const App = () => {

  return (
    <>
      {/* <Nav/>
      <HeroArea/>
      <GalleryCard/> */}
      {/* <Events/> */}
      {/* <EventProps/> */}
      {/* <StateManagement/> */}
      {/* <StudentData /> */}
      {/* <LiftingUpState/> */}
      {/* <ProductCounterApp/> */}
      <Todo/>
    </>
  );
};



export default App;

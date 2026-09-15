import { Fragment } from "react";
import "./App.css"
// import { GalleryCard } from "./components/GalleryCard";

const App = () => {

  return (
      // [
      //   <GalleryCard/>,
      //   <GalleryCard/>,
      //   <GalleryCard/>

      // ]

    //  <React.Fragment>
    //     <GalleryCard/>
    //     <GalleryCard/>
    //     <GalleryCard/>
    //  </React.Fragment>

    // <Fragment>
    //     <GalleryCard/>
    //     <GalleryCard/>
    //     <GalleryCard/>
    // </Fragment>

        <>
          <GalleryCard/>
          <GalleryCard/>
          <GalleryCard/>
        </>
  );
};


// same page componenet

const GalleryCard = () =>{

  const title = "Images 111";
  // const img = "im3.jpg";

  const getImages = () => {
      const img = "im3.jpg";
      return img;
  }

  return (
     <div className="gallery">
        <img src={getImages()} alt="im1.jpg" />
          {/* {console.log(getImages)}; */}
        <h3><span>Title : </span> {title}</h3>
    </div>
  )
}

export default App;
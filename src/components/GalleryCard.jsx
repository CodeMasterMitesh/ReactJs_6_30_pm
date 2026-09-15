import galleryData from '../data/gallery.json'
import { Button } from "./Button";
// {console.log(galleryData)}

export const GalleryCard = () =>{
  return (
    <div className="gallery">
        {
          galleryData.map((e)=>{
            return (
              <div key={e.id} className="card">
                <img src={e.imgPath} alt={e.imgPath}/>
                <h3><span>Title : </span> {e.title}</h3>
                <h3><span>Price : </span> {e.price}</h3>
                <Button name="Buy" target="_blank" link={e.productLink}/>
              </div>
            )
          })
        }
          {/* 
          <div className="card">
            <img src={galleryData[0].imgPath} alt="im1.jpg"/>
            <h3><span>Title : </span> {galleryData[0].title}</h3>
          </div>
          <div className="card">
            <img src={galleryData[1].imgPath} alt="im1.jpg"/>
            <h3><span>Title : </span> {galleryData[1].title}</h3>
          </div>
          <div className="card">
            <img src={galleryData[2].imgPath} alt="im1.jpg"/>
            <h3><span>Title : </span> {galleryData[2].title}</h3>
          </div> */}
    </div>
  )
}
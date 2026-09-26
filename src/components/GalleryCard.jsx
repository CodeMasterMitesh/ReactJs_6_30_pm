import galleryData from '../data/gallery.json'
import { Button } from "./Button";
import 'bootstrap/dist/css/bootstrap.min.css';

// {console.log(galleryData)}

export const GalleryCard = () => {

  const productBtnStyle = { 
    display: "inline-block", 
    width: "150px", 
    padding: "10px", 
    border: "none", 
    textAlign: "center", 
    borderRadius: "8px", 
    backgroundColor: "royalblue", 
    color: "white" 
  };

  return (
    <div className="gallery" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 20px" }}>
      {
        galleryData.map((e) => {
          return (
            <div key={e.id} className="card">
              <img src={e.imgPath} className='card-img-top' alt={e.imgPath} />
              <div className='card-body'>
                  <h3 className='card-title'><span className='card-title'>Title : </span> {e.title}</h3>
                  <h3><span>Price : </span> {e.price}</h3>
                  <Button bgcolor={"btn btn-success"} name="Buy" target="_blank" link={e.productLink} />
              </div>
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
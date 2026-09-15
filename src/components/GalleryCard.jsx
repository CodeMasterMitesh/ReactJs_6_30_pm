import galleryData from '../data/gallery.json'
// {console.log(galleryData)}

export const GalleryCard = () =>{
  return (
    <div className="gallery">
          {galleryData.map((e)=>{
            return (
              <div key={e.id} className="card">
                <img src={e.imgPath} alt={e.imgPath}/>
                <h3><span>Title : </span> {e.title}</h3>
              </div>
            )
          })}
    </div>
  )
}
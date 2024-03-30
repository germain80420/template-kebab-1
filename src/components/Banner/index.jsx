import "./banner.css"
function Banner(props){
    return (
        <div className="banner">
        <div className="banner-content">
          <img src={props.img} alt="img banner" className="banner-image"/>
          <div className="banner-text-container">
            <h1>{props.title}</h1>
          </div>
        </div>
      </div>
    )
}
export default Banner
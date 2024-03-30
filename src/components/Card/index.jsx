import { useNavigate } from "react-router-dom"
import "./card.css"
import { useState } from "react";
function Card(props){
    const navigate = useNavigate(); // Initialisez useNavigate
    const [hover,setHover] = useState(false)

  // Fonction de redirection lors du clic sur la carte
  const handleCardClick = () => {
    navigate(props.route); // Redirige vers l'URL spécifiée dans props.route
  };
  const borderClass = props.index % 2 === 0 ? "even-border" : "odd-border";

    return(
        <div
      className={`card ${borderClass} ${!props.route && hover ? "hover-effect" : ""}`}
      onClick={handleCardClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card-content">
        {!props.route && hover ? (
          <div className="card-details-menu">
            <h1>{props.price} €</h1>
            <div className="content-description">
                <h2>Description</h2>
                <p>{props.description}</p>
            </div>
            <div className="content-sauce">
                <h2>Sauces</h2>
                <p>{props.sauces}</p>
            </div>
            </div>
        ) : (
          <>
            <img src={props.img} alt="img card" />
            <div className="card-text-container">
              <p>{props.title}</p>
            </div>
          </>
        )}
      </div>
    </div>
    )
}
export default Card
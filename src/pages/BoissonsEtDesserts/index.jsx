import Banner from "../../components/Banner"
import "./boissonsEtDesserts.css"
import imgBanner from "../../assets/img2.jpg"
import imgMenu1 from "../../assets/menu1.png"
import imgMenu2 from "../../assets/menu2.jpg"
import imgMenu3 from "../../assets/menu3.jpg"
import imgMenu4 from "../../assets/menu4.jpg"
import Card from "../../components/Card"


function BoissonsEtDesserts() {
    return (
      <main className="main-menu">
       <Banner img={imgBanner} title="Boissons & Desserts"/>
       <div className="card-container-menus">
          <Card img={imgMenu1} title="Boisson" index={1} price={9.50} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" sauces ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
          <Card img={imgMenu2} title="Boisson" index={2} price={9.50} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" sauces ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
          <Card img={imgMenu3} title="Boisson" index={3} price={9.50} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" sauces ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
          <Card img={imgMenu4} title="Boisson" index={4} price={9.50} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" sauces ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
       </div>
       <div className="card-container-menus">
          <Card img={imgMenu1} title="Dessert" index={5} price={9.50} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" sauces ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
          <Card img={imgMenu2} title="Dessert" index={6} price={9.50} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" sauces ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
          <Card img={imgMenu3} title="Dessert" index={7} price={9.50} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" sauces ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
          <Card img={imgMenu4} title="Dessert" index={8} price={9.50} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" sauces ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
       </div>
      </main>
    )
  }
  export default BoissonsEtDesserts
  
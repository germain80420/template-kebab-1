import Card from "../../components/Card"
import "./home.css"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.png"


function Home() {
    return (
      <main className="main-home">
        <h1>Kebab</h1>
        <div className="cards-container">
            <Card img={img2} title="Menus" route="/menus" index={1}/>
            <Card img={img1} title="A la carte" route="/a-la-carte" index={2}/>
            <Card img={img3} title="Boissons & Desserts" route="/boissons-et-desserts" index={3}/>



        </div>
      </main>
    )
  }
  export default Home
  
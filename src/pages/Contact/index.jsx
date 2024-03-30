import Banner from "../../components/Banner"
import imgBanner from "../../assets/contact.jpg"
import "./contact.css"
function Contact(){
    return(
        <main className="main-contact">
        <Banner img = {imgBanner} title="Contactez-nous"/>

        </main>
    )
}
export default Contact
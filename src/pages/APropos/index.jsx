import Article from "../../components/Article"
import "./aPropos.css"
import img from "../../assets/kebab.jpg"
function APropos() {
    return (
      <main className="main-a-propos">
        <div className="container-a-propos">
        <Article className="presentation" title="Qui sommes-nous ?"
        paragraphes = {[`Sed ut perspiciatis unde omnis iste natus error sit volupta
        tem accusantium doloremque laudantium, totam rem 
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
        architecto beatae vitae dicta sunt explicabo. `,`Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
        aut odit aut fugit, sed quia consequuntur magni dolores eos 
        qui ratione
         `,`Voluptatem sequi nesciunt. Neque porro quisquam est, qui 
         dolorem ipsum quia dolor sit amet, consectetur, adipisci 
         velit, sed quia non numquam eius modi tempora incidunt ut 
         labore et dolore magnam aliquam quaerat voluptatem. Ut 
         enim ad minima veniam, quis nostrum exercitationem ullam 
         corporis suscipit laboriosam, nisi ut aliquid ex ea commodi`,`Consequatur? Quis autem vel eum iure reprehenderit qui in 
         ea voluptate velit esse quam nihil molestiae consequatur, 
         vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`]}
        />
        <img src={img} alt="kebab" />
        </div>
        
      </main>
    )
  }
  export default APropos
  
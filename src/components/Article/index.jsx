import "./article.css"
function Article(props){
    return(
    <div className="container-article">
        <h1>{props.title}</h1>
        <div className="content-article">
            {props.paragraphes.map((p,index)=>(
                <p key={index}>{p}</p>
            ))}

        </div>
    </div>)
}
export default Article
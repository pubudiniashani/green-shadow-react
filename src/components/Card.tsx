
export function Card(props: {image: string; title: string; text: string}){
    return (
        <div className="card text-bg-dark max-w-[300px] ">
            <img src={props.image} className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <p className="card-text"><small>Last updated 18hrs ago</small></p>
            </div>
        </div>
    )
}


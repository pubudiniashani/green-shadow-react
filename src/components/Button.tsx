export function Button(props:{text:string,onClick: () => void ,styles:string}){
    return (
        <button
            onClick={props.onClick}
            className= {props.styles}
            id="btn"
        >
            {props.text}
        </button>
    )
}

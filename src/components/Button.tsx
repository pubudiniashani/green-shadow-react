export function Button(props:{text:string,onClick: () => void }){
    return (
        <button
            onClick={props.onClick}
            className="bg-blue-400 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            id="signup-btn"
        >
            {props.text}
        </button>
    )
}

import "../assets/styles/Card.css"

export function Card(props: { title: string; text: string }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
            {/*<img className="w-full" src={props.image} alt={props.title} />*/}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-blue-800">{props.title}</div>
                <p className="text-gray-700 text-base">
                    {props.text}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
          Last updated 18hrs ago
        </span>
            </div>
        </div>
    );
}

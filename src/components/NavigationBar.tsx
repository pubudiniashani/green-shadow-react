import "../assets/styles/NavigationBar.css"
import {Link} from "react-router-dom";

export function NavigationBar(){
    return (
        <div className="sidebar fixed top-0 left-0 ">

            <Link className="nav-link" to="/dashboard">Dashboard</Link>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link" to="/field">Field</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/staff">Staff</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/crop">Crop</Link>
                </li>

            </ul>
        </div>

    )
}
import "../assets/styles/NavigationBar.css"

export function NavigationBar(){
    return (
        <div className="sidebar fixed top-0 left-0">
            <h3><br/>Dashboard</h3>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="field.html">Field</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="staff.html">Staff</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="crop.html">Crop</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="equipment.html">Equipment</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="log.html">Logs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="vehicle.html">Vehicle</a>
                </li>
            </ul>
        </div>

    )
}